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
exports.V1PortStatus = void 0;
class V1PortStatus {
    static getAttributeTypeMap() {
        return V1PortStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1PortStatus = V1PortStatus;
V1PortStatus.discriminator = undefined;
V1PortStatus.attributeTypeMap = [
    {
        "name": "error",
        "baseName": "error",
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
//# sourceMappingURL=V1PortStatus.js.map