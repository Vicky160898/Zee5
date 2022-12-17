import React from "react";
import {
  Box,
  UnorderedList,
  ListItem,
  Button,
  ListIcon,
  Text,
  Spacer,
  Center,
  Container,
  HStack,
  SimpleGrid,
  Grid,
  VStack,
} from "@chakra-ui/react";

function Party() {
  return (
    <>
      <Box bg="#0f0617" height="auto">
        <Box
          bg="#0f0617"
          p={8}
          color="white"
          height="150px"
          fontSize="42px"
          fontWeight="bold"
          marginTop="100px"
          marginBottoom="100px"
          borderRadius="30px"
          textAlign={"center"}
        >
          Choose your premium plan
        </Box>

        <VStack>
          <SimpleGrid
            columns={{ lg: 3, md: 2, sm: 1, base: 1 }}
            gap="5rem"
            marginTop="40px"
          >
            <Box
              background="#2c2136"
              w={"100%"}
              p={4}
              color="white"
              borderRadius="30px"
              fontWeight="bold"
              fontSize="27px"
              lineHeight="50px"
              padding="20px"
            >
              <br />
              <UnorderedList textAlign="left" marginLeft="50px">
                <ListItem>Add Free</ListItem>

                <ListItem>No. of screens</ListItem>
                <ListItem>Max audio quality</ListItem>
              </UnorderedList>
              <br />
              <Box
                lineHeight="40px"
                border=" 1px solid white"
                borderRadius="30px"
                fontSize="22px"
                w="70%"
                height="160px"
                p={4}
                color="white"
                margin="auto"
              >
                <Text>Premium HD</Text>
                <Text>₹399</Text>
                <Text>3 Months</Text>
              </Box>

              <Button
                background=" #8230c6"
                px={8}
                color="white"
                height="80px"
                fontSize="32px"
                fontWeight="bold"
                marginTop="20px"
                marginBottoom="100px"
                borderRadius="60px"
                marginLeft="10px"
              >
                Buy Premium
              </Button>
            </Box>

            <Box
              background="#2c2136"
              w={"100%"}
              p={4}
              color="white"
              borderRadius="30px"
              fontWeight="bold"
              fontSize="27px"
              lineHeight="50px"
              padding="10px"
            >
              <br />
              <UnorderedList textAlign="left" marginLeft="70px">
                <ListItem>Add Free</ListItem>

                <ListItem>No. of screens</ListItem>
                <ListItem>Max audio quality</ListItem>
              </UnorderedList>
              <br />
              <Box
                lineHeight="40px"
                border=" 1px solid white"
                borderRadius="30px"
                fontSize="22px"
                w="70%"
                height="160px"
                p={4}
                color="white"
                margin="auto"
              >
                <Text>Premium HD</Text>
                <Text>₹699</Text>
                <Text>12 Months</Text>
              </Box>

              <Button
                background=" #8230c6"
                px={8}
                color="white"
                height="80px"
                fontSize="32px"
                fontWeight="bold"
                marginTop="30px"
                marginBottoom="100px"
                borderRadius="60px"
                marginLeft="10px"
              >
                Buy Premium
              </Button>
            </Box>

            <Box
              background="#2c2136"
              w={"100%"}
              p={4}
              color="white"
              borderRadius="30px"
              fontWeight="bold"
              fontSize="27px"
              lineHeight="50px"
              padding="10px"
            >
              <br />
              <UnorderedList textAlign="left" marginLeft="70px">
                <ListItem>Add Free</ListItem>

                <ListItem>No. of screens</ListItem>
                <ListItem>Max audio quality</ListItem>
              </UnorderedList>
              <br />
              <Box
                lineHeight="40px"
                border=" 1px solid white"
                borderRadius="30px"
                fontSize="22px"
                w="70%"
                height="160px"
                p={4}
                color="white"
                margin="auto"
              >
                <Text>Premium HD</Text>
                <Text>₹1499</Text>
                <Text>12 Months</Text>
              </Box>
              <Button
                background=" #8230c6"
                px={8}
                color="white"
                height="80px"
                fontSize="32px"
                fontWeight="bold"
                marginTop="30px"
                marginBottoom="100px"
                borderRadius="60px"
                marginLeft="10px"
              >
                Buy Premium
              </Button>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  );
}

export default Party;
