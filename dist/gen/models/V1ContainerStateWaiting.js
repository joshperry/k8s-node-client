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
exports.V1ContainerStateWaiting = void 0;
/**
* ContainerStateWaiting is a waiting state of a container.
*/
class V1ContainerStateWaiting {
    static getAttributeTypeMap() {
        return V1ContainerStateWaiting.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ContainerStateWaiting = V1ContainerStateWaiting;
V1ContainerStateWaiting.discriminator = undefined;
V1ContainerStateWaiting.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=V1ContainerStateWaiting.js.map