import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { V1APIResourceList } from '../models/V1APIResourceList';
import { V1LocalSubjectAccessReview } from '../models/V1LocalSubjectAccessReview';
import { V1SelfSubjectAccessReview } from '../models/V1SelfSubjectAccessReview';
import { V1SelfSubjectRulesReview } from '../models/V1SelfSubjectRulesReview';
import { V1SubjectAccessReview } from '../models/V1SubjectAccessReview';
/**
 * no description
 */
export declare class AuthorizationV1ApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * create a LocalSubjectAccessReview
     * @param namespace object name and auth scope, such as for teams and projects
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    createNamespacedLocalSubjectAccessReview(namespace: string, body: V1LocalSubjectAccessReview, dryRun?: string, fieldManager?: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * create a SelfSubjectAccessReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    createSelfSubjectAccessReview(body: V1SelfSubjectAccessReview, dryRun?: string, fieldManager?: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * create a SelfSubjectRulesReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    createSelfSubjectRulesReview(body: V1SelfSubjectRulesReview, dryRun?: string, fieldManager?: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * create a SubjectAccessReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    createSubjectAccessReview(body: V1SubjectAccessReview, dryRun?: string, fieldManager?: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * get available resources
     */
    getAPIResources(_options?: Configuration): Promise<RequestContext>;
}
export declare class AuthorizationV1ApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNamespacedLocalSubjectAccessReview
     * @throws ApiException if the response code was not in [200, 299]
     */
    createNamespacedLocalSubjectAccessReviewWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1LocalSubjectAccessReview>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSelfSubjectAccessReview
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSelfSubjectAccessReviewWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1SelfSubjectAccessReview>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSelfSubjectRulesReview
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSelfSubjectRulesReviewWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1SelfSubjectRulesReview>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSubjectAccessReview
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSubjectAccessReviewWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1SubjectAccessReview>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResources
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1APIResourceList>>;
}
