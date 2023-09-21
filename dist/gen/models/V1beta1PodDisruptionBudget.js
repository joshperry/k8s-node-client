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
exports.V1beta1PodDisruptionBudget = void 0;
/**
* PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
*/
class V1beta1PodDisruptionBudget {
    static getAttributeTypeMap() {
        return V1beta1PodDisruptionBudget.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1PodDisruptionBudget = V1beta1PodDisruptionBudget;
V1beta1PodDisruptionBudget.discriminator = undefined;
V1beta1PodDisruptionBudget.attributeTypeMap = [
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
        "type": "V1beta1PodDisruptionBudgetSpec",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1beta1PodDisruptionBudgetStatus",
        "format": ""
    }
];
//# sourceMappingURL=V1beta1PodDisruptionBudget.js.map