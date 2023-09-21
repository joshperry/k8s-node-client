"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.AddOptionsToSearchParams = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const url_1 = require("url");
const api_1 = require("./api");
const util_1 = require("./util");
function AddOptionsToSearchParams(options, searchParams) {
    var _a, _b, _c, _d, _e, _f;
    if (!options) {
        return;
    }
    searchParams.append('follow', ((_a = options === null || options === void 0 ? void 0 : options.follow) === null || _a === void 0 ? void 0 : _a.toString()) || 'false');
    if (options === null || options === void 0 ? void 0 : options.limitBytes) {
        searchParams.set('limitBytes', options.limitBytes.toString());
    }
    searchParams.set('pretty', ((_b = options === null || options === void 0 ? void 0 : options.follow) === null || _b === void 0 ? void 0 : _b.toString()) || 'false');
    searchParams.set('previous', ((_c = options === null || options === void 0 ? void 0 : options.previous) === null || _c === void 0 ? void 0 : _c.toString()) || 'false');
    if (options === null || options === void 0 ? void 0 : options.sinceSeconds) {
        searchParams.set('sinceSeconds', ((_d = options === null || options === void 0 ? void 0 : options.sinceSeconds) === null || _d === void 0 ? void 0 : _d.toString()) || 'false');
    }
    if (options === null || options === void 0 ? void 0 : options.tailLines) {
        searchParams.set('tailLines', ((_e = options === null || options === void 0 ? void 0 : options.tailLines) === null || _e === void 0 ? void 0 : _e.toString()) || 'false');
    }
    searchParams.set('timestamps', ((_f = options === null || options === void 0 ? void 0 : options.timestamps) === null || _f === void 0 ? void 0 : _f.toString()) || 'false');
    return searchParams;
}
exports.AddOptionsToSearchParams = AddOptionsToSearchParams;
class Log {
    constructor(config) {
        this.config = config;
    }
    async log(namespace, podName, containerName, stream, doneOrOptions, options) {
        if (typeof doneOrOptions !== 'function') {
            options = doneOrOptions;
        }
        const path = `/api/v1/namespaces/${namespace}/pods/${podName}/log`;
        const cluster = this.config.getCurrentCluster();
        if (!cluster) {
            throw new Error('No currently active cluster');
        }
        const requestURL = new url_1.URL(cluster.server + path);
        const searchParams = requestURL.searchParams;
        searchParams.set('container', containerName);
        AddOptionsToSearchParams(options, searchParams);
        const requestInit = await this.config.applyToFetchOptions({});
        const controller = new AbortController();
        requestInit.signal = controller.signal;
        requestInit.method = 'GET';
        await (0, node_fetch_1.default)(requestURL.toString(), requestInit)
            .then((response) => {
            const status = response.status;
            if (status === 200) {
                // TODO: the follow search param still has the stream close prematurely based on my testing
                response.body.pipe(stream);
            }
            else if (status === 500) {
                const v1status = response.body;
                const v1code = v1status.code;
                const v1message = v1status.message;
                if (v1code !== undefined && v1message !== undefined) {
                    throw new api_1.ApiException(v1code, v1message, v1status, (0, util_1.normalizeResponseHeaders)(response));
                }
            }
            else {
                throw new api_1.ApiException(status, 'Error occurred in log request', undefined, (0, util_1.normalizeResponseHeaders)(response));
            }
        })
            .catch((err) => {
            throw new api_1.ApiException(err, 'Error occurred in log request', undefined, err);
        });
        return controller;
    }
}
exports.Log = Log;
//# sourceMappingURL=log.js.map