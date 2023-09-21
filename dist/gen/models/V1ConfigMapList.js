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
exports.V1ConfigMapList = void 0;
/**
* ConfigMapList is a resource containing a list of ConfigMap objects.
*/
class V1ConfigMapList {
    static getAttributeTypeMap() {
        return V1ConfigMapList.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ConfigMapList = V1ConfigMapList;
V1ConfigMapList.discriminator = undefined;
V1ConfigMapList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1ConfigMap>",
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
//# sourceMappingURL=V1ConfigMapList.js.map