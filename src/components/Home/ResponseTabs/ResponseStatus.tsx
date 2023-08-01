import { Flex, Text } from '@chakra-ui/react';
import prettyBytes from 'pretty-bytes';

import { useHome } from '@/zustand/home';

const ResponseStatus = () => {
    const { status, duration, size } = useHome();

    return (
        <Flex
            justifyContent="flex-end"
            width="full"
            background="gray.900"
            p={1}
            borderTopRadius="8px"
        >
            {
                status &&
                <Text fontSize="xs">
                    Status: {' '}
                    <Text as="span" color="green.400">{status}</Text>
                </Text>
            }
            {
                duration &&
                <Text fontSize="xs" mx={3}>
                    Time: {' '}
                    <Text as="span" color="green.400">{duration}ms</Text>
                </Text>
            }
            <Text fontSize="xs">
                Size: {' '}
                <Text as="span" color="green.400">{prettyBytes(size)}</Text>
            </Text>
        </Flex>
    )
}

export default ResponseStatus