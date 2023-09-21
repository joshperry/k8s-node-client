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
exports.V1PodSecurityContext = void 0;
/**
* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
*/
class V1PodSecurityContext {
    static getAttributeTypeMap() {
        return V1PodSecurityContext.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1PodSecurityContext = V1PodSecurityContext;
V1PodSecurityContext.discriminator = undefined;
V1PodSecurityContext.attributeTypeMap = [
    {
        "name": "fsGroup",
        "baseName": "fsGroup",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "fsGroupChangePolicy",
        "baseName": "fsGroupChangePolicy",
        "type": "string",
        "format": ""
    },
    {
        "name": "runAsGroup",
        "baseName": "runAsGroup",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "runAsNonRoot",
        "baseName": "runAsNonRoot",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "runAsUser",
        "baseName": "runAsUser",
        "type": "number",
        "format": "int64"
    },
    {
        "name": "seLinuxOptions",
        "baseName": "seLinuxOptions",
        "type": "V1SELinuxOptions",
        "format": ""
    },
    {
        "name": "seccompProfile",
        "baseName": "seccompProfile",
        "type": "V1SeccompProfile",
        "format": ""
    },
    {
        "name": "supplementalGroups",
        "baseName": "supplementalGroups",
        "type": "Array<number>",
        "format": "int64"
    },
    {
        "name": "sysctls",
        "baseName": "sysctls",
        "type": "Array<V1Sysctl>",
        "format": ""
    },
    {
        "name": "windowsOptions",
        "baseName": "windowsOptions",
        "type": "V1WindowsSecurityContextOptions",
        "format": ""
    }
];
//# sourceMappingURL=V1PodSecurityContext.js.map