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
exports.V2beta2ContainerResourceMetricStatus = void 0;
/**
* ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.
*/
class V2beta2ContainerResourceMetricStatus {
    static getAttributeTypeMap() {
        return V2beta2ContainerResourceMetricStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V2beta2ContainerResourceMetricStatus = V2beta2ContainerResourceMetricStatus;
V2beta2ContainerResourceMetricStatus.discriminator = undefined;
V2beta2ContainerResourceMetricStatus.attributeTypeMap = [
    {
        "name": "container",
        "baseName": "container",
        "type": "string",
        "format": ""
    },
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
//# sourceMappingURL=V2beta2ContainerResourceMetricStatus.js.map