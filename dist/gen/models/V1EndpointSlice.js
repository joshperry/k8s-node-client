"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1EndpointSlice = void 0;
/**
* EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
*/
class V1EndpointSlice {
    static getAttributeTypeMap() {
        return V1EndpointSlice.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1EndpointSlice = V1EndpointSlice;
V1EndpointSlice.discriminator = undefined;
V1EndpointSlice.attributeTypeMap = [
    {
        "name": "addressType",
        "baseName": "addressType",
        "type": "string",
        "format": ""
    },
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpoints",
        "baseName": "endpoints",
        "type": "Array<V1Endpoint>",
        "format": ""
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta",
        "format": ""
    },
    {
        "name": "ports",
        "baseName": "ports",
        "type": "Array<DiscoveryV1EndpointPort>",
        "format": ""
    }
];
//# sourceMappingURL=V1EndpointSlice.js.map