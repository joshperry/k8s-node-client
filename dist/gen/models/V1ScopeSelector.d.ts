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
import { V1ScopedResourceSelectorRequirement } from '../models/V1ScopedResourceSelectorRequirement';
/**
* A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
*/
export declare class V1ScopeSelector {
    /**
    * A list of scope selector requirements by scope of the resources.
    */
    'matchExpressions'?: Array<V1ScopedResourceSelectorRequirement>;
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
