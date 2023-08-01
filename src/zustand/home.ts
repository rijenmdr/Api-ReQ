import {create} from 'zustand';
import { IApiResponse, INameValue, MethodType } from '@/types';

interface IHome {
    url: string;
    method: MethodType | string;
    queryParams: INameValue[];
    headers: INameValue[];
    jsonRequest: string;
    status: number | null;
    duration:number | null;
    size: number;
    response: {};
    error:string;
    isLoading: boolean;
    setUrl: (data: string) => void;
    setMethod: (data: MethodType | string) => void;
    setQueryParams: (data: INameValue[]) => void;
    setHeaders: (data: INameValue[]) => void;
    setJSONRequest: (data: string) => void;
    setSuccessResponse: (data: IApiResponse) => void;
    setErrorResponse: (data: IApiResponse) => void;
    setLoading: (data: boolean) => void;
}


export const useHome = create<IHome>((set) => {
    return {
        url: "",
        method: "GET",
        queryParams: [
            {
                id: Number(new Date()),
                key: "",
                value: ""
            }
        ],
        headers: [
            {
                id: Number(new Date()),
                key: "",
                value: ""
            }
        ],
        jsonRequest: JSON.stringify({}),
        status: null,
        duration: null,
        size: 0,
        response: {},
        error: "",
        isLoading: false,
        setUrl: (data) => {
            set(_ => ({
                url: data
            }));
          },
        setMethod: (data) => {
            set(_ => ({
                method: data
            }));
          },
        setQueryParams: (data) => {
            set(_ => ({
                queryParams: data
            }));
          },
        setHeaders: (data) => {
            set(_ => ({
                headers: data
            }));
          },
        setJSONRequest: (data) => {
            set(_ => ({
                jsonRequest: data
            }));
          },
        setLoading: (data) => {
            set(_ => ({
                isLoading: data
            }));
          },
        setSuccessResponse: (data) => {
            set(_ => ({
                status: data?.status,
                size: data?.size || 0,
                duration: data?.duration,
                response: data?.data,
                error: "",
                isLoading: false
            }));
        },
        setErrorResponse: (data) => {
            set(_ => ({
                status: data?.response?.status,
                size: data?.size || 0,
                duration: data?.duration,
                response: data?.response?.data,
                error: data?.stack,
                isLoading: false
            }));
        }
    };
});