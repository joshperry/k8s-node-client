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
exports.V1VolumeNodeResources = void 0;
/**
* VolumeNodeResources is a set of resource limits for scheduling of volumes.
*/
class V1VolumeNodeResources {
    static getAttributeTypeMap() {
        return V1VolumeNodeResources.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1VolumeNodeResources = V1VolumeNodeResources;
V1VolumeNodeResources.discriminator = undefined;
V1VolumeNodeResources.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number",
        "format": "int32"
    }
];
//# sourceMappingURL=V1VolumeNodeResources.js.map