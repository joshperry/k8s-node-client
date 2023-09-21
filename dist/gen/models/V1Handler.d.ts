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
import { V1ExecAction } from '../models/V1ExecAction';
import { V1HTTPGetAction } from '../models/V1HTTPGetAction';
import { V1TCPSocketAction } from '../models/V1TCPSocketAction';
/**
* Handler defines a specific action that should be taken
*/
export declare class V1Handler {
    'exec'?: V1ExecAction;
    'httpGet'?: V1HTTPGetAction;
    'tcpSocket'?: V1TCPSocketAction;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}