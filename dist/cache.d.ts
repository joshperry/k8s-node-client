import { ErrorCallback, Informer, ListPromise, ObjectCallback } from './informer';
import { KubernetesObject } from './types';
import { Watch } from './watch';
export interface ObjectCache<T> {
    get(name: string, namespace?: string): T | undefined;
    list(namespace?: string): ReadonlyArray<T>;
}
export declare class ListWatch<T extends KubernetesObject> implements ObjectCache<T>, Informer<T> {
    private readonly path;
    private readonly watch;
    private readonly listFn;
    private readonly labelSelector?;
    private objects;
    private resourceVersion;
    private readonly indexCache;
    private readonly callbackCache;
    private request;
    private stopped;
    constructor(path: string, watch: Watch, listFn: ListPromise<T>, autoStart?: boolean, labelSelector?: string | undefined);
    start(): Promise<void>;
    stop(): Promise<void>;
    on(verb: 'add' | 'update' | 'delete' | 'change', cb: ObjectCallback<T>): void;
    on(verb: 'error' | 'connect', cb: ErrorCallback): void;
    off(verb: 'add' | 'update' | 'delete' | 'change', cb: ObjectCallback<T>): void;
    off(verb: 'error' | 'connect', cb: ErrorCallback): void;
    get(name: string, namespace?: string): T | undefined;
    list(namespace?: string | undefined): ReadonlyArray<T>;
    latestResourceVersion(): string;
    private _stop;
    private doneHandler;
    private addOrUpdateItems;
    private indexObj;
    private watchHandler;
}
export declare function deleteItems<T extends KubernetesObject>(oldObjects: T[], newObjects: T[], deleteCallback?: ObjectCallback<T>[]): T[];
export declare function addOrUpdateObject<T extends KubernetesObject>(objects: T[], obj: T, addCallback?: ObjectCallback<T>[], updateCallback?: ObjectCallback<T>[]): void;
export declare function deleteObject<T extends KubernetesObject>(objects: T[], obj: T, deleteCallback?: ObjectCallback<T>[]): void;