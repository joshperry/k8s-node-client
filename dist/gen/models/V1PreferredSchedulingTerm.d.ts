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
import { V1NodeSelectorTerm } from '../models/V1NodeSelectorTerm';
/**
* An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it\'s a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
*/
export declare class V1PreferredSchedulingTerm {
    'preference': V1NodeSelectorTerm;
    /**
    * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
    */
    'weight': number;
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
