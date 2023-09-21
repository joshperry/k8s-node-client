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
exports.V1ServiceSpec = void 0;
/**
* ServiceSpec describes the attributes that a user creates on a service.
*/
class V1ServiceSpec {
    static getAttributeTypeMap() {
        return V1ServiceSpec.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1ServiceSpec = V1ServiceSpec;
V1ServiceSpec.discriminator = undefined;
V1ServiceSpec.attributeTypeMap = [
    {
        "name": "allocateLoadBalancerNodePorts",
        "baseName": "allocateLoadBalancerNodePorts",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "clusterIP",
        "baseName": "clusterIP",
        "type": "string",
        "format": ""
    },
    {
        "name": "clusterIPs",
        "baseName": "clusterIPs",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "externalIPs",
        "baseName": "externalIPs",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "externalName",
        "baseName": "externalName",
        "type": "string",
        "format": ""
    },
    {
        "name": "externalTrafficPolicy",
        "baseName": "externalTrafficPolicy",
        "type": "string",
        "format": ""
    },
    {
        "name": "healthCheckNodePort",
        "baseName": "healthCheckNodePort",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "internalTrafficPolicy",
        "baseName": "internalTrafficPolicy",
        "type": "string",
        "format": ""
    },
    {
        "name": "ipFamilies",
        "baseName": "ipFamilies",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "ipFamilyPolicy",
        "baseName": "ipFamilyPolicy",
        "type": "string",
        "format": ""
    },
    {
        "name": "loadBalancerClass",
        "baseName": "loadBalancerClass",
        "type": "string",
        "format": ""
    },
    {
        "name": "loadBalancerIP",
        "baseName": "loadBalancerIP",
        "type": "string",
        "format": ""
    },
    {
        "name": "loadBalancerSourceRanges",
        "baseName": "loadBalancerSourceRanges",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "ports",
        "baseName": "ports",
        "type": "Array<V1ServicePort>",
        "format": ""
    },
    {
        "name": "publishNotReadyAddresses",
        "baseName": "publishNotReadyAddresses",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "selector",
        "baseName": "selector",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "sessionAffinity",
        "baseName": "sessionAffinity",
        "type": "string",
        "format": ""
    },
    {
        "name": "sessionAffinityConfig",
        "baseName": "sessionAffinityConfig",
        "type": "V1SessionAffinityConfig",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1ServiceSpec.js.map