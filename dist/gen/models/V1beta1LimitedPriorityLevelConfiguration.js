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
exports.V1beta1LimitedPriorityLevelConfiguration = void 0;
/**
* LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:  * How are requests for this priority level limited?  * What should be done with requests that exceed the limit?
*/
class V1beta1LimitedPriorityLevelConfiguration {
    static getAttributeTypeMap() {
        return V1beta1LimitedPriorityLevelConfiguration.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1LimitedPriorityLevelConfiguration = V1beta1LimitedPriorityLevelConfiguration;
V1beta1LimitedPriorityLevelConfiguration.discriminator = undefined;
V1beta1LimitedPriorityLevelConfiguration.attributeTypeMap = [
    {
        "name": "assuredConcurrencyShares",
        "baseName": "assuredConcurrencyShares",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "limitResponse",
        "baseName": "limitResponse",
        "type": "V1beta1LimitResponse",
        "format": ""
    }
];
//# sourceMappingURL=V1beta1LimitedPriorityLevelConfiguration.js.map