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
exports.V1AttachedVolume = void 0;
/**
* AttachedVolume describes a volume attached to a node
*/
class V1AttachedVolume {
    static getAttributeTypeMap() {
        return V1AttachedVolume.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1AttachedVolume = V1AttachedVolume;
V1AttachedVolume.discriminator = undefined;
V1AttachedVolume.attributeTypeMap = [
    {
        "name": "devicePath",
        "baseName": "devicePath",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1AttachedVolume.js.map