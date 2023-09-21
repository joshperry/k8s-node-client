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
import { V1ContainerState } from '../models/V1ContainerState';
/**
* ContainerStatus contains details for the current status of this container.
*/
export declare class V1ContainerStatus {
    /**
    * Container\'s ID in the format \'docker://<container_id>\'.
    */
    'containerID'?: string;
    /**
    * The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images
    */
    'image': string;
    /**
    * ImageID of the container\'s image.
    */
    'imageID': string;
    'lastState'?: V1ContainerState;
    /**
    * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
    */
    'name': string;
    /**
    * Specifies whether the container has passed its readiness probe.
    */
    'ready': boolean;
    /**
    * The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
    */
    'restartCount': number;
    /**
    * Specifies whether the container has passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. Is always true when no startupProbe is defined.
    */
    'started'?: boolean;
    'state'?: V1ContainerState;
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