"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findObject = exports.findHomeDir = exports.bufferFromFileOrString = exports.makeAbsolutePath = exports.KubeConfig = void 0;
const fs = require("fs");
const https = require("https");
const yaml = require("js-yaml");
const net = require("net");
const path = require("path");
const node_fetch_1 = require("node-fetch");
const azure_auth_1 = require("./azure_auth");
const config_types_1 = require("./config_types");
const exec_auth_1 = require("./exec_auth");
const file_auth_1 = require("./file_auth");
const gcp_auth_1 = require("./gcp_auth");
const gen_1 = require("./gen");
const oidc_auth_1 = require("./oidc_auth");
const child_process = require("child_process");
const SERVICEACCOUNT_ROOT = '/var/run/secrets/kubernetes.io/serviceaccount';
const SERVICEACCOUNT_CA_PATH = SERVICEACCOUNT_ROOT + '/ca.crt';
const SERVICEACCOUNT_TOKEN_PATH = SERVICEACCOUNT_ROOT + '/token';
const SERVICEACCOUNT_NAMESPACE_PATH = SERVICEACCOUNT_ROOT + '/namespace';
// fs.existsSync was removed in node 10
function fileExists(filepath) {
    try {
        fs.accessSync(filepath);
        return true;
    }
    catch (ignore) {
        return false;
    }
}
class KubeConfig {
    constructor() {
        this.contexts = [];
        this.clusters = [];
        this.users = [];
    }
    getContexts() {
        return this.contexts;
    }
    getClusters() {
        return this.clusters;
    }
    getUsers() {
        return this.users;
    }
    getCurrentContext() {
        return this.currentContext;
    }
    setCurrentContext(context) {
        this.currentContext = context;
    }
    getContextObject(name) {
        if (!this.contexts) {
            return null;
        }
        return findObject(this.contexts, name, 'context');
    }
    getCurrentCluster() {
        const context = this.getCurrentContextObject();
        if (!context) {
            return null;
        }
        return this.getCluster(context.cluster);
    }
    getCluster(name) {
        return findObject(this.clusters, name, 'cluster');
    }
    getCurrentUser() {
        const ctx = this.getCurrentContextObject();
        if (!ctx) {
            return null;
        }
        return this.getUser(ctx.user);
    }
    getUser(name) {
        return findObject(this.users, name, 'user');
    }
    loadFromFile(file, opts) {
        const rootDirectory = path.dirname(file);
        this.loadFromString(fs.readFileSync(file).toString('utf-8'), opts);
        this.makePathsAbsolute(rootDirectory);
    }
    async applyToFetchOptions(opts) {
        await this.applyToHTTPSOptions(opts);
        const headers = new node_fetch_1.Headers();
        for (const [key, val] of Object.entries(opts.headers || {})) {
            if (Array.isArray(val)) {
                val.forEach((innerVal) => {
                    headers.append(key, innerVal);
                });
            }
            else if (typeof val === 'number' || typeof val === 'string') {
                headers.set(key, val.toString());
            }
        }
        if (opts.auth) {
            headers.set('Authorization', 'Basic ' + Buffer.from(opts.auth).toString('base64'));
        }
        return {
            agent: opts.agent,
            headers,
            method: opts.method,
            timeout: opts.timeout,
        };
    }
    async applyToHTTPSOptions(opts) {
        const user = this.getCurrentUser();
        await this.applyOptions(opts);
        if (user && user.username) {
            // The ws docs say that it accepts anything that https.RequestOptions accepts,
            // but Typescript doesn't understand that idea (yet) probably could be fixed in
            // the typings, but for now just cast to any
            opts.auth = `${user.username}:${user.password}`;
        }
        const agentOptions = {};
        // Copy AgentOptions from RequestOptions
        agentOptions.ca = opts.ca;
        agentOptions.cert = opts.cert;
        agentOptions.key = opts.key;
        agentOptions.pfx = opts.pfx;
        agentOptions.passphrase = opts.passphrase;
        agentOptions.rejectUnauthorized = opts.rejectUnauthorized;
        // The ws docs say that it accepts anything that https.RequestOptions accepts,
        // but Typescript doesn't understand that idea (yet) probably could be fixed in
        // the typings, but for now just cast to any
        agentOptions.timeout = opts.timeout;
        agentOptions.servername = opts.servername;
        agentOptions.ciphers = opts.ciphers;
        agentOptions.honorCipherOrder = opts.honorCipherOrder;
        agentOptions.ecdhCurve = opts.ecdhCurve;
        agentOptions.clientCertEngine = opts.clientCertEngine;
        agentOptions.crl = opts.crl;
        agentOptions.dhparam = opts.dhparam;
        agentOptions.secureOptions = opts.secureOptions;
        agentOptions.secureProtocol = opts.secureProtocol;
        agentOptions.sessionIdContext = opts.sessionIdContext;
        opts.agent = new https.Agent(agentOptions);
    }
    /**
     * Applies SecurityAuthentication to RequestContext of an API Call from API Client
     * @param context
     */
    async applySecurityAuthentication(context) {
        const cluster = this.getCurrentCluster();
        const user = this.getCurrentUser();
        const agentOptions = {};
        const httpsOptions = {};
        await this.applyOptions(httpsOptions);
        if (cluster && cluster.skipTLSVerify) {
            agentOptions.rejectUnauthorized = false;
        }
        if (user && user.username) {
            const auth = Buffer.from(`${user.username}:${user.password}`).toString('base64');
            context.setHeaderParam('Authorization', `Basic ${auth}`);
        }
        // Copy headers from httpsOptions to RequestContext
        const headers = httpsOptions.headers || {};
        Object.entries(headers).forEach(([key, value]) => {
            context.setHeaderParam(key, `${value}`);
        });
        // Copy AgentOptions from RequestOptions
        agentOptions.ca = httpsOptions.ca;
        agentOptions.cert = httpsOptions.cert;
        agentOptions.key = httpsOptions.key;
        agentOptions.pfx = httpsOptions.pfx;
        agentOptions.passphrase = httpsOptions.passphrase;
        agentOptions.rejectUnauthorized = httpsOptions.rejectUnauthorized;
        context.setAgent(new https.Agent(agentOptions));
    }
    /**
     * Returns name of this security authentication method
     * @returns string
     */
    getName() {
        return 'kubeconfig authentication';
    }
    loadFromString(config, opts) {
        const obj = yaml.load(config);
        this.clusters = (0, config_types_1.newClusters)(obj.clusters, opts);
        this.contexts = (0, config_types_1.newContexts)(obj.contexts, opts);
        this.users = (0, config_types_1.newUsers)(obj.users, opts);
        this.currentContext = obj['current-context'];
    }
    loadFromOptions(options) {
        this.clusters = options.clusters;
        this.contexts = options.contexts;
        this.users = options.users;
        this.currentContext = options.currentContext;
    }
    loadFromClusterAndUser(cluster, user) {
        this.clusters = [cluster];
        this.users = [user];
        this.currentContext = 'loaded-context';
        this.contexts = [
            {
                cluster: cluster.name,
                user: user.name,
                name: this.currentContext,
            },
        ];
    }
    loadFromCluster(pathPrefix = '') {
        const host = process.env.KUBERNETES_SERVICE_HOST;
        const port = process.env.KUBERNETES_SERVICE_PORT;
        const clusterName = 'inCluster';
        const userName = 'inClusterUser';
        const contextName = 'inClusterContext';
        let scheme = 'https';
        if (port === '80' || port === '8080' || port === '8001') {
            scheme = 'http';
        }
        // Wrap raw IPv6 addresses in brackets.
        let serverHost = host;
        if (host && net.isIPv6(host)) {
            serverHost = `[${host}]`;
        }
        this.clusters = [
            {
                name: clusterName,
                caFile: `${pathPrefix}${SERVICEACCOUNT_CA_PATH}`,
                server: `${scheme}://${serverHost}:${port}`,
                skipTLSVerify: false,
            },
        ];
        this.users = [
            {
                name: userName,
                authProvider: {
                    name: 'tokenFile',
                    config: {
                        tokenFile: `${pathPrefix}${SERVICEACCOUNT_TOKEN_PATH}`,
                    },
                },
            },
        ];
        const namespaceFile = `${pathPrefix}${SERVICEACCOUNT_NAMESPACE_PATH}`;
        let namespace;
        if (fileExists(namespaceFile)) {
            namespace = fs.readFileSync(namespaceFile).toString('utf-8');
        }
        this.contexts = [
            {
                cluster: clusterName,
                name: contextName,
                user: userName,
                namespace,
            },
        ];
        this.currentContext = contextName;
    }
    mergeConfig(config, preserveContext = false) {
        if (!preserveContext) {
            this.currentContext = config.currentContext;
        }
        config.clusters.forEach((cluster) => {
            this.addCluster(cluster);
        });
        config.users.forEach((user) => {
            this.addUser(user);
        });
        config.contexts.forEach((ctx) => {
            this.addContext(ctx);
        });
    }
    addCluster(cluster) {
        if (!this.clusters) {
            this.clusters = [];
        }
        this.clusters.forEach((c, ix) => {
            if (c.name === cluster.name) {
                throw new Error(`Duplicate cluster: ${c.name}`);
            }
        });
        this.clusters.push(cluster);
    }
    addUser(user) {
        if (!this.users) {
            this.users = [];
        }
        this.users.forEach((c, ix) => {
            if (c.name === user.name) {
                throw new Error(`Duplicate user: ${c.name}`);
            }
        });
        this.users.push(user);
    }
    addContext(ctx) {
        if (!this.contexts) {
            this.contexts = [];
        }
        this.contexts.forEach((c, ix) => {
            if (c.name === ctx.name) {
                throw new Error(`Duplicate context: ${c.name}`);
            }
        });
        this.contexts.push(ctx);
    }
    loadFromDefault(opts, contextFromStartingConfig = false) {
        if (process.env.KUBECONFIG && process.env.KUBECONFIG.length > 0) {
            const files = process.env.KUBECONFIG.split(path.delimiter).filter((filename) => filename);
            this.loadFromFile(files[0], opts);
            for (let i = 1; i < files.length; i++) {
                const kc = new KubeConfig();
                kc.loadFromFile(files[i], opts);
                this.mergeConfig(kc, contextFromStartingConfig);
            }
            return;
        }
        const home = findHomeDir();
        if (home) {
            const config = path.join(home, '.kube', 'config');
            if (fileExists(config)) {
                this.loadFromFile(config, opts);
                return;
            }
        }
        if (process.platform === 'win32') {
            try {
                const envKubeconfigPathResult = child_process.spawnSync('wsl.exe', [
                    'bash',
                    '-c',
                    'printenv KUBECONFIG',
                ]);
                if (envKubeconfigPathResult.status === 0 && envKubeconfigPathResult.stdout.length > 0) {
                    const result = child_process.spawnSync('wsl.exe', [
                        'cat',
                        envKubeconfigPathResult.stdout.toString('utf8'),
                    ]);
                    if (result.status === 0) {
                        this.loadFromString(result.stdout.toString('utf8'), opts);
                        return;
                    }
                }
            }
            catch (err) {
                // Falling back to default kubeconfig
            }
            try {
                const configResult = child_process.spawnSync('wsl.exe', ['cat', '~/.kube/config']);
                if (configResult.status === 0) {
                    this.loadFromString(configResult.stdout.toString('utf8'), opts);
                    const result = child_process.spawnSync('wsl.exe', ['wslpath', '-w', '~/.kube']);
                    if (result.status === 0) {
                        this.makePathsAbsolute(result.stdout.toString('utf8'));
                    }
                    return;
                }
            }
            catch (err) {
                // Falling back to alternative auth
            }
        }
        if (fileExists(SERVICEACCOUNT_TOKEN_PATH)) {
            this.loadFromCluster();
            return;
        }
        this.loadFromClusterAndUser({ name: 'cluster', server: 'http://localhost:8080' }, { name: 'user' });
    }
    makeApiClient(apiClientType) {
        const cluster = this.getCurrentCluster();
        if (!cluster) {
            throw new Error('No active cluster!');
        }
        const authConfig = {
            default: this,
        };
        const baseServerConfig = new gen_1.ServerConfiguration(cluster.server, {});
        const config = (0, gen_1.createConfiguration)({
            baseServer: baseServerConfig,
            authMethods: authConfig,
        });
        const apiClient = new apiClientType(config);
        return apiClient;
    }
    makePathsAbsolute(rootDirectory) {
        this.clusters.forEach((cluster) => {
            if (cluster.caFile) {
                cluster.caFile = makeAbsolutePath(rootDirectory, cluster.caFile);
            }
        });
        this.users.forEach((user) => {
            if (user.certFile) {
                user.certFile = makeAbsolutePath(rootDirectory, user.certFile);
            }
            if (user.keyFile) {
                user.keyFile = makeAbsolutePath(rootDirectory, user.keyFile);
            }
        });
    }
    exportConfig() {
        const configObj = {
            apiVersion: 'v1',
            kind: 'Config',
            clusters: this.clusters.map(config_types_1.exportCluster),
            users: this.users.map(config_types_1.exportUser),
            contexts: this.contexts.map(config_types_1.exportContext),
            preferences: {},
            'current-context': this.getCurrentContext(),
        };
        return JSON.stringify(configObj);
    }
    getCurrentContextObject() {
        return this.getContextObject(this.currentContext);
    }
    applyHTTPSOptions(opts) {
        const cluster = this.getCurrentCluster();
        const user = this.getCurrentUser();
        if (!user) {
            return;
        }
        if (cluster != null && cluster.skipTLSVerify) {
            opts.rejectUnauthorized = false;
        }
        const ca = cluster != null ? bufferFromFileOrString(cluster.caFile, cluster.caData) : null;
        if (ca) {
            opts.ca = ca;
        }
        const cert = bufferFromFileOrString(user.certFile, user.certData);
        if (cert) {
            opts.cert = cert;
        }
        const key = bufferFromFileOrString(user.keyFile, user.keyData);
        if (key) {
            opts.key = key;
        }
    }
    async applyAuthorizationHeader(opts) {
        const user = this.getCurrentUser();
        if (!user) {
            return;
        }
        const authenticator = KubeConfig.authenticators.find((elt) => {
            return elt.isAuthProvider(user);
        });
        if (!opts.headers) {
            opts.headers = {};
        }
        if (authenticator) {
            await authenticator.applyAuthentication(user, opts);
        }
        if (user.token) {
            opts.headers.Authorization = `Bearer ${user.token}`;
        }
    }
    async applyOptions(opts) {
        this.applyHTTPSOptions(opts);
        await this.applyAuthorizationHeader(opts);
    }
}
exports.KubeConfig = KubeConfig;
KubeConfig.authenticators = [
    new azure_auth_1.AzureAuth(),
    new gcp_auth_1.GoogleCloudPlatformAuth(),
    new exec_auth_1.ExecAuth(),
    new file_auth_1.FileAuth(),
    new oidc_auth_1.OpenIDConnectAuth(),
];
function makeAbsolutePath(root, file) {
    if (!root || path.isAbsolute(file)) {
        return file;
    }
    return path.join(root, file);
}
exports.makeAbsolutePath = makeAbsolutePath;
// This is public really only for testing.
function bufferFromFileOrString(file, data) {
    if (file) {
        return fs.readFileSync(file);
    }
    if (data) {
        return Buffer.from(data, 'base64');
    }
    return null;
}
exports.bufferFromFileOrString = bufferFromFileOrString;
function dropDuplicatesAndNils(a) {
    return a.reduce((acceptedValues, currentValue) => {
        // Good-enough algorithm for reducing a small (3 items at this point) array into an ordered list
        // of unique non-empty strings.
        if (currentValue && !acceptedValues.includes(currentValue)) {
            return acceptedValues.concat(currentValue);
        }
        else {
            return acceptedValues;
        }
    }, []);
}
// Only public for testing.
function findHomeDir() {
    if (process.platform !== 'win32') {
        if (process.env.HOME) {
            try {
                fs.accessSync(process.env.HOME);
                return process.env.HOME;
                // tslint:disable-next-line:no-empty
            }
            catch (ignore) { }
        }
        return null;
    }
    // $HOME is always favoured, but the k8s go-client prefers the other two env vars
    // differently depending on whether .kube/config exists or not.
    const homeDrivePath = process.env.HOMEDRIVE && process.env.HOMEPATH
        ? path.join(process.env.HOMEDRIVE, process.env.HOMEPATH)
        : '';
    const homePath = process.env.HOME || '';
    const userProfile = process.env.USERPROFILE || '';
    const favourHomeDrivePathList = dropDuplicatesAndNils([homePath, homeDrivePath, userProfile]);
    const favourUserProfileList = dropDuplicatesAndNils([homePath, userProfile, homeDrivePath]);
    // 1. the first of %HOME%, %HOMEDRIVE%%HOMEPATH%, %USERPROFILE% containing a `.kube\config` file is returned.
    for (const dir of favourHomeDrivePathList) {
        try {
            fs.accessSync(path.join(dir, '.kube', 'config'));
            return dir;
            // tslint:disable-next-line:no-empty
        }
        catch (ignore) { }
    }
    // 2. ...the first of %HOME%, %USERPROFILE%, %HOMEDRIVE%%HOMEPATH% that exists and is writeable is returned
    for (const dir of favourUserProfileList) {
        try {
            fs.accessSync(dir, fs.constants.W_OK);
            return dir;
            // tslint:disable-next-line:no-empty
        }
        catch (ignore) { }
    }
    // 3. ...the first of %HOME%, %USERPROFILE%, %HOMEDRIVE%%HOMEPATH% that exists is returned.
    for (const dir of favourUserProfileList) {
        try {
            fs.accessSync(dir);
            return dir;
            // tslint:disable-next-line:no-empty
        }
        catch (ignore) { }
    }
    // 4. if none of those locations exists, the first of
    // %HOME%, %USERPROFILE%, %HOMEDRIVE%%HOMEPATH% that is set is returned.
    return favourUserProfileList[0] || null;
}
exports.findHomeDir = findHomeDir;
// Only really public for testing...
function findObject(list, name, key) {
    if (!list) {
        return null;
    }
    for (const obj of list) {
        if (obj.name === name) {
            if (obj[key]) {
                obj[key].name = name;
                return obj[key];
            }
            return obj;
        }
    }
    return null;
}
exports.findObject = findObject;
//# sourceMappingURL=config.js.map