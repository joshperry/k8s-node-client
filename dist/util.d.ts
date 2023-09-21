import { Response } from 'node-fetch';
import { CoreV1Api, V1Container, V1Pod } from './gen';
import { ObjectSerializer as InternalSerializer } from './gen/models/ObjectSerializer';
export declare class ObjectSerializer extends InternalSerializer {
    static serialize(data: any, type: string, format?: string): string;
    static deserialize(data: any, type: string, format?: string): any;
}
export declare function podsForNode(api: CoreV1Api, nodeName: string): Promise<V1Pod[]>;
export declare function findSuffix(quantity: string): string;
export declare function quantityToScalar(quantity: string): number | bigint;
export declare class ResourceStatus {
    readonly request: bigint | number;
    readonly limit: bigint | number;
    readonly resourceType: string;
    constructor(request: bigint | number, limit: bigint | number, resourceType: string);
}
export declare function totalCPUForContainer(container: V1Container): ResourceStatus;
export declare function totalMemoryForContainer(container: V1Container): ResourceStatus;
export declare function totalCPU(pod: V1Pod): ResourceStatus;
export declare function totalMemory(pod: V1Pod): ResourceStatus;
export declare function add(n1: number | bigint, n2: number | bigint): number | bigint;
export declare function containerTotalForResource(container: V1Container, resource: string): ResourceStatus;
export declare function totalForResource(pod: V1Pod, resource: string): ResourceStatus;
export declare function normalizeResponseHeaders(response: Response): {
    [key: string]: string;
};