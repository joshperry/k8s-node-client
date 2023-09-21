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
exports.V1StatefulSetUpdateStrategy = void 0;
/**
* StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
*/
class V1StatefulSetUpdateStrategy {
    static getAttributeTypeMap() {
        return V1StatefulSetUpdateStrategy.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1StatefulSetUpdateStrategy = V1StatefulSetUpdateStrategy;
V1StatefulSetUpdateStrategy.discriminator = undefined;
V1StatefulSetUpdateStrategy.attributeTypeMap = [
    {
        "name": "rollingUpdate",
        "baseName": "rollingUpdate",
        "type": "V1RollingUpdateStatefulSetStrategy",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1StatefulSetUpdateStrategy.js.map