import { Box, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
export const Footer = () => {
  return (
    <Box bgColor="#0f0617" color="white"  h={["900px","400px","400px"]} w="100%">
           <Flex
        justifyContent="space-between"
        // paddingRight="30px"
       
        gap="40px"
      >
        <Box gap="40px"  mt="80px" mr="20px" ml="20px">
          <Flex gap="40px">
            <Box>Dwonload apps</Box>
            <Box>
              <Image
                borderRadius="5px"
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"
                alt="apple"
              />
            </Box>
            <Box>
              <Image
                borderRadius="5px"
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"
                alt="google"
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex justifyContent="space-evenly" gap="1rem" pr="30px"  mt="80px">
            <Box>Contact with us</Box>
            <Box>
              <AiFillFacebook size="20px" />
            </Box>
            <Box>
              <AiFillInstagram size="20px" />
            </Box>
            <Box>
              <AiOutlineTwitter size="20px" />
            </Box>
            <Box>
              <AiFillYoutube size="20px" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    <SimpleGrid
      columns={[2, 3, 6]}
      textAlign="left"
      color="white"
      rowGap="50px"
      
     
      
    >
      <Box textAlign="left" ml="20px" mr="10px" >
        <Heading size="xsm" mb="20px" mt="20px">Popular TV Shows</Heading>
        <Text>Kumkum Bhagya</Text>
        <Text>Kundali </Text>
        <Text>Bhagya Laxmi</Text>
        <Text>Tujhse Hai Rabba</Text>
        <Text>kyun Riston Mein katt</Text>
      </Box>
      <Box ml="20px" mr="10px" >
        <Heading mb="20px" mt="20px" size="xsm">Preminum Movies</Heading>
        <Text>Kya Meri Sonam Gupta Bewfa Hai?</Text>
        <Text>Helmet</Text>
        <Text>200 Halla Ho</Text>
        <Text>14 Phere</Text>
        <Text>Dial 100</Text>
      </Box>

      <Box ml="20px" mr="10px">
        <Heading mb="20px" mt="20px" size="xsm">Popular LIVE TV Channels</Heading>
        <Text>Aaj Tak</Text>
        <Text>Zee News</Text>
        <Text>Zee TV HD</Text>
        <Text>&TV HD</Text>
        <Text>Zee Marathi HD</Text>
      </Box>
      <Box ml="20px" mr="10px">
        <Heading mb="20px" mt="20px" size="xsm" color="white">
          Popular Web Series
        </Heading>
        <Text>Sunflower</Text>
        <Text>Jeet Ki Zid</Text>
        <Text>Bicchoo Ka Khel</Text>
        <Text>State of Siege:26/11</Text>
        <Text>Naxalbari</Text>
        <Text>Tripling</Text>
      </Box>
      <Box ml="20px" mr="10px">
        <Heading mb="20px" mt="20px" size="xsm" color="white">
          Bollywood Top Celebrites
        </Heading>
        <Text>Sunny Leon</Text>
        <Text>Disha Patani</Text>
        <Text>Deepika Padukone</Text>
        <Text>Slamana Khan</Text>
        <Text>Nora Fatehi</Text>
      </Box>
      <Box ml="20px" mr="10px">
        <Heading mb="20px" mt="20px" size="xsm" color="white">
          Games & News
        </Heading>
        <Text>play</Text>
        <Text>Stories</Text>
        <Text>Articles</Text>
        <Text></Text>
        <Text></Text>
      </Box>
    </SimpleGrid>
  </Box>
    
  );
};
//function data(){
//   return (
//   <>
//    <Box
//       cursor="pointer"
//       paddingLeft="30px"
//       bgColor="#0f0617"
//       color="white"
//       h="500px"
//       mt="200px"
//     >
//       <Flex
//         justifyContent="space-between"
//         gap="40px"
//       >
//         <Box gap="40px" mt="80px">
//           <Flex gap="40px">
//             <Box>Dwonload apps</Box>
//             <Box>
//               <Image
//                 borderRadius="5px"
//                 src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"
//                 alt="apple"
//               />
//             </Box>
//             <Box>
//               <Image
//                 borderRadius="5px"
//                 src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"
//                 alt="google"
//               />
//             </Box>
//           </Flex>
//         </Box>
//         <Box>
//           <Flex justifyContent="space-evenly" gap="1rem" pr="30px" mt="80px">
//             <Box>Contact with us</Box>
//             <Box>
//               <AiFillFacebook size="20px" />
//             </Box>
//             <Box>
//               <AiFillInstagram size="20px" />
//             </Box>
//             <Box>
//               <AiOutlineTwitter size="20px" />
//             </Box>
//             <Box>
//               <AiFillYoutube size="20px" />
//             </Box>
//           </Flex>
//         </Box>
//       </Flex>
//       <Flex gap="1rem" marginBottom="30px" marginTop="30px">
//         <Box>About Us</Box>
//         <Box>|</Box>
//         <Box>Help Center</Box>
//         <Box>|</Box>
//         <Box>Privacy Policy</Box>
//         <Box>|</Box>
//         <Box>Terms of Use</Box>
//       </Flex>

//       <Flex gap="35px" textAlign="left">
//         <Box
//         //  border="2px solid white"
//         >
//           <Stack textAlign="left">
//             <Heading size="xsm" color="white">
//               Popular TV Shows
//             </Heading>
//             <Text>Kumkum Bhagya</Text>
//             <Text>Kundali </Text>
//             <Text>Bhagya Laxmi</Text>
//             <Text>Tujhse Hai Rabba</Text>
//             <Text>kyun Riston Mein katt</Text>
//           </Stack>
//         </Box>
//         <Box
//         //  border="2px solid white"
//         >
//           <Stack>
//             <Heading size="xsm" color="white">
//               Preminum Movies
//             </Heading>
//             <Text>Kya Meri Sonam Gupta Bewfa Hai?</Text>
//             <Text>Helmet</Text>
//             <Text>200 Halla Ho</Text>
//             <Text>14 Phere</Text>
//             <Text>Dial 100</Text>
//           </Stack>
//         </Box>
//         <Box
//         //  border="2px solid white"
//         >
//           <Stack>
//             <Heading size="xsm" color="white">
//               Popular LIVE TV Channels
//             </Heading>
//             <Text>Aaj Tak</Text>
//             <Text>Zee News</Text>
//             <Text>Zee TV HD</Text>
//             <Text>&TV HD</Text>
//             <Text>Zee Marathi HD</Text>
//           </Stack>
//         </Box>
//         <Box
//         //  border="2px solid white"
//         >
//           <Stack>
//             <Heading size="xsm" color="white">
//               Popular Web Series
//             </Heading>
//             <Text>Sunflower</Text>
//             <Text>Jeet Ki Zid</Text>
//             <Text>Bicchoo Ka Khel</Text>
//             <Text>State of Siege:26/11</Text>
//             <Text>Naxalbari</Text>
//             <Text>Tripling</Text>
//           </Stack>
//         </Box>
//         <Box
//         //  border="2px solid white"
//         >
//           <Stack>
//             <Heading size="xsm" color="white">
//               Bollywood Top Celebrites
//             </Heading>
//             <Text>Sunny Leon</Text>
//             <Text>Disha Patani</Text>
//             <Text>Deepika Padukone</Text>
//             <Text>Slamana Khan</Text>
//             <Text>Nora Fatehi</Text>
//           </Stack>
//         </Box>
//         <Box
//         //  border="2px solid white"
//         >
//           <Stack>
//             <Heading size="xsm" color="white">
//               Games & News
//             </Heading>
//             <Text>play</Text>
//             <Text>Stories</Text>
//             <Text>Articles</Text>
//             <Text></Text>
//             <Text></Text>
//           </Stack>
//         </Box>
//       </Flex>
//     </Box> 
//   </>
//   )
 
// }