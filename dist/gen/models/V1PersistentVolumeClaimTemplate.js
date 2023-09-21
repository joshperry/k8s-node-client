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
exports.V1PersistentVolumeClaimTemplate = void 0;
/**
* PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
*/
class V1PersistentVolumeClaimTemplate {
    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimTemplate.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1PersistentVolumeClaimTemplate = V1PersistentVolumeClaimTemplate;
V1PersistentVolumeClaimTemplate.discriminator = undefined;
V1PersistentVolumeClaimTemplate.attributeTypeMap = [
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta",
        "format": ""
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1PersistentVolumeClaimSpec",
        "format": ""
    }
];
//# sourceMappingURL=V1PersistentVolumeClaimTemplate.js.map