import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { V1APIResourceList } from '../models/V1APIResourceList';
import { V1DeleteOptions } from '../models/V1DeleteOptions';
/**
 * no description
 */
export declare class CustomObjectsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Creates a cluster scoped Custom object
     * @param group The custom resource\&#39;s group name
     * @param version The custom resource\&#39;s version
     * @param plural The custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param body The JSON schema of the Resource to create.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     */
    createClusterCustomObject(group: string, version: string, plural: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Creates a namespace scoped Custom object
     * @param group The custom resource\&#39;s group name
     * @param version The custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural The custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param body The JSON schema of the Resource to create.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    createNamespacedCustomObject(group: string, version: string, namespace: string, plural: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Deletes the specified cluster scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param plural the custom object\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param body
     */
    deleteClusterCustomObject(group: string, version: string, plural: string, name: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, dryRun?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete collection of cluster scoped custom objects
     * @param group The custom resource\&#39;s group name
     * @param version The custom resource\&#39;s version
     * @param plural The custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param body
     */
    deleteCollectionClusterCustomObject(group: string, version: string, plural: string, pretty?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, dryRun?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Delete collection of namespace scoped custom objects
     * @param group The custom resource\&#39;s group name
     * @param version The custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural The custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param body
     */
    deleteCollectionNamespacedCustomObject(group: string, version: string, namespace: string, plural: string, pretty?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, dryRun?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * Deletes the specified namespace scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param body
     */
    deleteNamespacedCustomObject(group: string, version: string, namespace: string, plural: string, name: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, dryRun?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * get available resources
     * @param group The custom resource\&#39;s group name
     * @param version The custom resource\&#39;s version
     */
    getAPIResources(group: string, version: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Returns a cluster scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param plural the custom object\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     */
    getClusterCustomObject(group: string, version: string, plural: string, name: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read scale of the specified custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     */
    getClusterCustomObjectScale(group: string, version: string, plural: string, name: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read status of the specified cluster scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     */
    getClusterCustomObjectStatus(group: string, version: string, plural: string, name: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * Returns a namespace scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     */
    getNamespacedCustomObject(group: string, version: string, namespace: string, plural: string, name: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read scale of the specified namespace scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     */
    getNamespacedCustomObjectScale(group: string, version: string, namespace: string, plural: string, name: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read status of the specified namespace scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     */
    getNamespacedCustomObjectStatus(group: string, version: string, namespace: string, plural: string, name: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch cluster scoped custom objects
     * @param group The custom resource\&#39;s group name
     * @param version The custom resource\&#39;s version
     * @param plural The custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it\&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications.
     */
    listClusterCustomObject(group: string, version: string, plural: string, pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch namespace scoped custom objects
     * @param group The custom resource\&#39;s group name
     * @param version The custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural The custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. If the feature gate WatchBookmarks is not enabled in apiserver, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it\&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications.
     */
    listNamespacedCustomObject(group: string, version: string, namespace: string, plural: string, pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * patch the specified cluster scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param plural the custom object\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body The JSON schema of the Resource to patch.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchClusterCustomObject(group: string, version: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update scale of the specified cluster scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchClusterCustomObjectScale(group: string, version: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update status of the specified cluster scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchClusterCustomObjectStatus(group: string, version: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * patch the specified namespace scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body The JSON schema of the Resource to patch.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedCustomObject(group: string, version: string, namespace: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update scale of the specified namespace scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedCustomObjectScale(group: string, version: string, namespace: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update status of the specified namespace scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedCustomObjectStatus(group: string, version: string, namespace: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace the specified cluster scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param plural the custom object\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body The JSON schema of the Resource to replace.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceClusterCustomObject(group: string, version: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace scale of the specified cluster scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceClusterCustomObjectScale(group: string, version: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace status of the cluster scoped specified custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceClusterCustomObjectStatus(group: string, version: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace the specified namespace scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body The JSON schema of the Resource to replace.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedCustomObject(group: string, version: string, namespace: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace scale of the specified namespace scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedCustomObjectScale(group: string, version: string, namespace: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace status of the specified namespace scoped custom object
     * @param group the custom resource\&#39;s group
     * @param version the custom resource\&#39;s version
     * @param namespace The custom resource\&#39;s namespace
     * @param plural the custom resource\&#39;s plural name. For TPRs this would be lowercase plural kind.
     * @param name the custom object\&#39;s name
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedCustomObjectStatus(group: string, version: string, namespace: string, plural: string, name: string, body: any, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomObjectsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createClusterCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    createClusterCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteClusterCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteClusterCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionClusterCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionClusterCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResources
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1APIResourceList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getClusterCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    getClusterCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getClusterCustomObjectScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    getClusterCustomObjectScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getClusterCustomObjectStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    getClusterCustomObjectStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNamespacedCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    getNamespacedCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNamespacedCustomObjectScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    getNamespacedCustomObjectScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNamespacedCustomObjectStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    getNamespacedCustomObjectStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listClusterCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    listClusterCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchClusterCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchClusterCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchClusterCustomObjectScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchClusterCustomObjectScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchClusterCustomObjectStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchClusterCustomObjectStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedCustomObjectScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedCustomObjectScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedCustomObjectStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedCustomObjectStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceClusterCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceClusterCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceClusterCustomObjectScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceClusterCustomObjectScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceClusterCustomObjectStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceClusterCustomObjectStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedCustomObject
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedCustomObjectWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedCustomObjectScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedCustomObjectScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedCustomObjectStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedCustomObjectStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any>>;
}
