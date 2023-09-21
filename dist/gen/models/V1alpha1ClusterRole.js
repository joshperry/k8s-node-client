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
exports.V1alpha1ClusterRole = void 0;
/**
* ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRole, and will no longer be served in v1.22.
*/
class V1alpha1ClusterRole {
    static getAttributeTypeMap() {
        return V1alpha1ClusterRole.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1alpha1ClusterRole = V1alpha1ClusterRole;
V1alpha1ClusterRole.discriminator = undefined;
V1alpha1ClusterRole.attributeTypeMap = [
    {
        "name": "aggregationRule",
        "baseName": "aggregationRule",
        "type": "V1alpha1AggregationRule",
        "format": ""
    },
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
//# sourceMappingURL=V1alpha1ClusterRole.js.map