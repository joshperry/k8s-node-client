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
exports.V1CustomResourceDefinitionSpec = void 0;
/**
* CustomResourceDefinitionSpec describes how a user wants their resource to appear
*/
class V1CustomResourceDefinitionSpec {
    static getAttributeTypeMap() {
        return V1CustomResourceDefinitionSpec.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1CustomResourceDefinitionSpec = V1CustomResourceDefinitionSpec;
V1CustomResourceDefinitionSpec.discriminator = undefined;
V1CustomResourceDefinitionSpec.attributeTypeMap = [
    {
        "name": "conversion",
        "baseName": "conversion",
        "type": "V1CustomResourceConversion",
        "format": ""
    },
    {
        "name": "group",
        "baseName": "group",
        "type": "string",
        "format": ""
    },
    {
        "name": "names",
        "baseName": "names",
        "type": "V1CustomResourceDefinitionNames",
        "format": ""
    },
    {
        "name": "preserveUnknownFields",
        "baseName": "preserveUnknownFields",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "scope",
        "baseName": "scope",
        "type": "string",
        "format": ""
    },
    {
        "name": "versions",
        "baseName": "versions",
        "type": "Array<V1CustomResourceDefinitionVersion>",
        "format": ""
    }
];
//# sourceMappingURL=V1CustomResourceDefinitionSpec.js.map