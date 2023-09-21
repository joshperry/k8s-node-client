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
* ServiceReference holds a reference to Service.legacy.k8s.io
*/
export declare class ApiextensionsV1ServiceReference {
    /**
    * name is the name of the service. Required
    */
    'name': string;
    /**
    * namespace is the namespace of the service. Required
    */
    'namespace': string;
    /**
    * path is an optional URL path at which the webhook will be contacted.
    */
    'path'?: string;
    /**
    * port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
    */
    'port'?: number;
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