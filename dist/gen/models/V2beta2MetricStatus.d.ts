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
import { V2beta2ContainerResourceMetricStatus } from '../models/V2beta2ContainerResourceMetricStatus';
import { V2beta2ExternalMetricStatus } from '../models/V2beta2ExternalMetricStatus';
import { V2beta2ObjectMetricStatus } from '../models/V2beta2ObjectMetricStatus';
import { V2beta2PodsMetricStatus } from '../models/V2beta2PodsMetricStatus';
import { V2beta2ResourceMetricStatus } from '../models/V2beta2ResourceMetricStatus';
/**
* MetricStatus describes the last-read state of a single metric.
*/
export declare class V2beta2MetricStatus {
    'containerResource'?: V2beta2ContainerResourceMetricStatus;
    'external'?: V2beta2ExternalMetricStatus;
    'object'?: V2beta2ObjectMetricStatus;
    'pods'?: V2beta2PodsMetricStatus;
    'resource'?: V2beta2ResourceMetricStatus;
    /**
    * type is the type of metric source.  It will be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
    */
    'type': string;
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