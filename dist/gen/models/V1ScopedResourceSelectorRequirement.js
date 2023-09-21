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
exports.V1ScopedResourceSelectorRequirement = void 0;
/**
* A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
*/
class V1ScopedResourceSelectorRequirement {
    static getAttributeTypeMap() {
        return V1ScopedResourceSelectorRequirement.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ScopedResourceSelectorRequirement = V1ScopedResourceSelectorRequirement;
V1ScopedResourceSelectorRequirement.discriminator = undefined;
V1ScopedResourceSelectorRequirement.attributeTypeMap = [
    {
        "name": "operator",
        "baseName": "operator",
        "type": "string",
        "format": ""
    },
    {
        "name": "scopeName",
        "baseName": "scopeName",
        "type": "string",
        "format": ""
    },
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=V1ScopedResourceSelectorRequirement.js.map