import { Box, Button, Flex, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {  FaPlay } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

function SingleCard({  index, prem=false }) {
  const [state, setState] = useState(false);

  return (
    <GridItem
      w={240}
      justifyContent={"space-between"}
      key={index}
      cursor={"pointer"}
      position={"relative"}
      borderRadius={"lg"}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
      className="hover:z-10 mt-10 first-letter:overflow-hidden my-4 hover:scale-105 duration-150"
    >
      <Link to={`/video/play/Ninaithake Inikum`}>
        <Box className="mx-5 hover:scale-105 hover:z-20">
          <Image src="https://akamaividz2.zee5.com/image/upload/w_224,h_336,c_scale,f_webp,q_auto:eco/resources/0-0-1z5259649/portrait/1920x77098956c98fc1c4bd6a83260bcf11b5357.jpg" alt="title" borderRadius="lg" h='300px' w="100%" />
          
         
        </Box>
        {state && (
          <Flex
            h={51}
            w={51}
            zIndex={2}
            align={"center"}
            justify={"center"}
            pos={"absolute"}
            top={"37%"}
            left={"37%"}
            fontSize={"xl"}
            bg={"rgba(37, 37, 37, 0.377)"}
            color={"whitesmoke"}
            borderRadius={50}
            _hover={{
              color: "rgb(47, 47, 47)",
              bg: "whitesmoke",
            }}
          >
            <FaPlay style={{ marginLeft: "5px" }} />
          </Flex>
        )}
        {state && (
          <VStack
            h={"100%"}
            w={"100%"}
            // ml={"20px"}
            pos={"absolute"}
            alignItems={"center"}
            zIndex={0}
            bottom={0}
            borderRadius={"lg"}
            flexFlow={"column-reverse"}
            border="4px solid whitesmoke"
          >
            <VStack py={0} align={"left"} w={"100%"} bg={"whitesmoke"} color={"gray"} wrap={"wrap"} fontSize={"sm"}>
              <Text ml={1} color={"gray"} fontSize={"sm"} fontWeight="600">
                ● Ninaithake Inikum
              </Text>
              <Flex alignItems={"center"} gap={2}>
                <Button size="xs" colorScheme="black" variant="outline" ml={2}>
                  Watch
                </Button>
                <Flex alignItems={"center"} color={"gray"} fontSize={"md"} fontWeight="600">
                  <AiOutlineShareAlt size={26}></AiOutlineShareAlt>
                  Share
                </Flex>
              </Flex>
            </VStack>
          </VStack>
        )}
      </Link>
    </GridItem>
  );
}

export default SingleCard;
