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
exports.V1UncountedTerminatedPods = void 0;
/**
* UncountedTerminatedPods holds UIDs of Pods that have terminated but haven\'t been accounted in Job status counters.
*/
class V1UncountedTerminatedPods {
    static getAttributeTypeMap() {
        return V1UncountedTerminatedPods.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1UncountedTerminatedPods = V1UncountedTerminatedPods;
V1UncountedTerminatedPods.discriminator = undefined;
V1UncountedTerminatedPods.attributeTypeMap = [
    {
        "name": "failed",
        "baseName": "failed",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "succeeded",
        "baseName": "succeeded",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=V1UncountedTerminatedPods.js.map