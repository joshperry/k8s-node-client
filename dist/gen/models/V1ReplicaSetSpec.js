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
exports.V1ReplicaSetSpec = void 0;
/**
* ReplicaSetSpec is the specification of a ReplicaSet.
*/
class V1ReplicaSetSpec {
    static getAttributeTypeMap() {
        return V1ReplicaSetSpec.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ReplicaSetSpec = V1ReplicaSetSpec;
V1ReplicaSetSpec.discriminator = undefined;
V1ReplicaSetSpec.attributeTypeMap = [
    {
        "name": "minReadySeconds",
        "baseName": "minReadySeconds",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "V1LabelSelector",
        "format": ""
    },
    {
        "name": "template",
        "baseName": "template",
        "type": "V1PodTemplateSpec",
        "format": ""
    }
];
//# sourceMappingURL=V1ReplicaSetSpec.js.map