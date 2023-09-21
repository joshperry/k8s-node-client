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
exports.V2beta2ResourceMetricStatus = void 0;
/**
* ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.
*/
class V2beta2ResourceMetricStatus {
    static getAttributeTypeMap() {
        return V2beta2ResourceMetricStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V2beta2ResourceMetricStatus = V2beta2ResourceMetricStatus;
V2beta2ResourceMetricStatus.discriminator = undefined;
V2beta2ResourceMetricStatus.attributeTypeMap = [
    {
        "name": "current",
        "baseName": "current",
        "type": "V2beta2MetricValueStatus",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V2beta2ResourceMetricStatus.js.map