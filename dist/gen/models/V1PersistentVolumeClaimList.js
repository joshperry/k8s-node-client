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
exports.V1PersistentVolumeClaimList = void 0;
/**
* PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
*/
class V1PersistentVolumeClaimList {
    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimList.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1PersistentVolumeClaimList = V1PersistentVolumeClaimList;
V1PersistentVolumeClaimList.discriminator = undefined;
V1PersistentVolumeClaimList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1PersistentVolumeClaim>",
        "format": ""
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ListMeta",
        "format": ""
    }
];
//# sourceMappingURL=V1PersistentVolumeClaimList.js.map