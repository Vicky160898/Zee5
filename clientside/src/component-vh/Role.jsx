import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";

export const Role = () => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      color={"white"}
      bg={useColorModeValue("#0F0617")}
    >
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
          Zee5 Role Panel
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormLabel>Role</FormLabel>
        <Select placeholder="Select Role"   bg={useColorModeValue("#2C2136")}>
          <option value="option1"  color="#2C2136">Service Provider</option>
          <option value="option2"  color="#2C2136">User</option>
        </Select>
        <Stack spacing={6}>
          <Button
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
    </Flex>
  );
};
