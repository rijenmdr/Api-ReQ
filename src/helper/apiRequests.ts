import { IApiRequest, IApiResponse } from '@/types';
import axios from '@/config/axiosConfig';
import { convertArrayHeadersToObject } from './utils';

export const handleApiRequest = async(data: IApiRequest) => {
    const {url, method, headers, jsonRequest} = data;

    let body = method === "POST" || method === "PUT" ? JSON.parse(jsonRequest) : {}
    const header = convertArrayHeadersToObject(headers);
    try {
       const data =  await axios({
            url,
            method,
            headers: header,
            data: body
        });
        return data;
    } catch(err) {
        return err;
    }
}