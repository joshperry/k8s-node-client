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
* UserInfo holds the information about the user needed to implement the user.Info interface.
*/
export declare class V1UserInfo {
    /**
    * Any additional information provided by the authenticator.
    */
    'extra'?: {
        [key: string]: Array<string>;
    };
    /**
    * The names of groups this user is a part of.
    */
    'groups'?: Array<string>;
    /**
    * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
    */
    'uid'?: string;
    /**
    * The name that uniquely identifies this user among all active users.
    */
    'username'?: string;
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