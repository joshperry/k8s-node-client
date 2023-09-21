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
exports.AdmissionregistrationV1ServiceReference = void 0;
/**
* ServiceReference holds a reference to Service.legacy.k8s.io
*/
class AdmissionregistrationV1ServiceReference {
    static getAttributeTypeMap() {
        return AdmissionregistrationV1ServiceReference.attributeTypeMap;
    }
    constructor() {
    }
}
exports.AdmissionregistrationV1ServiceReference = AdmissionregistrationV1ServiceReference;
AdmissionregistrationV1ServiceReference.discriminator = undefined;
AdmissionregistrationV1ServiceReference.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "namespace",
        "baseName": "namespace",
        "type": "string",
        "format": ""
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string",
        "format": ""
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number",
        "format": "int32"
    }
];
//# sourceMappingURL=AdmissionregistrationV1ServiceReference.js.map