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
exports.V1ReplicationController = void 0;
/**
* ReplicationController represents the configuration of a replication controller.
*/
class V1ReplicationController {
    static getAttributeTypeMap() {
        return V1ReplicationController.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ReplicationController = V1ReplicationController;
V1ReplicationController.discriminator = undefined;
V1ReplicationController.attributeTypeMap = [
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
        "type": "V1ReplicationControllerSpec",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1ReplicationControllerStatus",
        "format": ""
    }
];
//# sourceMappingURL=V1ReplicationController.js.map