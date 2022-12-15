import { Box, Grid, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Button } from "react-bootstrap";
import Slider from "react-slick";
export const MultiCarousel = ({ data, head }) => {
  //  console.log(data);
  const carousel = {
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5.2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
      {
        //SE
        breakpoint: 769,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box mt="100px" w="90%" m="auto" gap="100px">
      <Heading textAlign="left" mt="40px" mb="40px">
        {head}
      </Heading>
      <Slider {...carousel} borderRadius="5px"  >
        {data?.map((el) => (
          <Box
            textAlign="left"
            key={el._id}
            _hover={{
              cursor: "pointer",
              transform: "scale(1.12)",
              transitionDuration: "0.5s",
            }}
          >
            <Box
              alignContent="center"
              mr="20px"
              borderRadius="25px"
              border="2px solid grey"
              h="300px"
            >
              <Image
                src={el.image}
                w="100%"
                borderRadius="20px"
                mt="4px"
                h="250px"
              />
              {/* </Box> */}
              {/* <Box> */}
              {/* <Box ml="20px">
                <Text fontSize={19} fontWeight={"bold"}>
                  {el.brand}
                </Text>

                <Text fontSize={16} fontWeight={"bold"}>
                  {el.title}
                </Text>

                <Text fontSize={17}>₹ {el.price}</Text>

                <Text fontSize={17}>{el.off}</Text>

                <Button bgColor="#8230c6">
                  <i bgColor="red" class="fa-solid fa-circle-play"></i> Watch
                </Button>
              </Box> */}
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
