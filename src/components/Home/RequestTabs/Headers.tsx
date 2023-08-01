import React from 'react'
import { useHome } from '@/zustand/home'
import { Box } from '@chakra-ui/react'

import { getInitialKeyValueState } from '@/helper/utils'
import KeyValueInput from '@/common/KeyValueInput'

const Headers = () => {
    const { headers, setHeaders } = useHome();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const data = [...headers];
        const { name, value } = e.target;
        if (name === "key") data[index].key = value;
        if (name === "value") data[index].value = value;
        setHeaders(data)
    }

    const handleAddNewField = () => {
        const data = getInitialKeyValueState();
        const newHeaders = [...headers, data]
        setHeaders(newHeaders)
    }

    const handleRemoveField = (id: number) => {
        const filteredData = headers?.filter(header => header?.id !== id);
        setHeaders(filteredData)
    }
    return (
        <Box
            minH="150px"
        >
            {
                headers.map((input, index) => (
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

export default Headers