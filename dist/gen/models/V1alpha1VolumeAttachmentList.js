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
exports.V1alpha1VolumeAttachmentList = void 0;
/**
* VolumeAttachmentList is a collection of VolumeAttachment objects.
*/
class V1alpha1VolumeAttachmentList {
    static getAttributeTypeMap() {
        return V1alpha1VolumeAttachmentList.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1alpha1VolumeAttachmentList = V1alpha1VolumeAttachmentList;
V1alpha1VolumeAttachmentList.discriminator = undefined;
V1alpha1VolumeAttachmentList.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<V1alpha1VolumeAttachment>",
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
        "type": "V1ListMeta",
        "format": ""
    }
];
//# sourceMappingURL=V1alpha1VolumeAttachmentList.js.map