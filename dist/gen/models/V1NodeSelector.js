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
exports.V1NodeSelector = void 0;
/**
* A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
*/
class V1NodeSelector {
    static getAttributeTypeMap() {
        return V1NodeSelector.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1NodeSelector = V1NodeSelector;
V1NodeSelector.discriminator = undefined;
V1NodeSelector.attributeTypeMap = [
    {
        "name": "nodeSelectorTerms",
        "baseName": "nodeSelectorTerms",
        "type": "Array<V1NodeSelectorTerm>",
        "format": ""
    }
];
//# sourceMappingURL=V1NodeSelector.js.map