"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteObject = exports.addOrUpdateObject = exports.deleteItems = exports.ListWatch = void 0;
const informer_1 = require("./informer");
const util_1 = require("./util");
class ListWatch {
    constructor(path, watch, listFn, autoStart = true, labelSelector) {
        this.path = path;
        this.watch = watch;
        this.listFn = listFn;
        this.labelSelector = labelSelector;
        this.objects = [];
        this.indexCache = {};
        this.callbackCache = {};
        this.stopped = false;
        this.callbackCache[informer_1.ADD] = [];
        this.callbackCache[informer_1.UPDATE] = [];
        this.callbackCache[informer_1.DELETE] = [];
        this.callbackCache[informer_1.ERROR] = [];
        this.callbackCache[informer_1.CONNECT] = [];
        this.resourceVersion = '';
        if (autoStart) {
            this.doneHandler(null);
        }
    }
    async start() {
        this.stopped = false;
        await this.doneHandler(null);
    }
    async stop() {
        this.stopped = true;
        this._stop();
    }
    on(verb, cb) {
        if (verb === informer_1.CHANGE) {
            this.on('add', cb);
            this.on('update', cb);
            this.on('delete', cb);
            return;
        }
        if (this.callbackCache[verb] === undefined) {
            throw new Error(`Unknown verb: ${verb}`);
        }
        this.callbackCache[verb].push(cb);
    }
    off(verb, cb) {
        if (verb === informer_1.CHANGE) {
            this.off('add', cb);
            this.off('update', cb);
            this.off('delete', cb);
            return;
        }
        if (this.callbackCache[verb] === undefined) {
            throw new Error(`Unknown verb: ${verb}`);
        }
        const indexToRemove = this.callbackCache[verb].findIndex((cachedCb) => cachedCb === cb);
        if (indexToRemove === -1) {
            return;
        }
        this.callbackCache[verb].splice(indexToRemove, 1);
    }
    get(name, namespace) {
        return this.objects.find((obj) => {
            return obj.metadata.name === name && (!namespace || obj.metadata.namespace === namespace);
        });
    }
    list(namespace) {
        if (!namespace) {
            return this.objects;
        }
        return this.indexCache[namespace];
    }
    latestResourceVersion() {
        return this.resourceVersion;
    }
    _stop() {
        if (this.request) {
            this.request.abort();
            this.request = undefined;
        }
    }
    async doneHandler(err) {
        this._stop();
        if (err && err.statusCode === 410) {
            this.resourceVersion = '';
        }
        else if (err) {
            this.callbackCache[informer_1.ERROR].forEach((elt) => elt(err));
            return;
        }
        if (this.stopped) {
            // do not auto-restart
            return;
        }
        this.callbackCache[informer_1.CONNECT].forEach((elt) => elt(undefined));
        if (!this.resourceVersion) {
            const promise = this.listFn();
            const list = await promise;
            this.objects = deleteItems(this.objects, list.items, this.callbackCache[informer_1.DELETE].slice());
            Object.keys(this.indexCache).forEach((key) => {
                const updateObjects = deleteItems(this.indexCache[key], list.items);
                if (updateObjects.length !== 0) {
                    this.indexCache[key] = updateObjects;
                }
                else {
                    delete this.indexCache[key];
                }
            });
            this.addOrUpdateItems(list.items);
            this.resourceVersion = list.metadata.resourceVersion;
        }
        const queryParams = {
            resourceVersion: this.resourceVersion,
        };
        if (this.labelSelector !== undefined) {
            queryParams.labelSelector = util_1.ObjectSerializer.serialize(this.labelSelector, 'string');
        }
        this.request = await this.watch.watch(this.path, queryParams, this.watchHandler.bind(this), this.doneHandler.bind(this));
    }
    addOrUpdateItems(items) {
        items.forEach((obj) => {
            addOrUpdateObject(this.objects, obj, this.callbackCache[informer_1.ADD].slice(), this.callbackCache[informer_1.UPDATE].slice());
            if (obj.metadata.namespace) {
                this.indexObj(obj);
            }
        });
    }
    indexObj(obj) {
        let namespaceList = this.indexCache[obj.metadata.namespace];
        if (!namespaceList) {
            namespaceList = [];
            this.indexCache[obj.metadata.namespace] = namespaceList;
        }
        addOrUpdateObject(namespaceList, obj);
    }
    watchHandler(phase, obj, watchObj) {
        switch (phase) {
            case 'ADDED':
            case 'MODIFIED':
                addOrUpdateObject(this.objects, obj, this.callbackCache[informer_1.ADD].slice(), this.callbackCache[informer_1.UPDATE].slice());
                if (obj.metadata.namespace) {
                    this.indexObj(obj);
                }
                break;
            case 'DELETED':
                deleteObject(this.objects, obj, this.callbackCache[informer_1.DELETE].slice());
                if (obj.metadata.namespace) {
                    const namespaceList = this.indexCache[obj.metadata.namespace];
                    if (namespaceList) {
                        deleteObject(namespaceList, obj);
                    }
                }
                break;
            case 'BOOKMARK':
                // nothing to do, here for documentation, mostly.
                break;
        }
        if (watchObj && watchObj.metadata) {
            this.resourceVersion = watchObj.metadata.resourceVersion;
        }
    }
}
exports.ListWatch = ListWatch;
// external for testing
function deleteItems(oldObjects, newObjects, deleteCallback) {
    return oldObjects.filter((obj) => {
        if (findKubernetesObject(newObjects, obj) === -1) {
            if (deleteCallback) {
                deleteCallback.forEach((fn) => fn(obj));
            }
            return false;
        }
        return true;
    });
}
exports.deleteItems = deleteItems;
// Only public for testing.
function addOrUpdateObject(objects, obj, addCallback, updateCallback) {
    const ix = findKubernetesObject(objects, obj);
    if (ix === -1) {
        objects.push(obj);
        if (addCallback) {
            addCallback.forEach((elt) => elt(obj));
        }
    }
    else {
        if (!isSameVersion(objects[ix], obj)) {
            objects[ix] = obj;
            if (updateCallback) {
                updateCallback.forEach((elt) => elt(obj));
            }
        }
    }
}
exports.addOrUpdateObject = addOrUpdateObject;
function isSameObject(o1, o2) {
    return o1.metadata.name === o2.metadata.name && o1.metadata.namespace === o2.metadata.namespace;
}
function isSameVersion(o1, o2) {
    return (o1.metadata.resourceVersion !== undefined &&
        o1.metadata.resourceVersion !== null &&
        o1.metadata.resourceVersion === o2.metadata.resourceVersion);
}
function findKubernetesObject(objects, obj) {
    return objects.findIndex((elt) => {
        return isSameObject(elt, obj);
    });
}
// Public for testing.
function deleteObject(objects, obj, deleteCallback) {
    const ix = findKubernetesObject(objects, obj);
    if (ix !== -1) {
        objects.splice(ix, 1);
        if (deleteCallback) {
            deleteCallback.forEach((elt) => elt(obj));
        }
    }
}
exports.deleteObject = deleteObject;
//# sourceMappingURL=cache.js.map