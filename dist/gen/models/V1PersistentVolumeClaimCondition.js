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
exports.V1PersistentVolumeClaimCondition = void 0;
/**
* PersistentVolumeClaimCondition contails details about state of pvc
*/
class V1PersistentVolumeClaimCondition {
    static getAttributeTypeMap() {
        return V1PersistentVolumeClaimCondition.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1PersistentVolumeClaimCondition = V1PersistentVolumeClaimCondition;
V1PersistentVolumeClaimCondition.discriminator = undefined;
V1PersistentVolumeClaimCondition.attributeTypeMap = [
    {
        "name": "lastProbeTime",
        "baseName": "lastProbeTime",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "lastTransitionTime",
        "baseName": "lastTransitionTime",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string",
        "format": ""
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1PersistentVolumeClaimCondition.js.map