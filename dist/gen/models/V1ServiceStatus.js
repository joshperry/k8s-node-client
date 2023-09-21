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
exports.V1ServiceStatus = void 0;
/**
* ServiceStatus represents the current status of a service.
*/
class V1ServiceStatus {
    static getAttributeTypeMap() {
        return V1ServiceStatus.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ServiceStatus = V1ServiceStatus;
V1ServiceStatus.discriminator = undefined;
V1ServiceStatus.attributeTypeMap = [
    {
        "name": "conditions",
        "baseName": "conditions",
        "type": "Array<V1Condition>",
        "format": ""
    },
    {
        "name": "loadBalancer",
        "baseName": "loadBalancer",
        "type": "V1LoadBalancerStatus",
        "format": ""
    }
];
//# sourceMappingURL=V1ServiceStatus.js.map