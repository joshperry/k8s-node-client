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
exports.V1PersistentVolumeClaimStatus = void 0;
/**
* PersistentVolumeClaimStatus is the current status of a persistent volume claim.
*/
class V1PersistentVolumeClaimStatus {
    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1PersistentVolumeClaimStatus = V1PersistentVolumeClaimStatus;
V1PersistentVolumeClaimStatus.discriminator = undefined;
V1PersistentVolumeClaimStatus.attributeTypeMap = [
    {
        "name": "accessModes",
        "baseName": "accessModes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "capacity",
        "baseName": "capacity",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1PersistentVolumeClaimCondition>",
        "format": ""
    },
    {
        "name": "phase",
        "baseName": "phase",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1PersistentVolumeClaimStatus.js.map