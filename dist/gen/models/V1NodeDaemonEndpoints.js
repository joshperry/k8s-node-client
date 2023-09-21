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
exports.V1NodeDaemonEndpoints = void 0;
/**
* NodeDaemonEndpoints lists ports opened by daemons running on the Node.
*/
class V1NodeDaemonEndpoints {
    static getAttributeTypeMap() {
        return V1NodeDaemonEndpoints.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1NodeDaemonEndpoints = V1NodeDaemonEndpoints;
V1NodeDaemonEndpoints.discriminator = undefined;
V1NodeDaemonEndpoints.attributeTypeMap = [
    {
        "name": "kubeletEndpoint",
        "baseName": "kubeletEndpoint",
        "type": "V1DaemonEndpoint",
        "format": ""
    }
];
//# sourceMappingURL=V1NodeDaemonEndpoints.js.map