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
import { V1LabelSelector } from '../models/V1LabelSelector';
import { V1PersistentVolumeClaim } from '../models/V1PersistentVolumeClaim';
import { V1PodTemplateSpec } from '../models/V1PodTemplateSpec';
import { V1StatefulSetUpdateStrategy } from '../models/V1StatefulSetUpdateStrategy';
/**
* A StatefulSetSpec is the specification of a StatefulSet.
*/
export declare class V1StatefulSetSpec {
    /**
    * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) This is an alpha field and requires enabling StatefulSetMinReadySeconds feature gate.
    */
    'minReadySeconds'?: number;
    /**
    * podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
    */
    'podManagementPolicy'?: string;
    /**
    * replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
    */
    'replicas'?: number;
    /**
    * revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet\'s revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
    */
    'revisionHistoryLimit'?: number;
    'selector': V1LabelSelector;
    /**
    * serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where \"pod-specific-string\" is managed by the StatefulSet controller.
    */
    'serviceName': string;
    'template': V1PodTemplateSpec;
    'updateStrategy'?: V1StatefulSetUpdateStrategy;
    /**
    * volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
    */
    'volumeClaimTemplates'?: Array<V1PersistentVolumeClaim>;
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
