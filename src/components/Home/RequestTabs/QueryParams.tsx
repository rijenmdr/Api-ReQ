import React from 'react'
import { Box } from '@chakra-ui/react'

import { useHome } from '@/zustand/home'
import { INameValue } from '@/types'
import KeyValueInput from '@/common/KeyValueInput'
import { getInitialKeyValueState, getQueryParamsFromArray, splitStringBySymbol } from '@/helper/utils'

const QueryParams = () => {
    const { url, setUrl, queryParams, setQueryParams } = useHome();

    const handleStateChange = (data: INameValue[]) => {
        const params = getQueryParamsFromArray(data);
        const [firstPart] = splitStringBySymbol(url, "?")
        setUrl(firstPart + params);
        setQueryParams(data);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const data = [...queryParams];
        const { name, value } = e.target;
        if (name === "key") data[index].key = value;
        if (name === "value") data[index].value = value;
        handleStateChange(data)
    }

    const handleAddNewField = () => {
        const data = getInitialKeyValueState();
        const newQueryParams = [...queryParams, data]
        handleStateChange(newQueryParams)
    }

    const handleRemoveField = (id: number) => {
        const filteredData = queryParams?.filter(input => input?.id !== id);
        handleStateChange(filteredData)
    }
    return (
        <Box
            minH="150px"
        >
            {
                queryParams.map((input, index) => (
                    <KeyValueInput
                        key={index}
                        nameValue={input}
                        index={index}
                        handleInputChange={handleInputChange}
                        handleAddNewField={handleAddNewField}
                        handleRemoveField={handleRemoveField}
                    />
                ))
            }
        </Box>
    )
}

export default QueryParams