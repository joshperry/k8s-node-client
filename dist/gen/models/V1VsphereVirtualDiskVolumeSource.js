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
exports.V1VsphereVirtualDiskVolumeSource = void 0;
/**
* Represents a vSphere volume resource.
*/
class V1VsphereVirtualDiskVolumeSource {
    static getAttributeTypeMap() {
        return V1VsphereVirtualDiskVolumeSource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1VsphereVirtualDiskVolumeSource = V1VsphereVirtualDiskVolumeSource;
V1VsphereVirtualDiskVolumeSource.discriminator = undefined;
V1VsphereVirtualDiskVolumeSource.attributeTypeMap = [
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string",
        "format": ""
    },
    {
        "name": "storagePolicyID",
        "baseName": "storagePolicyID",
        "type": "string",
        "format": ""
    },
    {
        "name": "storagePolicyName",
        "baseName": "storagePolicyName",
        "type": "string",
        "format": ""
    },
    {
        "name": "volumePath",
        "baseName": "volumePath",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1VsphereVirtualDiskVolumeSource.js.map