import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { V1APIResourceList } from '../models/V1APIResourceList';
import { V1ControllerRevision } from '../models/V1ControllerRevision';
import { V1ControllerRevisionList } from '../models/V1ControllerRevisionList';
import { V1DaemonSet } from '../models/V1DaemonSet';
import { V1DaemonSetList } from '../models/V1DaemonSetList';
import { V1DeleteOptions } from '../models/V1DeleteOptions';
import { V1Deployment } from '../models/V1Deployment';
import { V1DeploymentList } from '../models/V1DeploymentList';
import { V1ReplicaSet } from '../models/V1ReplicaSet';
import { V1ReplicaSetList } from '../models/V1ReplicaSetList';
import { V1Scale } from '../models/V1Scale';
import { V1StatefulSet } from '../models/V1StatefulSet';
import { V1StatefulSetList } from '../models/V1StatefulSetList';
import { V1Status } from '../models/V1Status';
/**
 * no description
 */
export declare class AppsV1ApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * create a ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    createNamespacedControllerRevision(namespace: string, body: V1ControllerRevision, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * create a DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    createNamespacedDaemonSet(namespace: string, body: V1DaemonSet, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * create a Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    createNamespacedDeployment(namespace: string, body: V1Deployment, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * create a ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    createNamespacedReplicaSet(namespace: string, body: V1ReplicaSet, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * create a StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    createNamespacedStatefulSet(namespace: string, body: V1StatefulSet, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * delete collection of ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body
     */
    deleteCollectionNamespacedControllerRevision(namespace: string, pretty?: string, _continue?: string, dryRun?: string, fieldSelector?: string, gracePeriodSeconds?: number, labelSelector?: string, limit?: number, orphanDependents?: boolean, propagationPolicy?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * delete collection of DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body
     */
    deleteCollectionNamespacedDaemonSet(namespace: string, pretty?: string, _continue?: string, dryRun?: string, fieldSelector?: string, gracePeriodSeconds?: number, labelSelector?: string, limit?: number, orphanDependents?: boolean, propagationPolicy?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * delete collection of Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body
     */
    deleteCollectionNamespacedDeployment(namespace: string, pretty?: string, _continue?: string, dryRun?: string, fieldSelector?: string, gracePeriodSeconds?: number, labelSelector?: string, limit?: number, orphanDependents?: boolean, propagationPolicy?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * delete collection of ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body
     */
    deleteCollectionNamespacedReplicaSet(namespace: string, pretty?: string, _continue?: string, dryRun?: string, fieldSelector?: string, gracePeriodSeconds?: number, labelSelector?: string, limit?: number, orphanDependents?: boolean, propagationPolicy?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * delete collection of StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param body
     */
    deleteCollectionNamespacedStatefulSet(namespace: string, pretty?: string, _continue?: string, dryRun?: string, fieldSelector?: string, gracePeriodSeconds?: number, labelSelector?: string, limit?: number, orphanDependents?: boolean, propagationPolicy?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * delete a ControllerRevision
     * @param name name of the ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body
     */
    deleteNamespacedControllerRevision(name: string, namespace: string, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * delete a DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body
     */
    deleteNamespacedDaemonSet(name: string, namespace: string, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * delete a Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body
     */
    deleteNamespacedDeployment(name: string, namespace: string, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * delete a ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body
     */
    deleteNamespacedReplicaSet(name: string, namespace: string, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * delete a StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param body
     */
    deleteNamespacedStatefulSet(name: string, namespace: string, pretty?: string, dryRun?: string, gracePeriodSeconds?: number, orphanDependents?: boolean, propagationPolicy?: string, body?: V1DeleteOptions, _options?: Configuration): Promise<RequestContext>;
    /**
     * get available resources
     */
    getAPIResources(_options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch objects of kind ControllerRevision
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listControllerRevisionForAllNamespaces(allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, pretty?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch objects of kind DaemonSet
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listDaemonSetForAllNamespaces(allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, pretty?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch objects of kind Deployment
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listDeploymentForAllNamespaces(allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, pretty?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch objects of kind ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedControllerRevision(namespace: string, pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch objects of kind DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedDaemonSet(namespace: string, pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch objects of kind Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedDeployment(namespace: string, pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch objects of kind ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedReplicaSet(namespace: string, pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch objects of kind StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listNamespacedStatefulSet(namespace: string, pretty?: string, allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch objects of kind ReplicaSet
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listReplicaSetForAllNamespaces(allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, pretty?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * list or watch objects of kind StatefulSet
     * @param allowWatchBookmarks allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
     * @param _continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param resourceVersion resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param resourceVersionMatch resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset
     * @param timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     */
    listStatefulSetForAllNamespaces(allowWatchBookmarks?: boolean, _continue?: string, fieldSelector?: string, labelSelector?: string, limit?: number, pretty?: string, resourceVersion?: string, resourceVersionMatch?: string, timeoutSeconds?: number, watch?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update the specified ControllerRevision
     * @param name name of the ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedControllerRevision(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedDaemonSet(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update status of the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedDaemonSetStatus(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedDeployment(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update scale of the specified Deployment
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedDeploymentScale(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update status of the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedDeploymentStatus(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedReplicaSet(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update scale of the specified ReplicaSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedReplicaSetScale(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update status of the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedReplicaSetStatus(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedStatefulSet(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update scale of the specified StatefulSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedStatefulSetScale(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * partially update status of the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     */
    patchNamespacedStatefulSetStatus(name: string, namespace: string, body: any, pretty?: string, dryRun?: string, fieldManager?: string, force?: boolean, _options?: Configuration): Promise<RequestContext>;
    /**
     * read the specified ControllerRevision
     * @param name name of the ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedControllerRevision(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedDaemonSet(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read status of the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedDaemonSetStatus(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedDeployment(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read scale of the specified Deployment
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedDeploymentScale(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read status of the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedDeploymentStatus(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedReplicaSet(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read scale of the specified ReplicaSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedReplicaSetScale(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read status of the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedReplicaSetStatus(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedStatefulSet(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read scale of the specified StatefulSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedStatefulSetScale(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * read status of the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    readNamespacedStatefulSetStatus(name: string, namespace: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace the specified ControllerRevision
     * @param name name of the ControllerRevision
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedControllerRevision(name: string, namespace: string, body: V1ControllerRevision, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedDaemonSet(name: string, namespace: string, body: V1DaemonSet, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace status of the specified DaemonSet
     * @param name name of the DaemonSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedDaemonSetStatus(name: string, namespace: string, body: V1DaemonSet, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedDeployment(name: string, namespace: string, body: V1Deployment, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace scale of the specified Deployment
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedDeploymentScale(name: string, namespace: string, body: V1Scale, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace status of the specified Deployment
     * @param name name of the Deployment
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedDeploymentStatus(name: string, namespace: string, body: V1Deployment, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedReplicaSet(name: string, namespace: string, body: V1ReplicaSet, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace scale of the specified ReplicaSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedReplicaSetScale(name: string, namespace: string, body: V1Scale, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace status of the specified ReplicaSet
     * @param name name of the ReplicaSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedReplicaSetStatus(name: string, namespace: string, body: V1ReplicaSet, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedStatefulSet(name: string, namespace: string, body: V1StatefulSet, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace scale of the specified StatefulSet
     * @param name name of the Scale
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedStatefulSetScale(name: string, namespace: string, body: V1Scale, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * replace status of the specified StatefulSet
     * @param name name of the StatefulSet
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     */
    replaceNamespacedStatefulSetStatus(name: string, namespace: string, body: V1StatefulSet, pretty?: string, dryRun?: string, fieldManager?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class AppsV1ApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedControllerRevisionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ControllerRevision>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedDaemonSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DaemonSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedDeploymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Deployment>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedStatefulSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1StatefulSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedControllerRevisionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedDaemonSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedDeploymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCollectionNamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCollectionNamespacedStatefulSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedControllerRevisionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedDaemonSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedDeploymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Status>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteNamespacedStatefulSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Status>>;
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
     * @params response Response returned by the server for a request to listControllerRevisionForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listControllerRevisionForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ControllerRevisionList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDaemonSetForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDaemonSetForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DaemonSetList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDeploymentForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDeploymentForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DeploymentList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedControllerRevisionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ControllerRevisionList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedDaemonSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DaemonSetList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedDeploymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DeploymentList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ReplicaSetList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    listNamespacedStatefulSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1StatefulSetList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listReplicaSetForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listReplicaSetForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ReplicaSetList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listStatefulSetForAllNamespaces
     * @throws ApiException if the response code was not in [200, 299]
     */
    listStatefulSetForAllNamespacesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1StatefulSetList>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedControllerRevisionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ControllerRevision>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedDaemonSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DaemonSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedDaemonSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedDaemonSetStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DaemonSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedDeploymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Deployment>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedDeploymentScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedDeploymentScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Scale>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedDeploymentStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedDeploymentStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Deployment>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedReplicaSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedReplicaSetScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Scale>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedReplicaSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedReplicaSetStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedStatefulSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1StatefulSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedStatefulSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedStatefulSetScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Scale>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchNamespacedStatefulSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    patchNamespacedStatefulSetStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1StatefulSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedControllerRevisionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ControllerRevision>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedDaemonSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DaemonSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedDaemonSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedDaemonSetStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DaemonSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedDeploymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Deployment>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedDeploymentScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedDeploymentScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Scale>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedDeploymentStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedDeploymentStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Deployment>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedReplicaSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedReplicaSetScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Scale>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedReplicaSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedReplicaSetStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedStatefulSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1StatefulSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedStatefulSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedStatefulSetScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Scale>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to readNamespacedStatefulSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    readNamespacedStatefulSetStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1StatefulSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedControllerRevision
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedControllerRevisionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ControllerRevision>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedDaemonSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedDaemonSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DaemonSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedDaemonSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedDaemonSetStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1DaemonSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedDeployment
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedDeploymentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Deployment>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedDeploymentScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedDeploymentScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Scale>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedDeploymentStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedDeploymentStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Deployment>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedReplicaSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedReplicaSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedReplicaSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedReplicaSetScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Scale>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedReplicaSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedReplicaSetStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1ReplicaSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedStatefulSet
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedStatefulSetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1StatefulSet>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedStatefulSetScale
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedStatefulSetScaleWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Scale>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replaceNamespacedStatefulSetStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
    replaceNamespacedStatefulSetStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1StatefulSet>>;
}
