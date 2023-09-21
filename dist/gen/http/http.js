"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpInfo = exports.wrapHttpLibrary = exports.ResponseContext = exports.SelfDecodingBody = exports.RequestContext = exports.HttpException = exports.HttpMethod = void 0;
const tslib_1 = require("tslib");
const url_1 = require("url");
const rxjsStub_1 = require("../rxjsStub");
tslib_1.__exportStar(require("./isomorphic-fetch"), exports);
/**
 * Represents an HTTP method.
 */
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["CONNECT"] = "CONNECT";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
    HttpMethod["PATCH"] = "PATCH";
})(HttpMethod || (exports.HttpMethod = HttpMethod = {}));
class HttpException extends Error {
    constructor(msg) {
        super(msg);
    }
}
exports.HttpException = HttpException;
function ensureAbsoluteUrl(url) {
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    throw new Error("You need to define an absolute base url for the server.");
}
/**
 * Represents an HTTP request context
 */
class RequestContext {
    /**
     * Creates the request context using a http method and request resource url
     *
     * @param url url of the requested resource
     * @param httpMethod http method
     */
    constructor(url, httpMethod) {
        this.httpMethod = httpMethod;
        this.headers = {};
        this.body = undefined;
        this.agent = undefined;
        this.url = new url_1.URL(ensureAbsoluteUrl(url));
    }
    /*
     * Returns the url set in the constructor including the query string
     *
     */
    getUrl() {
        return this.url.toString().endsWith("/") ?
            this.url.toString().slice(0, -1)
            : this.url.toString();
    }
    /**
     * Replaces the url set in the constructor with this url.
     *
     */
    setUrl(url) {
        this.url = new url_1.URL(ensureAbsoluteUrl(url));
    }
    /**
     * Sets the body of the http request either as a string or FormData
     *
     * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
     * request is discouraged.
     * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
     *
     * @param body the body of the request
     */
    setBody(body) {
        this.body = body;
    }
    getHttpMethod() {
        return this.httpMethod;
    }
    getHeaders() {
        return this.headers;
    }
    getBody() {
        return this.body;
    }
    setQueryParam(name, value) {
        this.url.searchParams.set(name, value);
    }
    /**
     * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
     *
     */
    addCookie(name, value) {
        if (!this.headers["Cookie"]) {
            this.headers["Cookie"] = "";
        }
        this.headers["Cookie"] += name + "=" + value + "; ";
    }
    setHeaderParam(key, value) {
        this.headers[key] = value;
    }
    setAgent(agent) {
        this.agent = agent;
    }
    getAgent() {
        return this.agent;
    }
}
exports.RequestContext = RequestContext;
/**
 * Helper class to generate a `ResponseBody` from binary data
 */
class SelfDecodingBody {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    binary() {
        return this.dataSource;
    }
    async text() {
        const data = await this.dataSource;
        return data.toString();
    }
}
exports.SelfDecodingBody = SelfDecodingBody;
class ResponseContext {
    constructor(httpStatusCode, headers, body) {
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
    }
    /**
     * Parse header value in the form `value; param1="value1"`
     *
     * E.g. for Content-Type or Content-Disposition
     * Parameter names are converted to lower case
     * The first parameter is returned with the key `""`
     */
    getParsedHeader(headerName) {
        const result = {};
        if (!this.headers[headerName]) {
            return result;
        }
        const parameters = this.headers[headerName].split(";");
        for (const parameter of parameters) {
            let [key, value] = parameter.split("=", 2);
            key = key.toLowerCase().trim();
            if (value === undefined) {
                result[""] = key;
            }
            else {
                value = value.trim();
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.substring(1, value.length - 1);
                }
                result[key] = value;
            }
        }
        return result;
    }
    async getBodyAsFile() {
        const data = await this.body.binary();
        const fileName = this.getParsedHeader("content-disposition")["filename"] || "";
        return { data, name: fileName };
    }
    /**
     * Use a heuristic to get a body of unknown data structure.
     * Return as string if possible, otherwise as binary.
     */
    getBodyAsAny() {
        try {
            return this.body.text();
        }
        catch { }
        try {
            return this.body.binary();
        }
        catch { }
        return Promise.resolve(undefined);
    }
}
exports.ResponseContext = ResponseContext;
function wrapHttpLibrary(promiseHttpLibrary) {
    return {
        send(request) {
            return (0, rxjsStub_1.from)(promiseHttpLibrary.send(request));
        }
    };
}
exports.wrapHttpLibrary = wrapHttpLibrary;
class HttpInfo extends ResponseContext {
    constructor(httpStatusCode, headers, body, data) {
        super(httpStatusCode, headers, body);
        this.httpStatusCode = httpStatusCode;
        this.headers = headers;
        this.body = body;
        this.data = data;
    }
}
exports.HttpInfo = HttpInfo;
//# sourceMappingURL=http.js.map