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
exports.V1beta1FlowSchema = void 0;
/**
* FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a \"flow distinguisher\".
*/
class V1beta1FlowSchema {
    static getAttributeTypeMap() {
        return V1beta1FlowSchema.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1FlowSchema = V1beta1FlowSchema;
V1beta1FlowSchema.discriminator = undefined;
V1beta1FlowSchema.attributeTypeMap = [
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
        "name": "spec",
        "baseName": "spec",
        "type": "V1beta1FlowSchemaSpec",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1beta1FlowSchemaStatus",
        "format": ""
    }
];
//# sourceMappingURL=V1beta1FlowSchema.js.map