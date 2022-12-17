import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const user = {
  title: "",
  url: "",
};

export const Edit = () => {
  const [state, setState] = useState(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(state);
    let res = await axios.patch("http://localhost:8080/admin/update", state);
    console.log(res);
    setState(user)
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      color={"white"}
      bg={useColorModeValue("#0F0617")}
    >
      <form onSubmit={handleSubmit}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("#2C2136")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Zee5 Modified Panel
          </Heading>

          <FormControl id="email" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Enter title"
              _placeholder={{ color: "gray.500" }}
              type="text"
              name="title"
              value={state.title}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Video link</FormLabel>
            <Input
              type="url"
              placeholder="Enter New Video url"
              name="url"
              value={state.url}
              onChange={handleChange}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              type="submit"
              bg={"#8230C6"}
              color={"white"}
              _hover={{
                bg: "#8230C6",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </Flex>
  );
};
