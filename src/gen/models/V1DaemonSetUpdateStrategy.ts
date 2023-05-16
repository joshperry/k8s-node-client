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

import { V1RollingUpdateDaemonSet } from '../models/V1RollingUpdateDaemonSet';
import { HttpFile } from '../http/http';

/**
* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
*/
export class V1DaemonSetUpdateStrategy {
    'rollingUpdate'?: V1RollingUpdateDaemonSet;
    /**
    * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
    */
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rollingUpdate",
            "baseName": "rollingUpdate",
            "type": "V1RollingUpdateDaemonSet",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1DaemonSetUpdateStrategy.attributeTypeMap;
    }

    public constructor() {
    }
}
