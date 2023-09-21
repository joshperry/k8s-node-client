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
exports.V1PodAffinity = void 0;
/**
* Pod affinity is a group of inter pod affinity scheduling rules.
*/
class V1PodAffinity {
    static getAttributeTypeMap() {
        return V1PodAffinity.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1PodAffinity = V1PodAffinity;
V1PodAffinity.discriminator = undefined;
V1PodAffinity.attributeTypeMap = [
    {
        "name": "preferredDuringSchedulingIgnoredDuringExecution",
        "baseName": "preferredDuringSchedulingIgnoredDuringExecution",
        "type": "Array<V1WeightedPodAffinityTerm>",
        "format": ""
    },
    {
        "name": "requiredDuringSchedulingIgnoredDuringExecution",
        "baseName": "requiredDuringSchedulingIgnoredDuringExecution",
        "type": "Array<V1PodAffinityTerm>",
        "format": ""
    }
];
//# sourceMappingURL=V1PodAffinity.js.map