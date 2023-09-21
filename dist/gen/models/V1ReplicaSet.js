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
exports.V1ReplicaSet = void 0;
/**
* ReplicaSet ensures that a specified number of pod replicas are running at any given time.
*/
class V1ReplicaSet {
    static getAttributeTypeMap() {
        return V1ReplicaSet.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ReplicaSet = V1ReplicaSet;
V1ReplicaSet.discriminator = undefined;
V1ReplicaSet.attributeTypeMap = [
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
        "type": "V1ReplicaSetSpec",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1ReplicaSetStatus",
        "format": ""
    }
];
//# sourceMappingURL=V1ReplicaSet.js.map