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
exports.V1Job = void 0;
/**
* Job represents the configuration of a single job.
*/
class V1Job {
    static getAttributeTypeMap() {
        return V1Job.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1Job = V1Job;
V1Job.discriminator = undefined;
V1Job.attributeTypeMap = [
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
        "type": "V1JobSpec",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1JobStatus",
        "format": ""
    }
];
//# sourceMappingURL=V1Job.js.map