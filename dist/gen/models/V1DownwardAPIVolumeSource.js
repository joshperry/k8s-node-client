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
exports.V1DownwardAPIVolumeSource = void 0;
/**
* DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
*/
class V1DownwardAPIVolumeSource {
    static getAttributeTypeMap() {
        return V1DownwardAPIVolumeSource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1DownwardAPIVolumeSource = V1DownwardAPIVolumeSource;
V1DownwardAPIVolumeSource.discriminator = undefined;
V1DownwardAPIVolumeSource.attributeTypeMap = [
    {
        "name": "defaultMode",
        "baseName": "defaultMode",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1DownwardAPIVolumeFile>",
        "format": ""
    }
];
//# sourceMappingURL=V1DownwardAPIVolumeSource.js.map