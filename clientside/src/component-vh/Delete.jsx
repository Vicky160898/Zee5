import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import axios from 'axios';
const user = {
  title:"",
}

export const Delete = () => {
  const [dot, setDot] = useState(user);
  const [state, setState] = useState('initial' | 'submitting' | 'success' 
   );
  const [error, setError] = useState(false);

 const handleClick = (e) => {
   const {name , value } = e.target;
   setDot({...dot, [name]:value})
 }

  const handleSubmit = async (e) => {
    e.preventDefault();
   await axios.delete("http://localhost:8080/admin/delete", dot);
    setError(false);
    setState('submitting');

    //remove this code and implement your submit logic right here
    setTimeout(() => {
      if (dot !== "") {
        setError(false);
        setState('success');
        return;
      }
      setState('initial');
     
    }, 1000);
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue("#0F0617")}>
      <Container
        maxW={'lg'}
        bg={useColorModeValue('#2C2136')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        direction={'column'}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          color={"white"}
          mb={5}>
         Remove data 
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={handleSubmit}>
        
          <FormControl>
            <Input  color="white" type="text" name="title" placeholder="Enter title" value={dot.title} onChange={handleClick} />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              colorScheme={state === 'success' ? 'green' : 'purple'}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'Delete'}
              >
              {state === 'success' ? <CheckIcon /> : 'Delete'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.500'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : "You won't receive any spam! ✌️"}
        </Text>
      </Container>
    </Flex>
  );
}