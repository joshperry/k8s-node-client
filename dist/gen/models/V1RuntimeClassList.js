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
exports.V1RuntimeClassList = void 0;
/**
* RuntimeClassList is a list of RuntimeClass objects.
*/
class V1RuntimeClassList {
    static getAttributeTypeMap() {
        return V1RuntimeClassList.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1RuntimeClassList = V1RuntimeClassList;
V1RuntimeClassList.discriminator = undefined;
V1RuntimeClassList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1RuntimeClass>",
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
//# sourceMappingURL=V1RuntimeClassList.js.map