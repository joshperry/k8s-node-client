/// <reference types="node" />
import { KubeConfig } from './config';
export declare class Watch {
    static SERVER_SIDE_CLOSE: object;
    config: KubeConfig;
    constructor(config: KubeConfig);
    watch(path: string, queryParams: Record<string, string | number | boolean | undefined>, callback: (phase: string, apiObj: any, watchObj?: any) => void, done: (err: any) => void): Promise<AbortController>;
}