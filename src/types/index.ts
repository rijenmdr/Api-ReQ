export interface INameValue {
    id: number,
    key: string,
    value: string
}

export type MethodType = "GET" | "POST" | "PUT" | "DELETE"

export interface IURL {
    baseUrl: string;
    params: string;
}

export interface IApiRequest {
    url: string;
    method: MethodType | string;
    headers: INameValue[];
    jsonRequest: string;
}

interface ErrorResponse {
    data: any;
    status: number
}

export interface IApiResponse {
    data?:any;
    size?: number;
    status?:number;
    duration: number;
    response?: ErrorResponse;
    stack?: string;
}