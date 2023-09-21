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
import { V2beta2HorizontalPodAutoscalerCondition } from '../models/V2beta2HorizontalPodAutoscalerCondition';
import { V2beta2MetricStatus } from '../models/V2beta2MetricStatus';
/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
*/
export declare class V2beta2HorizontalPodAutoscalerStatus {
    /**
    * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
    */
    'conditions': Array<V2beta2HorizontalPodAutoscalerCondition>;
    /**
    * currentMetrics is the last read state of the metrics used by this autoscaler.
    */
    'currentMetrics'?: Array<V2beta2MetricStatus>;
    /**
    * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
    */
    'currentReplicas': number;
    /**
    * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
    */
    'desiredReplicas': number;
    /**
    * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
    */
    'lastScaleTime'?: Date;
    /**
    * observedGeneration is the most recent generation observed by this autoscaler.
    */
    'observedGeneration'?: number;
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
