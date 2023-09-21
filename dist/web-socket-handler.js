"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketHandler = void 0;
const WebSocket = require("isomorphic-ws");
const protocols = ['v4.channel.k8s.io', 'v3.channel.k8s.io', 'v2.channel.k8s.io', 'channel.k8s.io'];
class WebSocketHandler {
    static handleStandardStreams(streamNum, buff, stdout, stderr) {
        if (buff.length < 1) {
            return null;
        }
        if (stdout && streamNum === WebSocketHandler.StdoutStream) {
            stdout.write(buff);
        }
        else if (stderr && streamNum === WebSocketHandler.StderrStream) {
            stderr.write(buff);
        }
        else if (streamNum === WebSocketHandler.StatusStream) {
            // stream closing.
            if (stdout && stdout !== process.stdout) {
                stdout.end();
            }
            if (stderr && stderr !== process.stderr) {
                stderr.end();
            }
            return JSON.parse(buff.toString('utf8'));
        }
        else {
            throw new Error('Unknown stream: ' + streamNum);
        }
        return null;
    }
    static handleStandardInput(ws, stdin, streamNum = 0) {
        stdin.on('data', (data) => {
            const buff = Buffer.alloc(data.length + 1);
            buff.writeInt8(streamNum, 0);
            if (data instanceof Buffer) {
                data.copy(buff, 1);
            }
            else {
                buff.write(data, 1);
            }
            ws.send(buff);
        });
        stdin.on('end', () => {
            ws.close();
        });
        // Keep the stream open
        return true;
    }
    static async processData(data, ws, createWS, streamNum = 0, retryCount = 3) {
        const buff = Buffer.alloc(data.length + 1);
        buff.writeInt8(streamNum, 0);
        if (data instanceof Buffer) {
            data.copy(buff, 1);
        }
        else {
            buff.write(data, 1);
        }
        let i = 0;
        for (; i < retryCount; ++i) {
            if (ws !== null && ws.readyState === WebSocket.OPEN) {
                ws.send(buff);
                break;
            }
            else {
                ws = await createWS();
            }
        }
        // This throw doesn't go anywhere.
        // TODO: Figure out the right way to return an error.
        if (i >= retryCount) {
            throw new Error("can't send data to ws");
        }
        return ws;
    }
    static restartableHandleStandardInput(createWS, stdin, streamNum = 0, retryCount = 3) {
        if (retryCount < 0) {
            throw new Error("retryCount can't be lower than 0.");
        }
        let queue = Promise.resolve();
        let ws = null;
        stdin.on('data', (data) => {
            queue = queue.then(async () => {
                ws = await WebSocketHandler.processData(data, ws, createWS, streamNum, retryCount);
            });
        });
        stdin.on('end', () => {
            if (ws) {
                ws.close();
            }
        });
        return () => ws;
    }
    // factory is really just for test injection
    constructor(config, socketFactory) {
        this.config = config;
        this.socketFactory = socketFactory;
    }
    /**
     * Connect to a web socket endpoint.
     * @param path The HTTP Path to connect to on the server.
     * @param textHandler Callback for text over the web socket.
     *      Returns true if the connection should be kept alive, false to disconnect.
     * @param binaryHandler Callback for binary data over the web socket.
     *      Returns true if the connection should be kept alive, false to disconnect.
     */
    async connect(path, textHandler, binaryHandler) {
        const cluster = this.config.getCurrentCluster();
        if (!cluster) {
            throw new Error('No cluster is defined.');
        }
        const server = cluster.server;
        const ssl = server.startsWith('https://');
        const target = ssl ? server.substr(8) : server.substr(7);
        const proto = ssl ? 'wss' : 'ws';
        const uri = `${proto}://${target}${path}`;
        const opts = {};
        await this.config.applyToHTTPSOptions(opts);
        return await new Promise((resolve, reject) => {
            const client = this.socketFactory
                ? this.socketFactory(uri, opts)
                : new WebSocket(uri, protocols, opts);
            let resolved = false;
            client.onopen = () => {
                resolved = true;
                resolve(client);
            };
            client.onerror = (err) => {
                if (!resolved) {
                    reject(err);
                }
            };
            client.onmessage = ({ data }) => {
                // TODO: support ArrayBuffer and Buffer[] data types?
                if (typeof data === 'string') {
                    if (textHandler && !textHandler(data)) {
                        client.close();
                    }
                }
                else if (data instanceof Buffer) {
                    const streamNum = data.readInt8(0);
                    if (binaryHandler && !binaryHandler(streamNum, data.slice(1))) {
                        client.close();
                    }
                }
            };
        });
    }
}
exports.WebSocketHandler = WebSocketHandler;
WebSocketHandler.StdinStream = 0;
WebSocketHandler.StdoutStream = 1;
WebSocketHandler.StderrStream = 2;
WebSocketHandler.StatusStream = 3;
WebSocketHandler.ResizeStream = 4;
//# sourceMappingURL=web-socket-handler.js.map