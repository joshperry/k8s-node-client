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
exports.V1RollingUpdateDeployment = void 0;
/**
* Spec to control the desired behavior of rolling update.
*/
class V1RollingUpdateDeployment {
    static getAttributeTypeMap() {
        return V1RollingUpdateDeployment.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1RollingUpdateDeployment = V1RollingUpdateDeployment;
V1RollingUpdateDeployment.discriminator = undefined;
V1RollingUpdateDeployment.attributeTypeMap = [
    {
        "name": "maxSurge",
        "baseName": "maxSurge",
        "type": "IntOrString",
        "format": "int-or-string"
    },
    {
        "name": "maxUnavailable",
        "baseName": "maxUnavailable",
        "type": "IntOrString",
        "format": "int-or-string"
    }
];
//# sourceMappingURL=V1RollingUpdateDeployment.js.map