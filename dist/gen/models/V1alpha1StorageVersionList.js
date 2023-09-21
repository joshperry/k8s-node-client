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
exports.V1alpha1StorageVersionList = void 0;
/**
* A list of StorageVersions.
*/
class V1alpha1StorageVersionList {
    static getAttributeTypeMap() {
        return V1alpha1StorageVersionList.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1alpha1StorageVersionList = V1alpha1StorageVersionList;
V1alpha1StorageVersionList.discriminator = undefined;
V1alpha1StorageVersionList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1alpha1StorageVersion>",
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
//# sourceMappingURL=V1alpha1StorageVersionList.js.map