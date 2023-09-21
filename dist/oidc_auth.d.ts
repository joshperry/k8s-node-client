/// <reference types="node" />
import https from 'https';
import { Authenticator } from './auth';
import { User } from './config_types';
interface JwtObj {
    header: any;
    payload: any;
    signature: string;
}
export declare class OpenIDConnectAuth implements Authenticator {
    static decodeJWT(token: string): JwtObj | null;
    static expirationFromToken(token: string): number;
    private currentTokenExpiration;
    isAuthProvider(user: User): boolean;
    /**
     * Setup the authentication header for oidc authed clients
     * @param user user info
     * @param opts request options
     * @param overrideClient for testing, a preconfigured oidc client
     */
    applyAuthentication(user: User, opts: https.RequestOptions, overrideClient?: any): Promise<void>;
    private getToken;
    private refresh;
    private getClient;
}
export {};
