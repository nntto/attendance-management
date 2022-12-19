/* tslint:disable */
/* eslint-disable */
/**
 * attendance-management-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * コメントの識別ID
     * @type {number}
     * @memberof Comment
     */
    'id': number;
    /**
     * コメント主のユーザーID
     * @type {string}
     * @memberof Comment
     */
    'userId': string;
    /**
     * コメント本文
     * @type {string}
     * @memberof Comment
     */
    'comment': string;
    /**
     * 投稿日時
     * @type {string}
     * @memberof Comment
     */
    'createdAt': string;
}
/**
 * 
 * @export
 * @interface Device
 */
export interface Device {
    /**
     * デバイスを所持しているユーザーのID
     * @type {number}
     * @memberof Device
     */
    'userId'?: number;
    /**
     * デバイスの名前
     * @type {string}
     * @memberof Device
     */
    'name'?: string;
}
/**
 * 
 * @export
 * @interface Device1
 */
export interface Device1 {
    /**
     * デバイスの識別ID
     * @type {number}
     * @memberof Device1
     */
    'id': number;
    /**
     * デバイスを所持しているユーザーのID
     * @type {string}
     * @memberof Device1
     */
    'userId': string;
    /**
     * デバイスの名前
     * @type {string}
     * @memberof Device1
     */
    'name': string;
    /**
     * 接続先のネットワークのID
     * @type {number}
     * @memberof Device1
     */
    'networkId': number;
    /**
     * デバイスのmacaddress
     * @type {string}
     * @memberof Device1
     */
    'macAddress': string;
}
/**
 * 
 * @export
 * @interface InroomAndOutroomUsers
 */
export interface InroomAndOutroomUsers {
    /**
     * 
     * @type {Array<InroomAndOutroomUsersInRoomInner>}
     * @memberof InroomAndOutroomUsers
     */
    'inRoom': Array<InroomAndOutroomUsersInRoomInner>;
    /**
     * 
     * @type {Array<InroomAndOutroomUsersInRoomInnerAllOfUsersInner>}
     * @memberof InroomAndOutroomUsers
     */
    'outRoom': Array<InroomAndOutroomUsersInRoomInnerAllOfUsersInner>;
}
/**
 * 
 * @export
 * @interface InroomAndOutroomUsersInRoomInner
 */
export interface InroomAndOutroomUsersInRoomInner {
    /**
     * 部屋の識別ID
     * @type {number}
     * @memberof InroomAndOutroomUsersInRoomInner
     */
    'id': number;
    /**
     * 部屋の名前
     * @type {string}
     * @memberof InroomAndOutroomUsersInRoomInner
     */
    'name': string;
    /**
     * 
     * @type {Array<InroomAndOutroomUsersInRoomInnerAllOfUsersInner>}
     * @memberof InroomAndOutroomUsersInRoomInner
     */
    'users': Array<InroomAndOutroomUsersInRoomInnerAllOfUsersInner>;
}
/**
 * 
 * @export
 * @interface InroomAndOutroomUsersInRoomInnerAllOf
 */
export interface InroomAndOutroomUsersInRoomInnerAllOf {
    /**
     * 
     * @type {Array<InroomAndOutroomUsersInRoomInnerAllOfUsersInner>}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOf
     */
    'users': Array<InroomAndOutroomUsersInRoomInnerAllOfUsersInner>;
}
/**
 * 
 * @export
 * @interface InroomAndOutroomUsersInRoomInnerAllOfUsersInner
 */
export interface InroomAndOutroomUsersInRoomInnerAllOfUsersInner {
    /**
     * ユーザーの識別ID
     * @type {string}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOfUsersInner
     */
    'id': string;
    /**
     * ユーザーの名前
     * @type {string}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOfUsersInner
     */
    'name': string;
    /**
     * ユーザーの学年
     * @type {string}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOfUsersInner
     */
    'grade': InroomAndOutroomUsersInRoomInnerAllOfUsersInnerGradeEnum;
    /**
     * ユーザーのプロフィール画像
     * @type {string}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOfUsersInner
     */
    'iconUrl': string;
    /**
     * 
     * @type {Comment}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOfUsersInner
     */
    'comment'?: Comment;
    /**
     * 
     * @type {Nickname}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOfUsersInner
     */
    'nickname'?: Nickname;
    /**
     * 
     * @type {string}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOfUsersInner
     */
    'lastConnectedAt'?: string;
}

export const InroomAndOutroomUsersInRoomInnerAllOfUsersInnerGradeEnum = {
    B1: 'B1',
    B2: 'B2',
    B3: 'B3',
    B4: 'B4',
    M1: 'M1',
    M2: 'M2',
    D1: 'D1',
    D2: 'D2',
    D3: 'D3'
} as const;

export type InroomAndOutroomUsersInRoomInnerAllOfUsersInnerGradeEnum = typeof InroomAndOutroomUsersInRoomInnerAllOfUsersInnerGradeEnum[keyof typeof InroomAndOutroomUsersInRoomInnerAllOfUsersInnerGradeEnum];

/**
 * 
 * @export
 * @interface InroomAndOutroomUsersInRoomInnerAllOfUsersInnerAllOf
 */
export interface InroomAndOutroomUsersInRoomInnerAllOfUsersInnerAllOf {
    /**
     * 
     * @type {Comment}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOfUsersInnerAllOf
     */
    'comment'?: Comment;
}
/**
 * 
 * @export
 * @interface InroomAndOutroomUsersInRoomInnerAllOfUsersInnerAllOf1
 */
export interface InroomAndOutroomUsersInRoomInnerAllOfUsersInnerAllOf1 {
    /**
     * 
     * @type {Nickname}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOfUsersInnerAllOf1
     */
    'nickname'?: Nickname;
}
/**
 * 
 * @export
 * @interface InroomAndOutroomUsersInRoomInnerAllOfUsersInnerAllOf2
 */
export interface InroomAndOutroomUsersInRoomInnerAllOfUsersInnerAllOf2 {
    /**
     * 
     * @type {string}
     * @memberof InroomAndOutroomUsersInRoomInnerAllOfUsersInnerAllOf2
     */
    'lastConnectedAt'?: string;
}
/**
 * 
 * @export
 * @interface MacAddress
 */
export interface MacAddress {
    /**
     * MacAddressの識別ID
     * @type {number}
     * @memberof MacAddress
     */
    'id'?: number;
    /**
     * デバイスのmacaddress
     * @type {string}
     * @memberof MacAddress
     */
    'address': string;
    /**
     * 接続先のネットワークのID
     * @type {number}
     * @memberof MacAddress
     */
    'networkId': number;
    /**
     * デバイスの識別ID
     * @type {number}
     * @memberof MacAddress
     */
    'deviceId': number;
    /**
     * 最終接続日時
     * @type {string}
     * @memberof MacAddress
     */
    'lastConnectedAt': string;
}
/**
 * 
 * @export
 * @interface Network
 */
export interface Network {
    /**
     * ネットワークの識別ID
     * @type {number}
     * @memberof Network
     */
    'id': number;
    /**
     * ネットワークの置かれている部屋のID
     * @type {number}
     * @memberof Network
     */
    'roomId': number;
    /**
     * ネットワークの名前
     * @type {string}
     * @memberof Network
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface Nickname
 */
export interface Nickname {
    /**
     * ニックネームの識別ID
     * @type {number}
     * @memberof Nickname
     */
    'id': number;
    /**
     * ニックネームを付けたユーザーのID
     * @type {string}
     * @memberof Nickname
     */
    'fromId': string;
    /**
     * ニックネームの付けられたユーザーのID
     * @type {string}
     * @memberof Nickname
     */
    'toId': string;
    /**
     * ニックネーム
     * @type {string}
     * @memberof Nickname
     */
    'nickname': string;
}
/**
 * 
 * @export
 * @interface Room
 */
export interface Room {
    /**
     * 部屋の識別ID
     * @type {number}
     * @memberof Room
     */
    'id': number;
    /**
     * 部屋の名前
     * @type {string}
     * @memberof Room
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * ユーザーの識別ID
     * @type {string}
     * @memberof User
     */
    'id': string;
    /**
     * ユーザーの名前
     * @type {string}
     * @memberof User
     */
    'name': string;
    /**
     * ユーザーの学年
     * @type {string}
     * @memberof User
     */
    'grade': UserGradeEnum;
    /**
     * ユーザーのプロフィール画像
     * @type {string}
     * @memberof User
     */
    'iconUrl': string;
}

export const UserGradeEnum = {
    B1: 'B1',
    B2: 'B2',
    B3: 'B3',
    B4: 'B4',
    M1: 'M1',
    M2: 'M2',
    D1: 'D1',
    D2: 'D2',
    D3: 'D3'
} as const;

export type UserGradeEnum = typeof UserGradeEnum[keyof typeof UserGradeEnum];

/**
 * 
 * @export
 * @interface User1
 */
export interface User1 {
    /**
     * ユーザーの名前
     * @type {string}
     * @memberof User1
     */
    'name'?: string;
    /**
     * ユーザーの学年
     * @type {string}
     * @memberof User1
     */
    'grade'?: string;
    /**
     * ユーザーのプロフィール画像
     * @type {string}
     * @memberof User1
     */
    'iconUrl'?: string;
}
/**
 * 
 * @export
 * @interface UserDeviceInner
 */
export interface UserDeviceInner {
    /**
     * 部屋の識別ID
     * @type {number}
     * @memberof UserDeviceInner
     */
    'id': number;
    /**
     * 部屋の名前
     * @type {string}
     * @memberof UserDeviceInner
     */
    'name': string;
    /**
     * 
     * @type {Array<UserDeviceInnerAllOfDevicesInner>}
     * @memberof UserDeviceInner
     */
    'devices': Array<UserDeviceInnerAllOfDevicesInner>;
}
/**
 * 
 * @export
 * @interface UserDeviceInnerAllOf
 */
export interface UserDeviceInnerAllOf {
    /**
     * 
     * @type {Array<UserDeviceInnerAllOfDevicesInner>}
     * @memberof UserDeviceInnerAllOf
     */
    'devices': Array<UserDeviceInnerAllOfDevicesInner>;
}
/**
 * 
 * @export
 * @interface UserDeviceInnerAllOfDevicesInner
 */
export interface UserDeviceInnerAllOfDevicesInner {
    /**
     * デバイスの識別ID
     * @type {number}
     * @memberof UserDeviceInnerAllOfDevicesInner
     */
    'id': number;
    /**
     * デバイスを所持しているユーザーのID
     * @type {string}
     * @memberof UserDeviceInnerAllOfDevicesInner
     */
    'userId': string;
    /**
     * デバイスの名前
     * @type {string}
     * @memberof UserDeviceInnerAllOfDevicesInner
     */
    'name': string;
    /**
     * 接続先のネットワークのID
     * @type {number}
     * @memberof UserDeviceInnerAllOfDevicesInner
     */
    'networkId': number;
    /**
     * デバイスのmacaddress
     * @type {string}
     * @memberof UserDeviceInnerAllOfDevicesInner
     */
    'macAddress': string;
    /**
     * 
     * @type {Array<UserDeviceInnerAllOfDevicesInnerAllOfAddressesInner>}
     * @memberof UserDeviceInnerAllOfDevicesInner
     */
    'addresses'?: Array<UserDeviceInnerAllOfDevicesInnerAllOfAddressesInner>;
}
/**
 * 
 * @export
 * @interface UserDeviceInnerAllOfDevicesInnerAllOf
 */
export interface UserDeviceInnerAllOfDevicesInnerAllOf {
    /**
     * 
     * @type {Array<UserDeviceInnerAllOfDevicesInnerAllOfAddressesInner>}
     * @memberof UserDeviceInnerAllOfDevicesInnerAllOf
     */
    'addresses'?: Array<UserDeviceInnerAllOfDevicesInnerAllOfAddressesInner>;
}
/**
 * 
 * @export
 * @interface UserDeviceInnerAllOfDevicesInnerAllOfAddressesInner
 */
export interface UserDeviceInnerAllOfDevicesInnerAllOfAddressesInner {
    /**
     * 
     * @type {Network}
     * @memberof UserDeviceInnerAllOfDevicesInnerAllOfAddressesInner
     */
    'network'?: Network;
    /**
     * 
     * @type {MacAddress}
     * @memberof UserDeviceInnerAllOfDevicesInnerAllOfAddressesInner
     */
    'macAddress'?: MacAddress;
}
/**
 * 
 * @export
 * @interface UserDeviceInnerAllOfDevicesInnerAllOfAddressesInnerAllOf
 */
export interface UserDeviceInnerAllOfDevicesInnerAllOfAddressesInnerAllOf {
    /**
     * 
     * @type {Network}
     * @memberof UserDeviceInnerAllOfDevicesInnerAllOfAddressesInnerAllOf
     */
    'network'?: Network;
    /**
     * 
     * @type {MacAddress}
     * @memberof UserDeviceInnerAllOfDevicesInnerAllOfAddressesInnerAllOf
     */
    'macAddress'?: MacAddress;
}

/**
 * RoomsApi - axios parameter creator
 * @export
 */
export const RoomsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary ニックネームを新たに設定，または更新
         * @param {Nickname} [nickname] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserNickname: async (nickname?: Nickname, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/rooms/nickname`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(nickname, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 部屋情報と各部屋にいるユーザー一覧，ニックネーム，最新のコメントを取得．inRoomには，デバイスの最終接続日時が2分以内のユーザー一覧を部屋ごとに提示(デバイスのlastConnectedAtを参考に計算する)．outRoomには，inRoomではないユーザー一覧を提示する．
         * @summary 各部屋のユーザーとニックネームを取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersInRoom: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/rooms/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RoomsApi - functional programming interface
 * @export
 */
export const RoomsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RoomsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary ニックネームを新たに設定，または更新
         * @param {Nickname} [nickname] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUserNickname(nickname?: Nickname, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUserNickname(nickname, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 部屋情報と各部屋にいるユーザー一覧，ニックネーム，最新のコメントを取得．inRoomには，デバイスの最終接続日時が2分以内のユーザー一覧を部屋ごとに提示(デバイスのlastConnectedAtを参考に計算する)．outRoomには，inRoomではないユーザー一覧を提示する．
         * @summary 各部屋のユーザーとニックネームを取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsersInRoom(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InroomAndOutroomUsers>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsersInRoom(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RoomsApi - factory interface
 * @export
 */
export const RoomsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RoomsApiFp(configuration)
    return {
        /**
         * 
         * @summary ニックネームを新たに設定，または更新
         * @param {Nickname} [nickname] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserNickname(nickname?: Nickname, options?: any): AxiosPromise<void> {
            return localVarFp.createUserNickname(nickname, options).then((request) => request(axios, basePath));
        },
        /**
         * 部屋情報と各部屋にいるユーザー一覧，ニックネーム，最新のコメントを取得．inRoomには，デバイスの最終接続日時が2分以内のユーザー一覧を部屋ごとに提示(デバイスのlastConnectedAtを参考に計算する)．outRoomには，inRoomではないユーザー一覧を提示する．
         * @summary 各部屋のユーザーとニックネームを取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersInRoom(options?: any): AxiosPromise<InroomAndOutroomUsers> {
            return localVarFp.getUsersInRoom(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RoomsApi - object-oriented interface
 * @export
 * @class RoomsApi
 * @extends {BaseAPI}
 */
export class RoomsApi extends BaseAPI {
    /**
     * 
     * @summary ニックネームを新たに設定，または更新
     * @param {Nickname} [nickname] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public createUserNickname(nickname?: Nickname, options?: AxiosRequestConfig) {
        return RoomsApiFp(this.configuration).createUserNickname(nickname, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 部屋情報と各部屋にいるユーザー一覧，ニックネーム，最新のコメントを取得．inRoomには，デバイスの最終接続日時が2分以内のユーザー一覧を部屋ごとに提示(デバイスのlastConnectedAtを参考に計算する)．outRoomには，inRoomではないユーザー一覧を提示する．
     * @summary 各部屋のユーザーとニックネームを取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public getUsersInRoom(options?: AxiosRequestConfig) {
        return RoomsApiFp(this.configuration).getUsersInRoom(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SettingApi - axios parameter creator
 * @export
 */
export const SettingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 部屋ごとのデバイスリストと，ネットワーク，MACアドレスを返す
         * @summary 指定したユーザーの持つデバイス一覧を取得
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevices: async (userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getDevices', 'userId', userId)
            const localVarPath = `/api/setting/devices/{user_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 指定したユーザーの情報を取得
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (userId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUser', 'userId', userId)
            const localVarPath = `/api/setting/user/{user_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 新しいデバイスを追加
         * @param {Device} [device] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDevice: async (device?: Device, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/setting/device`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(device, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 指定したデバイスの情報を変更
         * @param {number} deviceId デバイスID
         * @param {Device} [device] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putDevice: async (deviceId: number, device?: Device, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deviceId' is not null or undefined
            assertParamExists('putDevice', 'deviceId', deviceId)
            const localVarPath = `/api/setting/device/{device_id}`
                .replace(`{${"device_id"}}`, encodeURIComponent(String(deviceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(device, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 指定したユーザーの情報を更新
         * @param {number} userId ユーザーID
         * @param {User1} [user1] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (userId: number, user1?: User1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateUser', 'userId', userId)
            const localVarPath = `/api/setting/user/{user_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(user1, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SettingApi - functional programming interface
 * @export
 */
export const SettingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SettingApiAxiosParamCreator(configuration)
    return {
        /**
         * 部屋ごとのデバイスリストと，ネットワーク，MACアドレスを返す
         * @summary 指定したユーザーの持つデバイス一覧を取得
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDevices(userId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserDeviceInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDevices(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 指定したユーザーの情報を取得
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(userId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 新しいデバイスを追加
         * @param {Device} [device] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postDevice(device?: Device, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postDevice(device, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 指定したデバイスの情報を変更
         * @param {number} deviceId デバイスID
         * @param {Device} [device] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putDevice(deviceId: number, device?: Device, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putDevice(deviceId, device, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 指定したユーザーの情報を更新
         * @param {number} userId ユーザーID
         * @param {User1} [user1] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(userId: number, user1?: User1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(userId, user1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SettingApi - factory interface
 * @export
 */
export const SettingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SettingApiFp(configuration)
    return {
        /**
         * 部屋ごとのデバイスリストと，ネットワーク，MACアドレスを返す
         * @summary 指定したユーザーの持つデバイス一覧を取得
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevices(userId: number, options?: any): AxiosPromise<Array<UserDeviceInner>> {
            return localVarFp.getDevices(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 指定したユーザーの情報を取得
         * @param {number} userId ユーザーID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(userId: number, options?: any): AxiosPromise<User> {
            return localVarFp.getUser(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 新しいデバイスを追加
         * @param {Device} [device] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postDevice(device?: Device, options?: any): AxiosPromise<void> {
            return localVarFp.postDevice(device, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 指定したデバイスの情報を変更
         * @param {number} deviceId デバイスID
         * @param {Device} [device] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putDevice(deviceId: number, device?: Device, options?: any): AxiosPromise<void> {
            return localVarFp.putDevice(deviceId, device, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 指定したユーザーの情報を更新
         * @param {number} userId ユーザーID
         * @param {User1} [user1] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser(userId: number, user1?: User1, options?: any): AxiosPromise<void> {
            return localVarFp.updateUser(userId, user1, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SettingApi - object-oriented interface
 * @export
 * @class SettingApi
 * @extends {BaseAPI}
 */
export class SettingApi extends BaseAPI {
    /**
     * 部屋ごとのデバイスリストと，ネットワーク，MACアドレスを返す
     * @summary 指定したユーザーの持つデバイス一覧を取得
     * @param {number} userId ユーザーID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingApi
     */
    public getDevices(userId: number, options?: AxiosRequestConfig) {
        return SettingApiFp(this.configuration).getDevices(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 指定したユーザーの情報を取得
     * @param {number} userId ユーザーID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingApi
     */
    public getUser(userId: number, options?: AxiosRequestConfig) {
        return SettingApiFp(this.configuration).getUser(userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 新しいデバイスを追加
     * @param {Device} [device] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingApi
     */
    public postDevice(device?: Device, options?: AxiosRequestConfig) {
        return SettingApiFp(this.configuration).postDevice(device, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 指定したデバイスの情報を変更
     * @param {number} deviceId デバイスID
     * @param {Device} [device] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingApi
     */
    public putDevice(deviceId: number, device?: Device, options?: AxiosRequestConfig) {
        return SettingApiFp(this.configuration).putDevice(deviceId, device, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 指定したユーザーの情報を更新
     * @param {number} userId ユーザーID
     * @param {User1} [user1] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingApi
     */
    public updateUser(userId: number, user1?: User1, options?: AxiosRequestConfig) {
        return SettingApiFp(this.configuration).updateUser(userId, user1, options).then((request) => request(this.axios, this.basePath));
    }
}


