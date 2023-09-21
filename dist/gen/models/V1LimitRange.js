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
exports.V1LimitRange = void 0;
/**
* LimitRange sets resource usage limits for each kind of resource in a Namespace.
*/
class V1LimitRange {
    static getAttributeTypeMap() {
        return V1LimitRange.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1LimitRange = V1LimitRange;
V1LimitRange.discriminator = undefined;
V1LimitRange.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
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
        "name": "spec",
        "baseName": "spec",
        "type": "V1LimitRangeSpec",
        "format": ""
    }
];
//# sourceMappingURL=V1LimitRange.js.map