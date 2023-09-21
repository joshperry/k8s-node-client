import { Configuration, RequestContext, ResponseContext, V1APIResource, V1APIResourceList, V1DeleteOptions, V1Status } from './api';
import { KubeConfig } from './config';
import { KubernetesListObject, KubernetesObject } from './types';
import { PatchStrategy } from './patch';
/** Kubernetes API verbs. */
type KubernetesApiAction = 'create' | 'delete' | 'patch' | 'read' | 'list' | 'replace';
interface GroupVersion {
    group: string;
    version: string;
}
/**
 * Dynamically construct Kubernetes API request URIs so client does not have to know what type of object it is acting
 * on.
 */
export declare class KubernetesObjectApi {
    protected configuration: Configuration;
    /**
     * Create a KubernetesObjectApi object from the provided KubeConfig.  This method should be used rather than
     * [[KubeConfig.makeApiClient]] so we can properly determine the default namespace if one is provided by the current
     * context.
     *
     * @param kc Valid Kubernetes config
     * @return Properly instantiated [[KubernetesObjectApi]] object
     */
    static makeApiClient(kc: KubeConfig): KubernetesObjectApi;
    /** Initialize the default namespace.  May be overwritten by context. */
    protected defaultNamespace: string;
    /** Cache resource API response. */
    protected apiVersionResourceCache: Record<string, V1APIResourceList>;
    constructor(configuration: Configuration);
    /**
     * Create any Kubernetes resource.
     * @param spec Kubernetes resource spec.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized
     *        dryRun directive will result in an error response and no further processing of the request. Valid values
     *        are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The
     *        value must be less than or 128 characters long, and only contain printable characters, as defined by
     *        https://golang.org/pkg/unicode/#IsPrint.
     * @param options Optional headers to use in the request.
     * @return Promise containing the request response and [[KubernetesObject]].
     */
    create<T extends KubernetesObject | KubernetesObject>(spec: T, pretty?: string, dryRun?: string, fieldManager?: string, options?: Configuration): Promise<T>;
    /**
     * Delete any Kubernetes resource.
     * @param spec Kubernetes resource spec
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized
     *        dryRun directive will result in an error response and no further processing of the request. Valid values
     *        are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative
     *        integer. The value zero indicates delete immediately. If this value is nil, the default grace period for
     *        the specified type will be used. Defaults to a per object value if not specified. zero means delete
     *        immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in
     *        1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be
     *        added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be
     *        set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or
     *        OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in
     *        the metadata.finalizers and the resource-specific default policy. Acceptable values are:
     *        \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete
     *        the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents
     *        in the foreground.
     * @param body See [[V1DeleteOptions]].
     * @param options Optional headers to use in the request.
     * @return Promise containing the request response and a Kubernetes [[V1Status]].
     */
    delete(spec: KubernetesObject, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: V1DeleteOptions, options?: Configuration): Promise<V1Status>;
    /**
     * Patch any Kubernetes resource.
     * @param spec Kubernetes resource spec
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized
     *        dryRun directive will result in an error response and no further processing of the request. Valid values
     *        are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes.  The
     *        value must be less than or 128 characters long, and only contain printable characters, as defined by
     *        https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests
     *        (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch,
     *        StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests.  It means user will re-acquire conflicting
     *        fields owned by other people. Force flag must be unset for non-apply patch requests.
     * @param patchStrategy Content-Type header used to control how the patch will be performed. See
     *        See https://kubernetes.io/docs/tasks/run-application/update-api-object-kubectl-patch/
     *        for details.
     * @param options Optional headers to use in the request.
     * @return Promise containing the request response and [[KubernetesObject]].
     */
    patch<T extends KubernetesObject | KubernetesObject>(spec: T, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, patchStrategy?: PatchStrategy, options?: Configuration): Promise<T>;
    /**
     * Read any Kubernetes resource.
     * @param spec Kubernetes resource spec
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param exact Should the export be exact.  Exact export maintains cluster-specific fields like
     *        \&#39;Namespace\&#39;. Deprecated. Planned for removal in 1.18.
     * @param exportt Should this value be exported.  Export strips fields that a user can not
     *        specify. Deprecated. Planned for removal in 1.18.
     * @param options Optional headers to use in the request.
     * @return Promise containing the request response and [[KubernetesObject]].
     */
    read<T extends KubernetesObject | KubernetesObject>(spec: T, pretty?: string, exact?: boolean, exportt?: boolean, options?: Configuration): Promise<T>;
    /**
     * List any Kubernetes resources.
     * @param apiVersion api group and version of the form <apiGroup>/<version>
     * @param kind Kubernetes resource kind
     * @param namespace list resources in this namespace
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param exact Should the export be exact.  Exact export maintains cluster-specific fields like
     *        \&#39;Namespace\&#39;. Deprecated. Planned for removal in 1.18.
     * @param exportt Should this value be exported.  Export strips fields that a user can not
     *        specify. Deprecated. Planned for removal in 1.18.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit Number of returned resources.
     * @param options Optional headers to use in the request.
     * @return Promise containing the request response and [[KubernetesListObject<KubernetesObject>]].
     */
    list<T extends KubernetesObject | KubernetesObject>(apiVersion: string, kind: string, namespace?: string, pretty?: string, exact?: boolean, exportt?: boolean, fieldSelector?: string, labelSelector?: string, limit?: number, continueToken?: string, options?: Configuration): Promise<KubernetesListObject<T>>;
    /**
     * Replace any Kubernetes resource.
     * @param spec Kubernetes resource spec
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized
     *        dryRun directive will result in an error response and no further processing of the request. Valid values
     *        are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The
     *        value must be less than or 128 characters long, and only contain printable characters, as defined by
     *        https://golang.org/pkg/unicode/#IsPrint.
     * @param options Optional headers to use in the request.
     * @return Promise containing the request response and [[KubernetesObject]].
     */
    replace<T extends KubernetesObject | KubernetesObject>(spec: T, pretty?: string, dryRun?: string, fieldManager?: string, options?: Configuration): Promise<T>;
    /** Set default namespace from current context, if available. */
    protected setDefaultNamespace(kc: KubeConfig): string;
    /**
     * Use spec information to construct resource URI path.  If any required information in not provided, an Error is
     * thrown.  If an `apiVersion` is not provided, 'v1' is used.  If a `metadata.namespace` is not provided for a
     * request that requires one, the context default is used, if available, if not, 'default' is used.
     *
     * @param spec Kubernetes resource spec which must define kind and apiVersion properties.
     * @param action API action, see [[K8sApiAction]].
     * @return tail of resource-specific URIDeploym
     */
    protected specUriPath(spec: KubernetesObject, action: KubernetesApiAction): Promise<string>;
    /** Return root of API path up to API version. */
    protected apiVersionPath(apiVersion: string): string;
    /**
     * Get metadata from Kubernetes API for resources described by `kind` and `apiVersion`.  If it is unable to find the
     * resource `kind` under the provided `apiVersion`, `undefined` is returned.
     *
     * This method caches responses from the Kubernetes API to use for future requests.  If the cache for apiVersion
     * exists but the kind is not found the request is attempted again.
     *
     * @param apiVersion Kubernetes API version, e.g., 'v1' or 'apps/v1'.
     * @param kind Kubernetes resource kind, e.g., 'Pod' or 'Namespace'.
     * @return Promise of the resource metadata or `undefined` if the resource is not found.
     */
    protected resource(apiVersion: string, kind: string, options?: Configuration): Promise<V1APIResource | undefined>;
    protected getSerializationType(apiVersion?: string, kind?: string): Promise<string>;
    protected groupVersion(apiVersion: string): GroupVersion;
    protected requestPromise<T extends KubernetesObject | KubernetesObject>(requestContext: RequestContext, type?: string, options?: Configuration): Promise<T>;
    protected processResponse<T extends KubernetesObject | KubernetesObject>(response: ResponseContext, type?: string): Promise<T>;
}
export {};
