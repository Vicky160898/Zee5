import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export const Edit = () => {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        color={"white"}
        bg={useColorModeValue("#0F0617")}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue("#2C2136")}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} >
            Zee5 Modified Panel
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Enter title"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Video link</FormLabel>
            <Input type="url" placeholder="Enter New Video url"/>
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'#8230C6'}
              color={'white'}
              _hover={{
                bg: '#8230C6',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }