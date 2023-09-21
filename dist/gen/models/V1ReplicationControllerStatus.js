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
exports.V1ReplicationControllerStatus = void 0;
/**
* ReplicationControllerStatus represents the current status of a replication controller.
*/
class V1ReplicationControllerStatus {
    static getAttributeTypeMap() {
        return V1ReplicationControllerStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ReplicationControllerStatus = V1ReplicationControllerStatus;
V1ReplicationControllerStatus.discriminator = undefined;
V1ReplicationControllerStatus.attributeTypeMap = [
    {
        "name": "availableReplicas",
        "baseName": "availableReplicas",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1ReplicationControllerCondition>",
        "format": ""
    },
    {
        "name": "fullyLabeledReplicas",
        "baseName": "fullyLabeledReplicas",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "observedGeneration",
        "baseName": "observedGeneration",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "readyReplicas",
        "baseName": "readyReplicas",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number",
        "format": "int32"
    }
];
//# sourceMappingURL=V1ReplicationControllerStatus.js.map