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
exports.V1TopologySelectorTerm = void 0;
/**
* A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
*/
class V1TopologySelectorTerm {
    static getAttributeTypeMap() {
        return V1TopologySelectorTerm.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1TopologySelectorTerm = V1TopologySelectorTerm;
V1TopologySelectorTerm.discriminator = undefined;
V1TopologySelectorTerm.attributeTypeMap = [
    {
        "name": "matchLabelExpressions",
        "baseName": "matchLabelExpressions",
        "type": "Array<V1TopologySelectorLabelRequirement>",
        "format": ""
    }
];
//# sourceMappingURL=V1TopologySelectorTerm.js.map