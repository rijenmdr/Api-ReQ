import {Box, Heading} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box px={8} py={4}>
        <Heading 
          size="lg"
          fontWeight= "400"
          fontFamily="cursive"
          letterSpacing="3px"
          textShadow= "2px 2px 0px #2d303a, -2px -2px 0px #2d303a, -2px 2px 0px #2d303a, 2px -2px 0px #2d303a"
          color= "#fff"
        >
           Api ReQ
        </Heading>
    </Box>
  )
}

export default Navbar