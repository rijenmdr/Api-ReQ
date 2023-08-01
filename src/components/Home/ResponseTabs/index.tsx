import { Box, Heading, Text } from '@chakra-ui/react';

import { useHome } from '@/zustand/home';
import ResponseJson from './ResponseJson';
import ResponseStatus from './ResponseStatus';

const Response = () => {
  const { error } = useHome();
  return (
    <Box mt={10}>
      <Heading size="md" mb={2}>
        Response
      </Heading>
      <Box
        border="1px solid"
        borderColor="whiteAlpha.300"
        borderRadius="8px"
      >
        <ResponseStatus/>
        <Box
          overflow="auto"
        >
          {
            error ?
              <Text>{error}</Text> :
              <ResponseJson />
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Response