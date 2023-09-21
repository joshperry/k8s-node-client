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
exports.V1KeyToPath = void 0;
/**
* Maps a string key to a path within a volume.
*/
class V1KeyToPath {
    static getAttributeTypeMap() {
        return V1KeyToPath.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1KeyToPath = V1KeyToPath;
V1KeyToPath.discriminator = undefined;
V1KeyToPath.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "mode",
        "baseName": "mode",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=V1KeyToPath.js.map