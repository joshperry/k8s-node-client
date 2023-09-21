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
exports.V2beta2ObjectMetricStatus = void 0;
/**
* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
class V2beta2ObjectMetricStatus {
    static getAttributeTypeMap() {
        return V2beta2ObjectMetricStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V2beta2ObjectMetricStatus = V2beta2ObjectMetricStatus;
V2beta2ObjectMetricStatus.discriminator = undefined;
V2beta2ObjectMetricStatus.attributeTypeMap = [
    {
        "name": "current",
        "baseName": "current",
        "type": "V2beta2MetricValueStatus",
        "format": ""
    },
    {
        "name": "describedObject",
        "baseName": "describedObject",
        "type": "V2beta2CrossVersionObjectReference",
        "format": ""
    },
    {
        "name": "metric",
        "baseName": "metric",
        "type": "V2beta2MetricIdentifier",
        "format": ""
    }
];
//# sourceMappingURL=V2beta2ObjectMetricStatus.js.map