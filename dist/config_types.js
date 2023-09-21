"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportContext = exports.newContexts = exports.exportUser = exports.newUsers = exports.exportCluster = exports.newClusters = exports.ActionOnInvalid = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const _ = tslib_1.__importStar(require("underscore"));
var ActionOnInvalid;
(function (ActionOnInvalid) {
    ActionOnInvalid["THROW"] = "throw";
    ActionOnInvalid["FILTER"] = "filter";
})(ActionOnInvalid || (exports.ActionOnInvalid = ActionOnInvalid = {}));
function defaultNewConfigOptions() {
    return {
        onInvalidEntry: ActionOnInvalid.THROW,
    };
}
function newClusters(a, opts) {
    const options = Object.assign(defaultNewConfigOptions(), opts || {});
    return _.compact(_.map(a, clusterIterator(options.onInvalidEntry)));
}
exports.newClusters = newClusters;
function exportCluster(cluster) {
    return {
        name: cluster.name,
        cluster: {
            server: cluster.server,
            'certificate-authority-data': cluster.caData,
            'certificate-authority': cluster.caFile,
            'insecure-skip-tls-verify': cluster.skipTLSVerify,
        },
    };
}
exports.exportCluster = exportCluster;
function clusterIterator(onInvalidEntry) {
    return (elt, i, list) => {
        try {
            if (!elt.name) {
                throw new Error(`clusters[${i}].name is missing`);
            }
            if (!elt.cluster) {
                throw new Error(`clusters[${i}].cluster is missing`);
            }
            if (!elt.cluster.server) {
                throw new Error(`clusters[${i}].cluster.server is missing`);
            }
            return {
                caData: elt.cluster['certificate-authority-data'],
                caFile: elt.cluster['certificate-authority'],
                name: elt.name,
                server: elt.cluster.server.replace(/\/$/, ''),
                skipTLSVerify: elt.cluster['insecure-skip-tls-verify'] === true,
            };
        }
        catch (err) {
            switch (onInvalidEntry) {
                case ActionOnInvalid.FILTER:
                    return null;
                default:
                case ActionOnInvalid.THROW:
                    throw err;
            }
        }
    };
}
function newUsers(a, opts) {
    const options = Object.assign(defaultNewConfigOptions(), opts || {});
    return _.compact(_.map(a, userIterator(options.onInvalidEntry)));
}
exports.newUsers = newUsers;
function exportUser(user) {
    return {
        name: user.name,
        user: {
            'auth-provider': user.authProvider,
            'client-certificate-data': user.certData,
            'client-certificate': user.certFile,
            exec: user.exec,
            'client-key-data': user.keyData,
            'client-key': user.keyFile,
            token: user.token,
            password: user.password,
            username: user.username,
        },
    };
}
exports.exportUser = exportUser;
function userIterator(onInvalidEntry) {
    return (elt, i, list) => {
        try {
            if (!elt.name) {
                throw new Error(`users[${i}].name is missing`);
            }
            return {
                authProvider: elt.user ? elt.user['auth-provider'] : null,
                certData: elt.user ? elt.user['client-certificate-data'] : null,
                certFile: elt.user ? elt.user['client-certificate'] : null,
                exec: elt.user ? elt.user.exec : null,
                keyData: elt.user ? elt.user['client-key-data'] : null,
                keyFile: elt.user ? elt.user['client-key'] : null,
                name: elt.name,
                token: findToken(elt.user),
                password: elt.user ? elt.user.password : null,
                username: elt.user ? elt.user.username : null,
            };
        }
        catch (err) {
            switch (onInvalidEntry) {
                case ActionOnInvalid.FILTER:
                    return null;
                default:
                case ActionOnInvalid.THROW:
                    throw err;
            }
        }
    };
}
function findToken(user) {
    if (user) {
        if (user.token) {
            return user.token;
        }
        if (user['token-file']) {
            return fs.readFileSync(user['token-file']).toString();
        }
    }
}
function newContexts(a, opts) {
    const options = Object.assign(defaultNewConfigOptions(), opts || {});
    return _.compact(_.map(a, contextIterator(options.onInvalidEntry)));
}
exports.newContexts = newContexts;
function exportContext(ctx) {
    return {
        name: ctx.name,
        context: ctx,
    };
}
exports.exportContext = exportContext;
function contextIterator(onInvalidEntry) {
    return (elt, i, list) => {
        try {
            if (!elt.name) {
                throw new Error(`contexts[${i}].name is missing`);
            }
            if (!elt.context) {
                throw new Error(`contexts[${i}].context is missing`);
            }
            if (!elt.context.cluster) {
                throw new Error(`contexts[${i}].context.cluster is missing`);
            }
            return {
                cluster: elt.context.cluster,
                name: elt.name,
                user: elt.context.user || undefined,
                namespace: elt.context.namespace || undefined,
            };
        }
        catch (err) {
            switch (onInvalidEntry) {
                case ActionOnInvalid.FILTER:
                    return null;
                default:
                case ActionOnInvalid.THROW:
                    throw err;
            }
        }
    };
}
//# sourceMappingURL=config_types.js.map