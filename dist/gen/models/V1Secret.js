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
exports.V1Secret = void 0;
/**
* Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
*/
class V1Secret {
    static getAttributeTypeMap() {
        return V1Secret.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1Secret = V1Secret;
V1Secret.discriminator = undefined;
V1Secret.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "{ [key: string]: string; }",
        "format": "byte"
    },
    {
        "name": "immutable",
        "baseName": "immutable",
        "type": "boolean",
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
        "type": "V1ObjectMeta",
        "format": ""
    },
    {
        "name": "stringData",
        "baseName": "stringData",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1Secret.js.map