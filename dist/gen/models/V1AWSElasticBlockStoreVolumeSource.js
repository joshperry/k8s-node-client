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
exports.V1AWSElasticBlockStoreVolumeSource = void 0;
/**
* Represents a Persistent Disk resource in AWS.  An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
*/
class V1AWSElasticBlockStoreVolumeSource {
    static getAttributeTypeMap() {
        return V1AWSElasticBlockStoreVolumeSource.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1AWSElasticBlockStoreVolumeSource = V1AWSElasticBlockStoreVolumeSource;
V1AWSElasticBlockStoreVolumeSource.discriminator = undefined;
V1AWSElasticBlockStoreVolumeSource.attributeTypeMap = [
    {
        "name": "fsType",
        "baseName": "fsType",
        "type": "string",
        "format": ""
    },
    {
        "name": "partition",
        "baseName": "partition",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "readOnly",
        "baseName": "readOnly",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "volumeID",
        "baseName": "volumeID",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1AWSElasticBlockStoreVolumeSource.js.map