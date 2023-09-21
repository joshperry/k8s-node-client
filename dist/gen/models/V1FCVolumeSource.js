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
exports.V1FCVolumeSource = void 0;
/**
* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
*/
class V1FCVolumeSource {
    static getAttributeTypeMap() {
        return V1FCVolumeSource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1FCVolumeSource = V1FCVolumeSource;
V1FCVolumeSource.discriminator = undefined;
V1FCVolumeSource.attributeTypeMap = [
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string",
        "format": ""
    },
    {
        "name": "lun",
        "baseName": "lun",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "targetWWNs",
        "baseName": "targetWWNs",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "wwids",
        "baseName": "wwids",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=V1FCVolumeSource.js.map