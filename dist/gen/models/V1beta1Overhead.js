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
exports.V1beta1Overhead = void 0;
/**
* Overhead structure represents the resource overhead associated with running a pod.
*/
class V1beta1Overhead {
    static getAttributeTypeMap() {
        return V1beta1Overhead.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1Overhead = V1beta1Overhead;
V1beta1Overhead.discriminator = undefined;
V1beta1Overhead.attributeTypeMap = [
    {
        "name": "podFixed",
        "baseName": "podFixed",
        "type": "{ [key: string]: string; }",
        "format": ""
    }
];
//# sourceMappingURL=V1beta1Overhead.js.map