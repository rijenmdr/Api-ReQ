import { InputGroup, Select, Input, InputLeftAddon, InputRightElement, Button } from '@chakra-ui/react'
import { toast } from 'react-toastify';

import { useHome } from '@/zustand/home'
import { getInitialKeyValueState, getQueryParamsFromString, isJSON, splitStringBySymbol } from '@/helper/utils';
import { handleApiRequest } from '@/helper/apiRequests';

const ApiInput = () => {
  const { 
      url, 
      setUrl,
      method, 
      setMethod, 
      setQueryParams, 
      headers, 
      jsonRequest, 
      setSuccessResponse, 
      setErrorResponse, 
      isLoading, 
      setLoading } = useHome();

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    //to get first and second part of string after ? symbol
    const [firstPart, secondPart] = splitStringBySymbol(value, "?");

    //to get new query params from the string
    let queryParams = secondPart !== "" ? getQueryParamsFromString(secondPart) : [getInitialKeyValueState()]
    
    setUrl(value)
    setQueryParams(queryParams)
  }

  const handleSend = async() => {
    if(!url) {
      toast.error("Request url cannot be empty.")
      return;
    }
    if(!isJSON(jsonRequest) && (method === "POST" || method === "PUT")) {
      toast.error("Please enter the valid JSON data.")
      return;
    }

    setLoading(true);

    let data = {
      url,
      method,
      headers,
      jsonRequest
    }

    const response: any = await handleApiRequest(data);
    if(response?.data) {
      setSuccessResponse(response);
      return;
    }
    setErrorResponse(response)
  }

  return (
    <InputGroup size="lg">
      <InputLeftAddon bg="transparent" padding={0}>
        <Select
          value={method}
          cursor="pointer"
          size="lg"
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          fontSize="sm"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMethod(e.target.value)}
        >
          <option value='GET'>GET</option>
          <option value='POST'>POST</option>
          <option value='PUT'>PUT</option>
          <option value='DELETE'>DELETE</option>
        </Select>
      </InputLeftAddon>
      <Input
        size="lg"
        placeholder='https://example.com'
        fontSize="medium"
        value={url}
        onChange={handleUrlChange}
      />
      <InputRightElement w={90}>
        <Button
          size='lg'
          bgColor="brand.500"
          fontSize="md"
          _hover={{bgColor: "brand.100"}}
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          disabled={isLoading}
          isLoading={isLoading}
          onClick={handleSend}
        >
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default ApiInput