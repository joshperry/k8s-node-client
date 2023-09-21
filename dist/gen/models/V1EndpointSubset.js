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
exports.V1EndpointSubset = void 0;
/**
* EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:   {     Addresses: [{\"ip\": \"10.10.1.1\"}, {\"ip\": \"10.10.2.2\"}],     Ports:     [{\"name\": \"a\", \"port\": 8675}, {\"name\": \"b\", \"port\": 309}]   } The resulting set of endpoints can be viewed as:     a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],     b: [ 10.10.1.1:309, 10.10.2.2:309 ]
*/
class V1EndpointSubset {
    static getAttributeTypeMap() {
        return V1EndpointSubset.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1EndpointSubset = V1EndpointSubset;
V1EndpointSubset.discriminator = undefined;
V1EndpointSubset.attributeTypeMap = [
    {
        "name": "addresses",
        "baseName": "addresses",
        "type": "Array<V1EndpointAddress>",
        "format": ""
    },
    {
        "name": "notReadyAddresses",
        "baseName": "notReadyAddresses",
        "type": "Array<V1EndpointAddress>",
        "format": ""
    },
    {
        "name": "ports",
        "baseName": "ports",
        "type": "Array<CoreV1EndpointPort>",
        "format": ""
    }
];
//# sourceMappingURL=V1EndpointSubset.js.map