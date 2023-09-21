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
exports.V1LeaseList = void 0;
/**
* LeaseList is a list of Lease objects.
*/
class V1LeaseList {
    static getAttributeTypeMap() {
        return V1LeaseList.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1LeaseList = V1LeaseList;
V1LeaseList.discriminator = undefined;
V1LeaseList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1Lease>",
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
//# sourceMappingURL=V1LeaseList.js.map