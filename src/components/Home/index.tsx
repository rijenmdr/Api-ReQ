import React from 'react'
import { Container } from '@chakra-ui/react';

import ApiInput from './ApiInput';
import RequestTabs from './RequestTabs';
import Response from './ResponseTabs';

const Home = () => {
  return (
    <Container maxW='5xl' my={10}>
      <ApiInput />
      <RequestTabs />
      <Response />
    </Container>
  )
}

export default Home