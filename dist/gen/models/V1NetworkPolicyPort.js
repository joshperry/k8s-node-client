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
exports.V1NetworkPolicyPort = void 0;
/**
* NetworkPolicyPort describes a port to allow traffic on
*/
class V1NetworkPolicyPort {
    static getAttributeTypeMap() {
        return V1NetworkPolicyPort.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1NetworkPolicyPort = V1NetworkPolicyPort;
V1NetworkPolicyPort.discriminator = undefined;
V1NetworkPolicyPort.attributeTypeMap = [
    {
        "name": "endPort",
        "baseName": "endPort",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "IntOrString",
        "format": "int-or-string"
    },
    {
        "name": "protocol",
        "baseName": "protocol",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1NetworkPolicyPort.js.map