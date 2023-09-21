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
exports.V1beta1EventSeries = void 0;
/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
*/
class V1beta1EventSeries {
    static getAttributeTypeMap() {
        return V1beta1EventSeries.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1beta1EventSeries = V1beta1EventSeries;
V1beta1EventSeries.discriminator = undefined;
V1beta1EventSeries.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "lastObservedTime",
        "baseName": "lastObservedTime",
        "type": "V1MicroTime",
        "format": "date-time-micro"
    }
];
//# sourceMappingURL=V1beta1EventSeries.js.map