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
exports.V1beta1UserSubject = void 0;
/**
* UserSubject holds detailed information for user-kind subject.
*/
class V1beta1UserSubject {
    static getAttributeTypeMap() {
        return V1beta1UserSubject.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1UserSubject = V1beta1UserSubject;
V1beta1UserSubject.discriminator = undefined;
V1beta1UserSubject.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1beta1UserSubject.js.map