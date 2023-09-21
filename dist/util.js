"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeResponseHeaders = exports.totalForResource = exports.containerTotalForResource = exports.add = exports.totalMemory = exports.totalCPU = exports.totalMemoryForContainer = exports.totalCPUForContainer = exports.ResourceStatus = exports.quantityToScalar = exports.findSuffix = exports.podsForNode = exports.ObjectSerializer = void 0;
const underscore_1 = require("underscore");
const ObjectSerializer_1 = require("./gen/models/ObjectSerializer");
class ObjectSerializer extends ObjectSerializer_1.ObjectSerializer {
    static serialize(data, type, format = '') {
        return ObjectSerializer_1.ObjectSerializer.serialize(data, type, format);
    }
    static deserialize(data, type, format = '') {
        return ObjectSerializer_1.ObjectSerializer.deserialize(data, type, format);
    }
}
exports.ObjectSerializer = ObjectSerializer;
async function podsForNode(api, nodeName) {
    const allPods = await api.listPodForAllNamespaces();
    return allPods.items.filter((pod) => pod.spec.nodeName === nodeName);
}
exports.podsForNode = podsForNode;
function findSuffix(quantity) {
    let ix = quantity.length - 1;
    while (ix >= 0 && !/[\.0-9]/.test(quantity.charAt(ix))) {
        ix--;
    }
    return ix === -1 ? '' : quantity.substring(ix + 1);
}
exports.findSuffix = findSuffix;
function quantityToScalar(quantity) {
    if (!quantity) {
        return 0;
    }
    const suffix = findSuffix(quantity);
    if (suffix === '') {
        const num = Number(quantity).valueOf();
        if (isNaN(num)) {
            throw new Error('Unknown quantity ' + quantity);
        }
        return num;
    }
    switch (suffix) {
        case 'n':
            return Number(quantity.substr(0, quantity.length - 1)).valueOf() / 1000000000;
        case 'u':
            return Number(quantity.substr(0, quantity.length - 1)).valueOf() / 1000000;
        case 'm':
            return Number(quantity.substr(0, quantity.length - 1)).valueOf() / 1000.0;
        case 'k':
            return BigInt(quantity.substr(0, quantity.length - 1)) * BigInt(1000);
        case 'M':
            return BigInt(quantity.substr(0, quantity.length - 1)) * BigInt(1000 * 1000);
        case 'G':
            return BigInt(quantity.substr(0, quantity.length - 1)) * BigInt(1000 * 1000 * 1000);
        case 'T':
            return (BigInt(quantity.substr(0, quantity.length - 1)) * BigInt(1000 * 1000 * 1000) * BigInt(1000));
        case 'P':
            return (BigInt(quantity.substr(0, quantity.length - 1)) *
                BigInt(1000 * 1000 * 1000) *
                BigInt(1000 * 1000));
        case 'E':
            return (BigInt(quantity.substr(0, quantity.length - 1)) *
                BigInt(1000 * 1000 * 1000) *
                BigInt(1000 * 1000 * 1000));
        case 'Ki':
            return BigInt(quantity.substr(0, quantity.length - 2)) * BigInt(1024);
        case 'Mi':
            return BigInt(quantity.substr(0, quantity.length - 2)) * BigInt(1024 * 1024);
        case 'Gi':
            return BigInt(quantity.substr(0, quantity.length - 2)) * BigInt(1024 * 1024 * 1024);
        case 'Ti':
            return (BigInt(quantity.substr(0, quantity.length - 2)) * BigInt(1024 * 1024 * 1024) * BigInt(1024));
        case 'Pi':
            return (BigInt(quantity.substr(0, quantity.length - 2)) *
                BigInt(1024 * 1024 * 1024) *
                BigInt(1024 * 1024));
        case 'Ei':
            return (BigInt(quantity.substr(0, quantity.length - 2)) *
                BigInt(1024 * 1024 * 1024) *
                BigInt(1024 * 1024 * 1024));
        default:
            throw new Error(`Unknown suffix: ${suffix}`);
    }
}
exports.quantityToScalar = quantityToScalar;
class ResourceStatus {
    constructor(request, limit, resourceType) {
        this.request = request;
        this.limit = limit;
        this.resourceType = resourceType;
    }
}
exports.ResourceStatus = ResourceStatus;
function totalCPUForContainer(container) {
    return containerTotalForResource(container, 'cpu');
}
exports.totalCPUForContainer = totalCPUForContainer;
function totalMemoryForContainer(container) {
    return containerTotalForResource(container, 'memory');
}
exports.totalMemoryForContainer = totalMemoryForContainer;
function totalCPU(pod) {
    return totalForResource(pod, 'cpu');
}
exports.totalCPU = totalCPU;
function totalMemory(pod) {
    return totalForResource(pod, 'memory');
}
exports.totalMemory = totalMemory;
function add(n1, n2) {
    if ((0, underscore_1.isNumber)(n1) && (0, underscore_1.isNumber)(n2)) {
        return n1 + n2;
    }
    if ((0, underscore_1.isNumber)(n1)) {
        return BigInt(Math.round(n1)) + n2;
    }
    else if ((0, underscore_1.isNumber)(n2)) {
        return n1 + BigInt(Math.round(n2));
    }
    return (n1 + n2);
}
exports.add = add;
function containerTotalForResource(container, resource) {
    let reqTotal = 0;
    let limitTotal = 0;
    if (container.resources) {
        if (container.resources.requests) {
            reqTotal = add(reqTotal, quantityToScalar(container.resources.requests[resource]));
        }
        if (container.resources.limits) {
            limitTotal = add(limitTotal, quantityToScalar(container.resources.limits[resource]));
        }
    }
    return new ResourceStatus(reqTotal, limitTotal, resource);
}
exports.containerTotalForResource = containerTotalForResource;
function totalForResource(pod, resource) {
    let reqTotal = 0;
    let limitTotal = 0;
    pod.spec.containers.forEach((container) => {
        const containerTotal = containerTotalForResource(container, resource);
        reqTotal = add(reqTotal, containerTotal.request);
        limitTotal = add(limitTotal, containerTotal.limit);
    });
    return new ResourceStatus(reqTotal, limitTotal, resource);
}
exports.totalForResource = totalForResource;
// There is a disconnect between the ApiException headers and the response headers from node-fetch
// ApiException expects { [key: string]: string } whereas node-fetch provides: { [key: string]: string[] }
// https://github.com/node-fetch/node-fetch/issues/783
// https://github.com/node-fetch/node-fetch/pull/1757
function normalizeResponseHeaders(response) {
    const normalizedHeaders = {};
    for (const [key, value] of response.headers.entries()) {
        normalizedHeaders[key] = value;
    }
    return normalizedHeaders;
}
exports.normalizeResponseHeaders = normalizeResponseHeaders;
//# sourceMappingURL=util.js.map