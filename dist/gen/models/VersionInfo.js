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
exports.VersionInfo = void 0;
/**
* Info contains versioning information. how we\'ll want to distribute that information.
*/
class VersionInfo {
    static getAttributeTypeMap() {
        return VersionInfo.attributeTypeMap;
    }
    constructor() {
    }
}
exports.VersionInfo = VersionInfo;
VersionInfo.discriminator = undefined;
VersionInfo.attributeTypeMap = [
    {
        "name": "buildDate",
        "baseName": "buildDate",
        "type": "string",
        "format": ""
    },
    {
        "name": "compiler",
        "baseName": "compiler",
        "type": "string",
        "format": ""
    },
    {
        "name": "gitCommit",
        "baseName": "gitCommit",
        "type": "string",
        "format": ""
    },
    {
        "name": "gitTreeState",
        "baseName": "gitTreeState",
        "type": "string",
        "format": ""
    },
    {
        "name": "gitVersion",
        "baseName": "gitVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "goVersion",
        "baseName": "goVersion",
        "type": "string",
        "format": ""
    },
    {
        "name": "major",
        "baseName": "major",
        "type": "string",
        "format": ""
    },
    {
        "name": "minor",
        "baseName": "minor",
        "type": "string",
        "format": ""
    },
    {
        "name": "platform",
        "baseName": "platform",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=VersionInfo.js.map