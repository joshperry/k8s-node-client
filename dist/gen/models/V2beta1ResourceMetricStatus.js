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
exports.V2beta1ResourceMetricStatus = void 0;
/**
* ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.
*/
class V2beta1ResourceMetricStatus {
    static getAttributeTypeMap() {
        return V2beta1ResourceMetricStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V2beta1ResourceMetricStatus = V2beta1ResourceMetricStatus;
V2beta1ResourceMetricStatus.discriminator = undefined;
V2beta1ResourceMetricStatus.attributeTypeMap = [
    {
        "name": "currentAverageUtilization",
        "baseName": "currentAverageUtilization",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "currentAverageValue",
        "baseName": "currentAverageValue",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V2beta1ResourceMetricStatus.js.map