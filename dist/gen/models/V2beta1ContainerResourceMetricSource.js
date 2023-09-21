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
exports.V2beta1ContainerResourceMetricSource = void 0;
/**
* ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.  Only one \"target\" type should be set.
*/
class V2beta1ContainerResourceMetricSource {
    static getAttributeTypeMap() {
        return V2beta1ContainerResourceMetricSource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V2beta1ContainerResourceMetricSource = V2beta1ContainerResourceMetricSource;
V2beta1ContainerResourceMetricSource.discriminator = undefined;
V2beta1ContainerResourceMetricSource.attributeTypeMap = [
    {
        "name": "container",
        "baseName": "container",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "targetAverageUtilization",
        "baseName": "targetAverageUtilization",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "targetAverageValue",
        "baseName": "targetAverageValue",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V2beta1ContainerResourceMetricSource.js.map