import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

const user = {
  title: "",
  category: "",
  img: "",
  url: "",
};

export const Data = () => {
  const [state, setState] = useState(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(state);
    let res = await axios.post("http://localhost:8080/admin/add", state);
    console.log(res);
    setState(user);
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
      bg={useColorModeValue("#0F0617")}
      color="white"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Admin Panel
          </Heading>
          <Text fontSize={"lg"}  color="white">
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("#2C2136")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Title</FormLabel>
                    <Input
                      type="text"
                      name="title"
                      placeholder="Enter title"
                      value={state.title}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Category</FormLabel>
                    <Input
                      type="text"
                      name="category"
                      value={state.category}
                      placeholder="Enter Category"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Image URl</FormLabel>
                <Input
                  type="url"
                  name="img"
                  value={state.img}
                  placeholder="Enter Image url"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Video Url</FormLabel>
                <InputGroup>
                  <Input
                    type="url"
                    name="url"
                    value={state.url}
                    placeholder="Enter video url"
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"#8230C6"}
                  color={"white"}
                  _hover={{
                    bg: "#8230C6",
                  }}
                >
                  Add Data
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
