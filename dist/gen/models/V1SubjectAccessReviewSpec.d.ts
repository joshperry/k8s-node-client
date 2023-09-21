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
import { V1NonResourceAttributes } from '../models/V1NonResourceAttributes';
import { V1ResourceAttributes } from '../models/V1ResourceAttributes';
/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
export declare class V1SubjectAccessReviewSpec {
    /**
    * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
    */
    'extra'?: {
        [key: string]: Array<string>;
    };
    /**
    * Groups is the groups you\'re testing for.
    */
    'groups'?: Array<string>;
    'nonResourceAttributes'?: V1NonResourceAttributes;
    'resourceAttributes'?: V1ResourceAttributes;
    /**
    * UID information about the requesting user.
    */
    'uid'?: string;
    /**
    * User is the user you\'re testing for. If you specify \"User\" but not \"Groups\", then is it interpreted as \"What if User were not a member of any groups
    */
    'user'?: string;
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
