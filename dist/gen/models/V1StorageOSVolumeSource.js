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
exports.V1StorageOSVolumeSource = void 0;
/**
* Represents a StorageOS persistent volume resource.
*/
class V1StorageOSVolumeSource {
    static getAttributeTypeMap() {
        return V1StorageOSVolumeSource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1StorageOSVolumeSource = V1StorageOSVolumeSource;
V1StorageOSVolumeSource.discriminator = undefined;
V1StorageOSVolumeSource.attributeTypeMap = [
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string",
        "format": ""
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "secretRef",
        "baseName": "secretRef",
        "type": "V1LocalObjectReference",
        "format": ""
    },
    {
        "name": "volumeName",
        "baseName": "volumeName",
        "type": "string",
        "format": ""
    },
    {
        "name": "volumeNamespace",
        "baseName": "volumeNamespace",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1StorageOSVolumeSource.js.map