"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoClient = void 0;
const http = require("http");
const url = require("url");
class ProtoClient {
    async get(msgType, requestPath) {
        const server = this.config.getCurrentCluster().server;
        const u = new url.URL(server);
        const options = {
            path: requestPath,
            hostname: u.hostname,
            protocol: u.protocol,
        };
        await this.config.applyToHTTPSOptions(options);
        const req = http.request(options);
        const result = await new Promise((resolve, reject) => {
            let data = '';
            req.on('data', (chunk) => {
                data = data + chunk;
            });
            req.on('end', () => {
                const obj = msgType.deserializeBinary(data);
                resolve(obj);
            });
            req.on('error', (err) => {
                reject(err);
            });
        });
        req.end();
        return result;
    }
}
exports.ProtoClient = ProtoClient;
//# sourceMappingURL=proto-client.js.map