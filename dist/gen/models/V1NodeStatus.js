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
exports.V1NodeStatus = void 0;
/**
* NodeStatus is information about the current status of a node.
*/
class V1NodeStatus {
    static getAttributeTypeMap() {
        return V1NodeStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1NodeStatus = V1NodeStatus;
V1NodeStatus.discriminator = undefined;
V1NodeStatus.attributeTypeMap = [
    {
        "name": "addresses",
        "baseName": "addresses",
        "type": "Array<V1NodeAddress>",
        "format": ""
    },
    {
        "name": "allocatable",
        "baseName": "allocatable",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "capacity",
        "baseName": "capacity",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1NodeCondition>",
        "format": ""
    },
    {
        "name": "config",
        "baseName": "config",
        "type": "V1NodeConfigStatus",
        "format": ""
    },
    {
        "name": "daemonEndpoints",
        "baseName": "daemonEndpoints",
        "type": "V1NodeDaemonEndpoints",
        "format": ""
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<V1ContainerImage>",
        "format": ""
    },
    {
        "name": "nodeInfo",
        "baseName": "nodeInfo",
        "type": "V1NodeSystemInfo",
        "format": ""
    },
    {
        "name": "phase",
        "baseName": "phase",
        "type": "string",
        "format": ""
    },
    {
        "name": "volumesAttached",
        "baseName": "volumesAttached",
        "type": "Array<V1AttachedVolume>",
        "format": ""
    },
    {
        "name": "volumesInUse",
        "baseName": "volumesInUse",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=V1NodeStatus.js.map