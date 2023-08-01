import { INameValue } from "@/types";

//FUNCTION THAT RETURNS THE INTIAL NAME VALUE OBJECT
export const getInitialKeyValueState = () => {
    const data: INameValue = {
        id: Number(new Date()),
        key: "",
        value: ""
    }
    return data
}

// SPLITS STRING INTO TWO PARTS BY SYMBOL AND RETURN THOSE SPLITTED STRINGS
export const splitStringBySymbol = (text: string, splitBy: string) => {
    const index = text.indexOf(splitBy);
    if (index !== -1) {
        const firstPart = text.slice(0, index);
        const secondPart = text.slice(index + 1);
        return [firstPart, secondPart];
    }
    return [text, ""];
}

//CONVERTS URL STRING'S QUERY PARAMS INTO ARRAY OF OBJECT
export const getQueryParamsFromString = (text: string) => {
    const data = text.split("&")
    const date = new Date();
    const params: INameValue[] = data?.map((d, index) => {
        const [firstPart, secondPart] = splitStringBySymbol(d, "=")
        return {
            id: Number(date) + index,
            key: firstPart,
            value: secondPart
        };
    })
    return params
}

//CONVERTS ARRAY OF QUERY PARAMS INTO URL STRING'S QUERY PARAMS
export const getQueryParamsFromArray = (queryParams: INameValue[]) => {
    let tempUrl = "";

    queryParams?.forEach((param, index) => {
        const { key, value } = param
        if (index === 0) {
            tempUrl = `${tempUrl}?${key}=${value}`
            return;
        }
        tempUrl += `&${key}=${value}`
    });
    return tempUrl
}   

// CHECKS IF THE GIVEN STRING IS JSON COMPATIBLE
export const isJSON = (content: string) => {
    try {
      JSON.parse(content);
      return true;
    } catch (e) {
      return false;
    }
};

//CONVERTS HEADER ARRAY OBJECT INTO OBJECT
export const convertArrayHeadersToObject = (headers: INameValue[]) => {
    let data = {}

    headers?.length !== 0 && headers?.forEach(header => {
        const {key, value} = header;
        if(key && value) 
            data = {...data, [key?.toString()]: value}
    })

    return data;
}
  