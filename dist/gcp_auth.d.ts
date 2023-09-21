/// <reference types="node" />
import https = require('https');
import { Authenticator } from './auth';
import { User } from './config_types';
export declare class GoogleCloudPlatformAuth implements Authenticator {
    isAuthProvider(user: User): boolean;
    applyAuthentication(user: User, opts: https.RequestOptions): Promise<void>;
    private getToken;
    private isExpired;
    private updateAccessToken;
}