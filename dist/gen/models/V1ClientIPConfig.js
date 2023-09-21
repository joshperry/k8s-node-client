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
exports.V1ClientIPConfig = void 0;
/**
* ClientIPConfig represents the configurations of Client IP based session affinity.
*/
class V1ClientIPConfig {
    static getAttributeTypeMap() {
        return V1ClientIPConfig.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ClientIPConfig = V1ClientIPConfig;
V1ClientIPConfig.discriminator = undefined;
V1ClientIPConfig.attributeTypeMap = [
    {
        "name": "timeoutSeconds",
        "baseName": "timeoutSeconds",
        "type": "number",
        "format": "int32"
    }
];
//# sourceMappingURL=V1ClientIPConfig.js.map