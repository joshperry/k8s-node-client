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
* EndpointPort is a tuple that describes a single port.
*/
export declare class CoreV1EndpointPort {
    /**
    * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.
    */
    'appProtocol'?: string;
    /**
    * The name of this port.  This must match the \'name\' field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined.
    */
    'name'?: string;
    /**
    * The port number of the endpoint.
    */
    'port': number;
    /**
    * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
    */
    'protocol'?: string;
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
