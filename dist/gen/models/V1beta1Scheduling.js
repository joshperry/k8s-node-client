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
exports.V1beta1Scheduling = void 0;
/**
* Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
*/
class V1beta1Scheduling {
    static getAttributeTypeMap() {
        return V1beta1Scheduling.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1Scheduling = V1beta1Scheduling;
V1beta1Scheduling.discriminator = undefined;
V1beta1Scheduling.attributeTypeMap = [
    {
        "name": "nodeSelector",
        "baseName": "nodeSelector",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "tolerations",
        "baseName": "tolerations",
        "type": "Array<V1Toleration>",
        "format": ""
    }
];
//# sourceMappingURL=V1beta1Scheduling.js.map