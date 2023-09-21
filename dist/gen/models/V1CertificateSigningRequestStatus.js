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
exports.V1CertificateSigningRequestStatus = void 0;
/**
* CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate.
*/
class V1CertificateSigningRequestStatus {
    static getAttributeTypeMap() {
        return V1CertificateSigningRequestStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1CertificateSigningRequestStatus = V1CertificateSigningRequestStatus;
V1CertificateSigningRequestStatus.discriminator = undefined;
V1CertificateSigningRequestStatus.attributeTypeMap = [
    {
        "name": "certificate",
        "baseName": "certificate",
        "type": "string",
        "format": "byte"
    },
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1CertificateSigningRequestCondition>",
        "format": ""
    }
];
//# sourceMappingURL=V1CertificateSigningRequestStatus.js.map