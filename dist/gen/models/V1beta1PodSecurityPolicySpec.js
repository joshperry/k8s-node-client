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
exports.V1beta1PodSecurityPolicySpec = void 0;
/**
* PodSecurityPolicySpec defines the policy enforced.
*/
class V1beta1PodSecurityPolicySpec {
    static getAttributeTypeMap() {
        return V1beta1PodSecurityPolicySpec.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1PodSecurityPolicySpec = V1beta1PodSecurityPolicySpec;
V1beta1PodSecurityPolicySpec.discriminator = undefined;
V1beta1PodSecurityPolicySpec.attributeTypeMap = [
    {
        "name": "allowPrivilegeEscalation",
        "baseName": "allowPrivilegeEscalation",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "allowedCSIDrivers",
        "baseName": "allowedCSIDrivers",
        "type": "Array<V1beta1AllowedCSIDriver>",
        "format": ""
    },
    {
        "name": "allowedCapabilities",
        "baseName": "allowedCapabilities",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "allowedFlexVolumes",
        "baseName": "allowedFlexVolumes",
        "type": "Array<V1beta1AllowedFlexVolume>",
        "format": ""
    },
    {
        "name": "allowedHostPaths",
        "baseName": "allowedHostPaths",
        "type": "Array<V1beta1AllowedHostPath>",
        "format": ""
    },
    {
        "name": "allowedProcMountTypes",
        "baseName": "allowedProcMountTypes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "allowedUnsafeSysctls",
        "baseName": "allowedUnsafeSysctls",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "defaultAddCapabilities",
        "baseName": "defaultAddCapabilities",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "defaultAllowPrivilegeEscalation",
        "baseName": "defaultAllowPrivilegeEscalation",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "forbiddenSysctls",
        "baseName": "forbiddenSysctls",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "fsGroup",
        "baseName": "fsGroup",
        "type": "V1beta1FSGroupStrategyOptions",
        "format": ""
    },
    {
        "name": "hostIPC",
        "baseName": "hostIPC",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "hostNetwork",
        "baseName": "hostNetwork",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "hostPID",
        "baseName": "hostPID",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "hostPorts",
        "baseName": "hostPorts",
        "type": "Array<V1beta1HostPortRange>",
        "format": ""
    },
    {
        "name": "privileged",
        "baseName": "privileged",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "readOnlyRootFilesystem",
        "baseName": "readOnlyRootFilesystem",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "requiredDropCapabilities",
        "baseName": "requiredDropCapabilities",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "runAsGroup",
        "baseName": "runAsGroup",
        "type": "V1beta1RunAsGroupStrategyOptions",
        "format": ""
    },
    {
        "name": "runAsUser",
        "baseName": "runAsUser",
        "type": "V1beta1RunAsUserStrategyOptions",
        "format": ""
    },
    {
        "name": "runtimeClass",
        "baseName": "runtimeClass",
        "type": "V1beta1RuntimeClassStrategyOptions",
        "format": ""
    },
    {
        "name": "seLinux",
        "baseName": "seLinux",
        "type": "V1beta1SELinuxStrategyOptions",
        "format": ""
    },
    {
        "name": "supplementalGroups",
        "baseName": "supplementalGroups",
        "type": "V1beta1SupplementalGroupsStrategyOptions",
        "format": ""
    },
    {
        "name": "volumes",
        "baseName": "volumes",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=V1beta1PodSecurityPolicySpec.js.map