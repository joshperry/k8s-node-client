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
exports.V1ListMeta = void 0;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
class V1ListMeta {
    static getAttributeTypeMap() {
        return V1ListMeta.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ListMeta = V1ListMeta;
V1ListMeta.discriminator = undefined;
V1ListMeta.attributeTypeMap = [
    {
        "name": "_continue",
        "baseName": "continue",
        "type": "string",
        "format": ""
    },
    {
        "name": "remainingItemCount",
        "baseName": "remainingItemCount",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "resourceVersion",
        "baseName": "resourceVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "selfLink",
        "baseName": "selfLink",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1ListMeta.js.map