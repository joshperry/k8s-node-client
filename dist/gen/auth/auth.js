"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureAuthMethods = exports.BearerTokenAuthentication = void 0;
/**
 * Applies apiKey authentication to the request context.
 */
class BearerTokenAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    getName() {
        return "BearerToken";
    }
    applySecurityAuthentication(context) {
        context.setHeaderParam("authorization", this.apiKey);
    }
}
exports.BearerTokenAuthentication = BearerTokenAuthentication;
/**
 * Creates the authentication methods from a swagger description.
 *
 */
function configureAuthMethods(config) {
    let authMethods = {};
    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"];
    if (config["BearerToken"]) {
        authMethods["BearerToken"] = new BearerTokenAuthentication(config["BearerToken"]);
    }
    return authMethods;
}
exports.configureAuthMethods = configureAuthMethods;
//# sourceMappingURL=auth.js.map