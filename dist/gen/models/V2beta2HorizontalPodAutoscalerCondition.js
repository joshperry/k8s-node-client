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
exports.V2beta2HorizontalPodAutoscalerCondition = void 0;
/**
* HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
*/
class V2beta2HorizontalPodAutoscalerCondition {
    static getAttributeTypeMap() {
        return V2beta2HorizontalPodAutoscalerCondition.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V2beta2HorizontalPodAutoscalerCondition = V2beta2HorizontalPodAutoscalerCondition;
V2beta2HorizontalPodAutoscalerCondition.discriminator = undefined;
V2beta2HorizontalPodAutoscalerCondition.attributeTypeMap = [
    {
        "name": "lastTransitionTime",
        "baseName": "lastTransitionTime",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string",
        "format": ""
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V2beta2HorizontalPodAutoscalerCondition.js.map