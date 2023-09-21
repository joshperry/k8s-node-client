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
exports.V1EphemeralVolumeSource = void 0;
/**
* Represents an ephemeral volume that is handled by a normal storage driver.
*/
class V1EphemeralVolumeSource {
    static getAttributeTypeMap() {
        return V1EphemeralVolumeSource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1EphemeralVolumeSource = V1EphemeralVolumeSource;
V1EphemeralVolumeSource.discriminator = undefined;
V1EphemeralVolumeSource.attributeTypeMap = [
    {
        "name": "volumeClaimTemplate",
        "baseName": "volumeClaimTemplate",
        "type": "V1PersistentVolumeClaimTemplate",
        "format": ""
    }
];
//# sourceMappingURL=V1EphemeralVolumeSource.js.map