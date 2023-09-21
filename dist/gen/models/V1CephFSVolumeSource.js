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
exports.V1CephFSVolumeSource = void 0;
/**
* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
*/
class V1CephFSVolumeSource {
    static getAttributeTypeMap() {
        return V1CephFSVolumeSource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1CephFSVolumeSource = V1CephFSVolumeSource;
V1CephFSVolumeSource.discriminator = undefined;
V1CephFSVolumeSource.attributeTypeMap = [
    {
        "name": "monitors",
        "baseName": "monitors",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "path",
        "baseName": "path",
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
        "name": "secretFile",
        "baseName": "secretFile",
        "type": "string",
        "format": ""
    },
    {
        "name": "secretRef",
        "baseName": "secretRef",
        "type": "V1LocalObjectReference",
        "format": ""
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1CephFSVolumeSource.js.map