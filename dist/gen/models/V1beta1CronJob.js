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
exports.V1beta1CronJob = void 0;
/**
* CronJob represents the configuration of a single cron job.
*/
class V1beta1CronJob {
    static getAttributeTypeMap() {
        return V1beta1CronJob.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1CronJob = V1beta1CronJob;
V1beta1CronJob.discriminator = undefined;
V1beta1CronJob.attributeTypeMap = [
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
        "type": "V1beta1CronJobSpec",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "V1beta1CronJobStatus",
        "format": ""
    }
];
//# sourceMappingURL=V1beta1CronJob.js.map