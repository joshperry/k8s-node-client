import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext, HttpInfo } from '../http/http';
import { V1APIResourceList } from '../models/V1APIResourceList';
import { V1TokenReview } from '../models/V1TokenReview';
/**
 * no description
 */
export declare class AuthenticationV1ApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * create a TokenReview
     * @param body
     * @param dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param pretty If \&#39;true\&#39;, then the output is pretty printed.
     */
    createTokenReview(body: V1TokenReview, dryRun?: string, fieldManager?: string, pretty?: string, _options?: Configuration): Promise<RequestContext>;
    /**
     * get available resources
     */
    getAPIResources(_options?: Configuration): Promise<RequestContext>;
}
export declare class AuthenticationV1ApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTokenReview
     * @throws ApiException if the response code was not in [200, 299]
     */
    createTokenReviewWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1TokenReview>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIResources
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIResourcesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1APIResourceList>>;
}
