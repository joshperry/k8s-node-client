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
exports.V1LimitRangeList = void 0;
/**
* LimitRangeList is a list of LimitRange items.
*/
class V1LimitRangeList {
    static getAttributeTypeMap() {
        return V1LimitRangeList.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1LimitRangeList = V1LimitRangeList;
V1LimitRangeList.discriminator = undefined;
V1LimitRangeList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1LimitRange>",
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
//# sourceMappingURL=V1LimitRangeList.js.map