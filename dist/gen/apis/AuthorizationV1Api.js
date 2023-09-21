"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationV1ApiResponseProcessor = exports.AuthorizationV1ApiRequestFactory = void 0;
// TODO: better import syntax?
const baseapi_1 = require("./baseapi");
const http_1 = require("../http/http");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("./exception");
const util_1 = require("../util");
/**
 * no description
 */
class AuthorizationV1ApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    /**
     * create a LocalSubjectAccessReview
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    async createNamespacedLocalSubjectAccessReview(namespace, body, dryRun, fieldManager, pretty, _options) {
        var _a, _b, _c;
        let _config = _options || this.configuration;
        // verify required parameter 'namespace' is not null or undefined
        if (namespace === null || namespace === undefined) {
            throw new baseapi_1.RequiredError("AuthorizationV1Api", "createNamespacedLocalSubjectAccessReview", "namespace");
        }
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new baseapi_1.RequiredError("AuthorizationV1Api", "createNamespacedLocalSubjectAccessReview", "body");
        }
        // Path Params
        const localVarPath = '/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews'
            .replace('{' + 'namespace' + '}', encodeURIComponent(String(namespace)));
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer_1.ObjectSerializer.serialize(dryRun, "string", ""));
        }
        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer_1.ObjectSerializer.serialize(fieldManager, "string", ""));
        }
        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer_1.ObjectSerializer.serialize(pretty, "string", ""));
        }
        // Body Params
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "V1LocalSubjectAccessReview", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"];
        if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
            await (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext));
        }
        const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
        if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
            await (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
        }
        return requestContext;
    }
    /**
     * create a SelfSubjectAccessReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    async createSelfSubjectAccessReview(body, dryRun, fieldManager, pretty, _options) {
        var _a, _b, _c;
        let _config = _options || this.configuration;
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new baseapi_1.RequiredError("AuthorizationV1Api", "createSelfSubjectAccessReview", "body");
        }
        // Path Params
        const localVarPath = '/apis/authorization.k8s.io/v1/selfsubjectaccessreviews';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer_1.ObjectSerializer.serialize(dryRun, "string", ""));
        }
        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer_1.ObjectSerializer.serialize(fieldManager, "string", ""));
        }
        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer_1.ObjectSerializer.serialize(pretty, "string", ""));
        }
        // Body Params
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "V1SelfSubjectAccessReview", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"];
        if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
            await (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext));
        }
        const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
        if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
            await (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
        }
        return requestContext;
    }
    /**
     * create a SelfSubjectRulesReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    async createSelfSubjectRulesReview(body, dryRun, fieldManager, pretty, _options) {
        var _a, _b, _c;
        let _config = _options || this.configuration;
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new baseapi_1.RequiredError("AuthorizationV1Api", "createSelfSubjectRulesReview", "body");
        }
        // Path Params
        const localVarPath = '/apis/authorization.k8s.io/v1/selfsubjectrulesreviews';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer_1.ObjectSerializer.serialize(dryRun, "string", ""));
        }
        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer_1.ObjectSerializer.serialize(fieldManager, "string", ""));
        }
        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer_1.ObjectSerializer.serialize(pretty, "string", ""));
        }
        // Body Params
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "V1SelfSubjectRulesReview", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"];
        if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
            await (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext));
        }
        const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
        if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
            await (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
        }
        return requestContext;
    }
    /**
     * create a SubjectAccessReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    async createSubjectAccessReview(body, dryRun, fieldManager, pretty, _options) {
        var _a, _b, _c;
        let _config = _options || this.configuration;
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new baseapi_1.RequiredError("AuthorizationV1Api", "createSubjectAccessReview", "body");
        }
        // Path Params
        const localVarPath = '/apis/authorization.k8s.io/v1/subjectaccessreviews';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        // Query Params
        if (dryRun !== undefined) {
            requestContext.setQueryParam("dryRun", ObjectSerializer_1.ObjectSerializer.serialize(dryRun, "string", ""));
        }
        // Query Params
        if (fieldManager !== undefined) {
            requestContext.setQueryParam("fieldManager", ObjectSerializer_1.ObjectSerializer.serialize(fieldManager, "string", ""));
        }
        // Query Params
        if (pretty !== undefined) {
            requestContext.setQueryParam("pretty", ObjectSerializer_1.ObjectSerializer.serialize(pretty, "string", ""));
        }
        // Body Params
        const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "V1SubjectAccessReview", ""), contentType);
        requestContext.setBody(serializedBody);
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"];
        if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
            await (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext));
        }
        const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
        if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
            await (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
        }
        return requestContext;
    }
    /**
     * get available resources
     */
    async getAPIResources(_options) {
        var _a, _b, _c;
        let _config = _options || this.configuration;
        // Path Params
        const localVarPath = '/apis/authorization.k8s.io/v1/';
        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
        let authMethod;
        // Apply auth methods
        authMethod = _config.authMethods["BearerToken"];
        if (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication) {
            await (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext));
        }
        const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
        if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
            await (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
        }
        return requestContext;
    }
}
exports.AuthorizationV1ApiRequestFactory = AuthorizationV1ApiRequestFactory;
class AuthorizationV1ApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedLocalSubjectAccessReview
     * @throws ApiException if the response code was not in [200, 299]
     */
    async createNamespacedLocalSubjectAccessReviewWithHttpInfo(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1LocalSubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1LocalSubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1LocalSubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1LocalSubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSelfSubjectAccessReview
     * @throws ApiException if the response code was not in [200, 299]
     */
    async createSelfSubjectAccessReviewWithHttpInfo(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SelfSubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SelfSubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SelfSubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SelfSubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSelfSubjectRulesReview
     * @throws ApiException if the response code was not in [200, 299]
     */
    async createSelfSubjectRulesReviewWithHttpInfo(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SelfSubjectRulesReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SelfSubjectRulesReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SelfSubjectRulesReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SelfSubjectRulesReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSubjectAccessReview
     * @throws ApiException if the response code was not in [200, 299]
     */
    async createSubjectAccessReviewWithHttpInfo(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("201", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("202", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1SubjectAccessReview", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResources
     * @throws ApiException if the response code was not in [200, 299]
     */
    async getAPIResourcesWithHttpInfo(response) {
        const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if ((0, util_1.isCodeInRange)("200", response.httpStatusCode)) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1APIResourceList", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if ((0, util_1.isCodeInRange)("401", response.httpStatusCode)) {
            throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(await response.body.text(), contentType), "V1APIResourceList", "");
            return new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }
}
exports.AuthorizationV1ApiResponseProcessor = AuthorizationV1ApiResponseProcessor;
//# sourceMappingURL=AuthorizationV1Api.js.map