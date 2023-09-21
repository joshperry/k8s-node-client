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
exports.V1Affinity = void 0;
/**
* Affinity is a group of affinity scheduling rules.
*/
class V1Affinity {
    static getAttributeTypeMap() {
        return V1Affinity.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1Affinity = V1Affinity;
V1Affinity.discriminator = undefined;
V1Affinity.attributeTypeMap = [
    {
        "name": "nodeAffinity",
        "baseName": "nodeAffinity",
        "type": "V1NodeAffinity",
        "format": ""
    },
    {
        "name": "podAffinity",
        "baseName": "podAffinity",
        "type": "V1PodAffinity",
        "format": ""
    },
    {
        "name": "podAntiAffinity",
        "baseName": "podAntiAffinity",
        "type": "V1PodAntiAffinity",
        "format": ""
    }
];
//# sourceMappingURL=V1Affinity.js.map