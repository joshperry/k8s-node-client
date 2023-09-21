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
exports.V1beta1JobTemplateSpec = void 0;
/**
* JobTemplateSpec describes the data a Job should have when created from a template
*/
class V1beta1JobTemplateSpec {
    static getAttributeTypeMap() {
        return V1beta1JobTemplateSpec.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1JobTemplateSpec = V1beta1JobTemplateSpec;
V1beta1JobTemplateSpec.discriminator = undefined;
V1beta1JobTemplateSpec.attributeTypeMap = [
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta",
        "format": ""
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1JobSpec",
        "format": ""
    }
];
//# sourceMappingURL=V1beta1JobTemplateSpec.js.map