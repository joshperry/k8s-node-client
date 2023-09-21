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
import { V1EventSource } from '../models/V1EventSource';
import { V1MicroTime } from '../../types';
import { V1ObjectMeta } from '../models/V1ObjectMeta';
import { V1ObjectReference } from '../models/V1ObjectReference';
import { V1beta1EventSeries } from '../models/V1beta1EventSeries';
/**
* Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
*/
export declare class V1beta1Event {
    /**
    * action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field can have at most 128 characters.
    */
    'action'?: string;
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
    */
    'deprecatedCount'?: number;
    /**
    * deprecatedFirstTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
    */
    'deprecatedFirstTimestamp'?: Date;
    /**
    * deprecatedLastTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
    */
    'deprecatedLastTimestamp'?: Date;
    'deprecatedSource'?: V1EventSource;
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'eventTime': V1MicroTime;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    /**
    * note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
    */
    'note'?: string;
    /**
    * reason is why the action was taken. It is human-readable. This field can have at most 128 characters.
    */
    'reason'?: string;
    'regarding'?: V1ObjectReference;
    'related'?: V1ObjectReference;
    /**
    * reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events.
    */
    'reportingController'?: string;
    /**
    * reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters.
    */
    'reportingInstance'?: string;
    'series'?: V1beta1EventSeries;
    /**
    * type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable.
    */
    'type'?: string;
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