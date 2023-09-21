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
import { V1ConfigMapKeySelector } from '../models/V1ConfigMapKeySelector';
import { V1ObjectFieldSelector } from '../models/V1ObjectFieldSelector';
import { V1ResourceFieldSelector } from '../models/V1ResourceFieldSelector';
import { V1SecretKeySelector } from '../models/V1SecretKeySelector';
/**
* EnvVarSource represents a source for the value of an EnvVar.
*/
export declare class V1EnvVarSource {
    'configMapKeyRef'?: V1ConfigMapKeySelector;
    'fieldRef'?: V1ObjectFieldSelector;
    'resourceFieldRef'?: V1ResourceFieldSelector;
    'secretKeyRef'?: V1SecretKeySelector;
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