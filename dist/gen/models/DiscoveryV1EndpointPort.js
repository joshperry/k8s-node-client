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
exports.DiscoveryV1EndpointPort = void 0;
/**
* EndpointPort represents a Port used by an EndpointSlice
*/
class DiscoveryV1EndpointPort {
    static getAttributeTypeMap() {
        return DiscoveryV1EndpointPort.attributeTypeMap;
    }
    constructor() {
    }
}
exports.DiscoveryV1EndpointPort = DiscoveryV1EndpointPort;
DiscoveryV1EndpointPort.discriminator = undefined;
DiscoveryV1EndpointPort.attributeTypeMap = [
    {
        "name": "appProtocol",
        "baseName": "appProtocol",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "protocol",
        "baseName": "protocol",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=DiscoveryV1EndpointPort.js.map