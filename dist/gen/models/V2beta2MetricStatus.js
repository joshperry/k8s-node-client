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
exports.V2beta2MetricStatus = void 0;
/**
* MetricStatus describes the last-read state of a single metric.
*/
class V2beta2MetricStatus {
    static getAttributeTypeMap() {
        return V2beta2MetricStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V2beta2MetricStatus = V2beta2MetricStatus;
V2beta2MetricStatus.discriminator = undefined;
V2beta2MetricStatus.attributeTypeMap = [
    {
        "name": "containerResource",
        "baseName": "containerResource",
        "type": "V2beta2ContainerResourceMetricStatus",
        "format": ""
    },
    {
        "name": "external",
        "baseName": "external",
        "type": "V2beta2ExternalMetricStatus",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "V2beta2ObjectMetricStatus",
        "format": ""
    },
    {
        "name": "pods",
        "baseName": "pods",
        "type": "V2beta2PodsMetricStatus",
        "format": ""
    },
    {
        "name": "resource",
        "baseName": "resource",
        "type": "V2beta2ResourceMetricStatus",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V2beta2MetricStatus.js.map