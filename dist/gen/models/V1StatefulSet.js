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
exports.V1StatefulSet = void 0;
/**
* StatefulSet represents a set of pods with consistent identities. Identities are defined as:  - Network: A single stable DNS and hostname.  - Storage: As many VolumeClaims as requested. The StatefulSet guarantees that a given network identity will always map to the same storage identity.
*/
class V1StatefulSet {
    static getAttributeTypeMap() {
        return V1StatefulSet.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1StatefulSet = V1StatefulSet;
V1StatefulSet.discriminator = undefined;
V1StatefulSet.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta",
        "format": ""
    },
    {
        "name": "spec",
        "baseName": "spec",
        "type": "V1StatefulSetSpec",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1StatefulSetStatus",
        "format": ""
    }
];
//# sourceMappingURL=V1StatefulSet.js.map