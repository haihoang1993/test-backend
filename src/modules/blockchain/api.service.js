import axios from 'axios';
import qs from 'qs';

export const Host = 'https://api.coingecko.com';
export const BaseURL = `${Host}/api/v3/`; // Develop

axios.defaults.baseURL = `${BaseURL}`;
axios.defaults.timeout = 20000;

import { getProxy } from '../../proxy';

export default class RequestHelper {
    static async getHeader() {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
    };

    static async get(url, params, isProxy = true) {
        const header = await this.getHeader();
        const option = {
            headers: header,
            params,
            paramsSerializer: params => {
                return qs.stringify(params, { arrayFormat: 'repeat' });
            },
        };
        if (isProxy) {
            option.httpsAgent = getProxy();
        }
        return axios
            .get(url, option)
            .then(data => {
                return data.data;
            })
            .catch(e => {
                throw e
            });
    }
}