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
exports.V1MutatingWebhookConfiguration = void 0;
/**
* MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
*/
class V1MutatingWebhookConfiguration {
    static getAttributeTypeMap() {
        return V1MutatingWebhookConfiguration.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1MutatingWebhookConfiguration = V1MutatingWebhookConfiguration;
V1MutatingWebhookConfiguration.discriminator = undefined;
V1MutatingWebhookConfiguration.attributeTypeMap = [
    {
        "name": "apiVersion",
        "baseName": "apiVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "kind",
        "baseName": "kind",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "V1ObjectMeta",
        "format": ""
    },
    {
        "name": "webhooks",
        "baseName": "webhooks",
        "type": "Array<V1MutatingWebhook>",
        "format": ""
    }
];
//# sourceMappingURL=V1MutatingWebhookConfiguration.js.map