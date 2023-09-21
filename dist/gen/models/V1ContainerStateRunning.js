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
exports.V1ContainerStateRunning = void 0;
/**
* ContainerStateRunning is a running state of a container.
*/
class V1ContainerStateRunning {
    static getAttributeTypeMap() {
        return V1ContainerStateRunning.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ContainerStateRunning = V1ContainerStateRunning;
V1ContainerStateRunning.discriminator = undefined;
V1ContainerStateRunning.attributeTypeMap = [
    {
        "name": "startedAt",
        "baseName": "startedAt",
        "type": "Date",
        "format": "date-time"
    }
];
//# sourceMappingURL=V1ContainerStateRunning.js.map