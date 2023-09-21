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
exports.V1beta1PolicyRulesWithSubjects = void 0;
/**
* PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
*/
class V1beta1PolicyRulesWithSubjects {
    static getAttributeTypeMap() {
        return V1beta1PolicyRulesWithSubjects.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1PolicyRulesWithSubjects = V1beta1PolicyRulesWithSubjects;
V1beta1PolicyRulesWithSubjects.discriminator = undefined;
V1beta1PolicyRulesWithSubjects.attributeTypeMap = [
    {
        "name": "nonResourceRules",
        "baseName": "nonResourceRules",
        "type": "Array<V1beta1NonResourcePolicyRule>",
        "format": ""
    },
    {
        "name": "resourceRules",
        "baseName": "resourceRules",
        "type": "Array<V1beta1ResourcePolicyRule>",
        "format": ""
    },
    {
        "name": "subjects",
        "baseName": "subjects",
        "type": "Array<V1beta1Subject>",
        "format": ""
    }
];
//# sourceMappingURL=V1beta1PolicyRulesWithSubjects.js.map