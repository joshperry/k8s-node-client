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
/**
* Condition contains details for one aspect of the current state of this API Resource.
*/
export declare class V1Condition {
    /**
    * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
    */
    'lastTransitionTime': Date;
    /**
    * message is a human readable message indicating details about the transition. This may be an empty string.
    */
    'message': string;
    /**
    * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
    */
    'observedGeneration'?: number;
    /**
    * reason contains a programmatic identifier indicating the reason for the condition\'s last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
    */
    'reason': string;
    /**
    * status of the condition, one of True, False, Unknown.
    */
    'status': string;
    /**
    * type of condition in CamelCase or in foo.example.com/CamelCase.
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
