"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KubernetesObjectApi = void 0;
const api_1 = require("./api");
const util_1 = require("./util");
const rxjsStub_1 = require("./gen/rxjsStub");
const patch_1 = require("./patch");
/**
 * Dynamically construct Kubernetes API request URIs so client does not have to know what type of object it is acting
 * on.
 */
class KubernetesObjectApi {
    /**
     * Create a KubernetesObjectApi object from the provided KubeConfig.  This method should be used rather than
     * [[KubeConfig.makeApiClient]] so we can properly determine the default namespace if one is provided by the current
     * context.
     *
     * @param kc Valid Kubernetes config
     * @return Properly instantiated [[KubernetesObjectApi]] object
     */
    static makeApiClient(kc) {
        const client = kc.makeApiClient(KubernetesObjectApi);
        client.setDefaultNamespace(kc);
        return client;
    }
    constructor(configuration) {
        this.configuration = configuration;
        /** Initialize the default namespace.  May be overwritten by context. */
        this.defaultNamespace = 'default';
        /** Cache resource API response. */
        this.apiVersionResourceCache = {};
    }
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
    async create(spec, pretty, dryRun, fieldManager, options) {
        const _config = options || this.configuration;
        // verify required parameter 'spec' is not null or undefined
        if (spec === null || spec === undefined) {
            throw new Error('Required parameter spec was null or undefined when calling create.');
        }
        const localVarPath = await this.specUriPath(spec, 'create');
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, api_1.HttpMethod.POST);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
        if (pretty !== undefined) {
            requestContext.setQueryParam('pretty', util_1.ObjectSerializer.serialize(pretty, 'string'));
        }
        if (dryRun !== undefined) {
            requestContext.setQueryParam('dryRun', util_1.ObjectSerializer.serialize(dryRun, 'string'));
        }
        if (fieldManager !== undefined) {
            requestContext.setQueryParam('fieldManager', util_1.ObjectSerializer.serialize(fieldManager, 'string'));
        }
        // Body Params
        const contentType = util_1.ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = util_1.ObjectSerializer.stringify(util_1.ObjectSerializer.serialize(spec, 'any'), contentType);
        requestContext.setBody(serializedBody);
        return this.requestPromise(requestContext);
    }
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
    async delete(spec, pretty, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy, body, options) {
        const _config = options || this.configuration;
        // verify required parameter 'spec' is not null or undefined
        if (spec === null || spec === undefined) {
            throw new Error('Required parameter spec was null or undefined when calling delete.');
        }
        const localVarPath = await this.specUriPath(spec, 'delete');
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, api_1.HttpMethod.DELETE);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
        if (pretty !== undefined) {
            requestContext.setQueryParam('pretty', util_1.ObjectSerializer.serialize(pretty, 'string'));
        }
        if (dryRun !== undefined) {
            requestContext.setQueryParam('dryRun', util_1.ObjectSerializer.serialize(dryRun, 'string'));
        }
        if (gracePeriodSeconds !== undefined) {
            requestContext.setQueryParam('gracePeriodSeconds', util_1.ObjectSerializer.serialize(gracePeriodSeconds, 'number'));
        }
        if (orphanDependents !== undefined) {
            requestContext.setQueryParam('orphanDependents', util_1.ObjectSerializer.serialize(orphanDependents, 'boolean'));
        }
        if (propagationPolicy !== undefined) {
            requestContext.setQueryParam('propagationPolicy', util_1.ObjectSerializer.serialize(propagationPolicy, 'string'));
        }
        // Body Params
        if (body) {
            const contentType = util_1.ObjectSerializer.getPreferredMediaType([]);
            requestContext.setHeaderParam('Content-Type', contentType);
            const serializedBody = util_1.ObjectSerializer.stringify(util_1.ObjectSerializer.serialize(body, 'V1DeleteOptions'), contentType);
            requestContext.setBody(serializedBody);
        }
        return this.requestPromise(requestContext, 'V1Status');
    }
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
    async patch(spec, pretty, dryRun, fieldManager, force, patchStrategy = patch_1.PatchStrategy.StrategicMergePatch, options) {
        const _config = options || this.configuration;
        // verify required parameter 'spec' is not null or undefined
        if (spec === null || spec === undefined) {
            throw new Error('Required parameter spec was null or undefined when calling patch.');
        }
        const localVarPath = await this.specUriPath(spec, 'patch');
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, api_1.HttpMethod.PATCH);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
        requestContext.setHeaderParam('Content-Type', patchStrategy);
        if (pretty !== undefined) {
            requestContext.setQueryParam('pretty', util_1.ObjectSerializer.serialize(pretty, 'string'));
        }
        if (dryRun !== undefined) {
            requestContext.setQueryParam('dryRun', util_1.ObjectSerializer.serialize(dryRun, 'string'));
        }
        if (fieldManager !== undefined) {
            requestContext.setQueryParam('fieldManager', util_1.ObjectSerializer.serialize(fieldManager, 'string'));
        }
        if (force !== undefined) {
            requestContext.setQueryParam('force', util_1.ObjectSerializer.serialize(force, 'boolean'));
        }
        // Body Params
        const serializedBody = util_1.ObjectSerializer.stringify(util_1.ObjectSerializer.serialize(spec, 'any'), 
        // TODO: use the patch content type once ObjectSerializer supports it.
        'application/json');
        requestContext.setBody(serializedBody);
        return this.requestPromise(requestContext);
    }
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
    async read(spec, pretty, exact, exportt, options) {
        const _config = options || this.configuration;
        // verify required parameter 'spec' is not null or undefined
        if (spec === null || spec === undefined) {
            throw new Error('Required parameter spec was null or undefined when calling read.');
        }
        // verify required parameter 'kind' is not null or undefined
        if (spec.kind === null || spec.kind === undefined) {
            throw new Error('Required parameter spec.kind was null or undefined when calling read.');
        }
        if (!spec.apiVersion) {
            throw new Error('Required parameter spec.apiVersion was null or undefined when calling read.');
        }
        const localVarPath = await this.specUriPath(spec, 'read');
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, api_1.HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
        if (pretty !== undefined) {
            requestContext.setQueryParam('pretty', util_1.ObjectSerializer.serialize(pretty, 'string'));
        }
        if (exact !== undefined) {
            requestContext.setQueryParam('exact', util_1.ObjectSerializer.serialize(exact, 'boolean'));
        }
        if (exportt !== undefined) {
            requestContext.setQueryParam('export', util_1.ObjectSerializer.serialize(exportt, 'boolean'));
        }
        return this.requestPromise(requestContext);
    }
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
    async list(apiVersion, kind, namespace, pretty, exact, exportt, fieldSelector, labelSelector, limit, continueToken, options) {
        const _config = options || this.configuration;
        // verify required parameters 'apiVersion', 'kind' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling list.');
        }
        if (kind === null || kind === undefined) {
            throw new Error('Required parameter kind was null or undefined when calling list.');
        }
        const localVarPath = await this.specUriPath({
            apiVersion,
            kind,
            metadata: {
                namespace,
            },
        }, 'list');
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, api_1.HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
        if (pretty !== undefined) {
            requestContext.setQueryParam('pretty', util_1.ObjectSerializer.serialize(pretty, 'string'));
        }
        if (exact !== undefined) {
            requestContext.setQueryParam('exact', util_1.ObjectSerializer.serialize(exact, 'boolean'));
        }
        if (exportt !== undefined) {
            requestContext.setQueryParam('export', util_1.ObjectSerializer.serialize(exportt, 'boolean'));
        }
        if (fieldSelector !== undefined) {
            requestContext.setQueryParam('fieldSelector', util_1.ObjectSerializer.serialize(fieldSelector, 'string'));
        }
        if (labelSelector !== undefined) {
            requestContext.setQueryParam('labelSelector', util_1.ObjectSerializer.serialize(labelSelector, 'string'));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam('limit', util_1.ObjectSerializer.serialize(limit, 'number'));
        }
        if (continueToken !== undefined) {
            requestContext.setQueryParam('continue', util_1.ObjectSerializer.serialize(continueToken, 'string'));
        }
        return this.requestPromise(requestContext);
    }
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
    async replace(spec, pretty, dryRun, fieldManager, options) {
        const _config = options || this.configuration;
        // verify required parameter 'spec' is not null or undefined
        if (spec === null || spec === undefined) {
            throw new Error('Required parameter spec was null or undefined when calling replace.');
        }
        const localVarPath = await this.specUriPath(spec, 'replace');
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, api_1.HttpMethod.PUT);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
        if (pretty !== undefined) {
            requestContext.setQueryParam('pretty', util_1.ObjectSerializer.serialize(pretty, 'string'));
        }
        if (dryRun !== undefined) {
            requestContext.setQueryParam('dryRun', util_1.ObjectSerializer.serialize(dryRun, 'string'));
        }
        if (fieldManager !== undefined) {
            requestContext.setQueryParam('fieldManager', util_1.ObjectSerializer.serialize(fieldManager, 'string'));
        }
        // Body Params
        const contentType = util_1.ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam('Content-Type', contentType);
        const serializedBody = util_1.ObjectSerializer.stringify(util_1.ObjectSerializer.serialize(spec, 'any'), contentType);
        requestContext.setBody(serializedBody);
        return this.requestPromise(requestContext);
    }
    /** Set default namespace from current context, if available. */
    setDefaultNamespace(kc) {
        if (kc.currentContext) {
            const currentContext = kc.getContextObject(kc.currentContext);
            if (currentContext && currentContext.namespace) {
                this.defaultNamespace = currentContext.namespace;
            }
        }
        return this.defaultNamespace;
    }
    /**
     * Use spec information to construct resource URI path.  If any required information in not provided, an Error is
     * thrown.  If an `apiVersion` is not provided, 'v1' is used.  If a `metadata.namespace` is not provided for a
     * request that requires one, the context default is used, if available, if not, 'default' is used.
     *
     * @param spec Kubernetes resource spec which must define kind and apiVersion properties.
     * @param action API action, see [[K8sApiAction]].
     * @return tail of resource-specific URIDeploym
     */
    async specUriPath(spec, action) {
        if (!spec.kind) {
            throw new Error('Required spec property kind is not set');
        }
        if (!spec.apiVersion) {
            spec.apiVersion = 'v1';
        }
        if (!spec.metadata) {
            spec.metadata = {};
        }
        const resource = await this.resource(spec.apiVersion, spec.kind);
        if (!resource) {
            throw new Error(`Unrecognized API version and kind: ${spec.apiVersion} ${spec.kind}`);
        }
        if (resource.namespaced && !spec.metadata.namespace && action !== 'list') {
            spec.metadata.namespace = this.defaultNamespace;
        }
        const parts = [this.apiVersionPath(spec.apiVersion)];
        if (resource.namespaced && spec.metadata.namespace) {
            parts.push('namespaces', encodeURIComponent(String(spec.metadata.namespace)));
        }
        parts.push(resource.name);
        if (action !== 'create' && action !== 'list') {
            if (!spec.metadata.name) {
                throw new Error('Required spec property name is not set');
            }
            parts.push(encodeURIComponent(String(spec.metadata.name)));
        }
        return parts.join('/').toLowerCase();
    }
    /** Return root of API path up to API version. */
    apiVersionPath(apiVersion) {
        const api = apiVersion.includes('/') ? 'apis' : 'api';
        return '/' + [api, apiVersion].join('/');
    }
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
    async resource(apiVersion, kind, options) {
        const _config = options || this.configuration;
        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling resource');
        }
        // verify required parameter 'kind' is not null or undefined
        if (kind === null || kind === undefined) {
            throw new Error('Required parameter kind was null or undefined when calling resource');
        }
        if (this.apiVersionResourceCache[apiVersion]) {
            const resource = this.apiVersionResourceCache[apiVersion].resources.find((r) => r.kind === kind);
            if (resource) {
                return resource;
            }
        }
        const localVarPath = this.apiVersionPath(apiVersion);
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, api_1.HttpMethod.GET);
        requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
        try {
            const getApiResponse = await this.requestPromise(requestContext, 'V1APIResourceList');
            this.apiVersionResourceCache[apiVersion] = getApiResponse;
            return this.apiVersionResourceCache[apiVersion].resources.find((r) => r.kind === kind);
        }
        catch (e) {
            if (e instanceof Error) {
                e.message = `Failed to fetch resource metadata for ${apiVersion}/${kind}: ${e.message}`;
            }
            throw e;
        }
    }
    async getSerializationType(apiVersion, kind) {
        if (apiVersion === undefined || kind === undefined) {
            return 'KubernetesObject';
        }
        // Types are defined in src/gen/api/models with the format "<Version><Kind>".
        // Version and Kind are in PascalCase.
        const gv = this.groupVersion(apiVersion);
        const version = gv.version.charAt(0).toUpperCase() + gv.version.slice(1);
        return `${version}${kind}`;
    }
    groupVersion(apiVersion) {
        const v = apiVersion.split('/');
        return v.length === 1
            ? {
                group: 'core',
                version: apiVersion,
            }
            : {
                group: v[0],
                version: v[1],
            };
    }
    async requestPromise(requestContext, type, options) {
        var _a, _b, _c;
        const _config = options || this.configuration;
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods.BearerToken;
        if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
            await (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext));
        }
        const defaultAuth = ((_a = options === null || options === void 0 ? void 0 : options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
        if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
            await (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
        }
        // build promise chain
        let middlewarePreObservable = (0, rxjsStub_1.from)(Promise.resolve(requestContext));
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_1.mergeMap)((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable
            .pipe((0, rxjsStub_1.mergeMap)((ctx) => this.configuration.httpApi.send(ctx)))
            .pipe((0, rxjsStub_1.mergeMap)((response) => {
            let middlewarePostObservable = (0, rxjsStub_1.of)(response);
            for (const middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_1.mergeMap)((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe((rsp) => this.processResponse(rsp, type));
        }))
            .toPromise();
    }
    async processResponse(response, type) {
        const contentType = util_1.ObjectSerializer.normalizeMediaType(response.headers['content-type']);
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const data = util_1.ObjectSerializer.parse(await response.body.text(), contentType);
            if (type === undefined) {
                type = await this.getSerializationType(data.apiVersion, data.kind);
            }
            if (!type) {
                throw new Error('Unable to determine type of Kubernetes type of response.');
            }
            return util_1.ObjectSerializer.deserialize(data, type);
        }
        throw new api_1.ApiException(response.httpStatusCode, 'Unsuccessful HTTP Request', await response.getBodyAsAny(), response.headers);
    }
}
exports.KubernetesObjectApi = KubernetesObjectApi;
//# sourceMappingURL=object.js.map