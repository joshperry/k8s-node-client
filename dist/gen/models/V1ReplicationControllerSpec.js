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
exports.V1ReplicationControllerSpec = void 0;
/**
* ReplicationControllerSpec is the specification of a replication controller.
*/
class V1ReplicationControllerSpec {
    static getAttributeTypeMap() {
        return V1ReplicationControllerSpec.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ReplicationControllerSpec = V1ReplicationControllerSpec;
V1ReplicationControllerSpec.discriminator = undefined;
V1ReplicationControllerSpec.attributeTypeMap = [
    {
        "name": "minReadySeconds",
        "baseName": "minReadySeconds",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "template",
        "baseName": "template",
        "type": "V1PodTemplateSpec",
        "format": ""
    }
];
//# sourceMappingURL=V1ReplicationControllerSpec.js.map