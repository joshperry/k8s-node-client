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
exports.V1alpha1Role = void 0;
/**
* Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 Role, and will no longer be served in v1.22.
*/
class V1alpha1Role {
    static getAttributeTypeMap() {
        return V1alpha1Role.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1alpha1Role = V1alpha1Role;
V1alpha1Role.discriminator = undefined;
V1alpha1Role.attributeTypeMap = [
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
        "name": "rules",
        "baseName": "rules",
        "type": "Array<V1alpha1PolicyRule>",
        "format": ""
    }
];
//# sourceMappingURL=V1alpha1Role.js.map