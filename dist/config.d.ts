/// <reference types="node" />
/// <reference types="ws" />
/// <reference types="node" />
import https = require('https');
import { RequestInit } from 'node-fetch';
import * as api from './api';
import { Cluster, ConfigOptions, Context, User } from './config_types';
import { Configuration, SecurityAuthentication } from './gen';
import WebSocket = require('isomorphic-ws');
export interface ApiType {
}
export declare class KubeConfig implements SecurityAuthentication {
    private static authenticators;
    /**
     * The list of all known clusters
     */
    'clusters': Cluster[];
    /**
     * The list of all known users
     */
    'users': User[];
    /**
     * The list of all known contexts
     */
    'contexts': Context[];
    /**
     * The name of the current context
     */
    'currentContext': string;
    constructor();
    getContexts(): Context[];
    getClusters(): Cluster[];
    getUsers(): User[];
    getCurrentContext(): string;
    setCurrentContext(context: string): void;
    getContextObject(name: string): Context | null;
    getCurrentCluster(): Cluster | null;
    getCluster(name: string): Cluster | null;
    getCurrentUser(): User | null;
    getUser(name: string): User | null;
    loadFromFile(file: string, opts?: Partial<ConfigOptions>): void;
    applyToFetchOptions(opts: https.RequestOptions): Promise<RequestInit>;
    applyToHTTPSOptions(opts: https.RequestOptions | WebSocket.ClientOptions): Promise<void>;
    /**
     * Applies SecurityAuthentication to RequestContext of an API Call from API Client
     * @param context
     */
    applySecurityAuthentication(context: api.RequestContext): Promise<void>;
    /**
     * Returns name of this security authentication method
     * @returns string
     */
    getName(): string;
    loadFromString(config: string, opts?: Partial<ConfigOptions>): void;
    loadFromOptions(options: any): void;
    loadFromClusterAndUser(cluster: Cluster, user: User): void;
    loadFromCluster(pathPrefix?: string): void;
    mergeConfig(config: KubeConfig, preserveContext?: boolean): void;
    addCluster(cluster: Cluster): void;
    addUser(user: User): void;
    addContext(ctx: Context): void;
    loadFromDefault(opts?: Partial<ConfigOptions>, contextFromStartingConfig?: boolean): void;
    makeApiClient<T extends ApiType>(apiClientType: ApiConstructor<T>): T;
    makePathsAbsolute(rootDirectory: string): void;
    exportConfig(): string;
    private getCurrentContextObject;
    private applyHTTPSOptions;
    private applyAuthorizationHeader;
    private applyOptions;
}
type ApiConstructor<T extends ApiType> = new (config: Configuration) => T;
export declare function makeAbsolutePath(root: string, file: string): string;
export declare function bufferFromFileOrString(file?: string, data?: string): Buffer | null;
export declare function findHomeDir(): string | null;
export interface Named {
    name: string;
}
export declare function findObject<T extends Named>(list: T[], name: string, key: string): T | null;
export {};