import { Box, Grid, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const Popular= ({ data, head }) => {
  //  console.log(data);
  const carousel = {
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: true,
    slidesToShow: 5.2,
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
          arrows: true,
        },
      },
      {
        //SE
        breakpoint: 769,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <>
      <Box mt="100px" w="90%" m="auto">
        <Heading textAlign="left" mt="40px" mb="40px" color="white">
          {head}
        </Heading>
        <Slider {...carousel} borderRadius="5px">
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
                mr="8px"
                borderRadius="15px"
                border="2px solid grey"
                h="280px"
                bgColor="white"
                color="black"
              >
                <Image src={el.img} w="100%" borderRadius="12px" h="200px" />
                <Box ml="10px">
                  <Text fontSize={14} fontWeight={"bold"}>
                    {el.title}
                  </Text>
                  <Button bgColor="#8230c6">
                    <i bgColor="red" class="fa-solid fa-circle-play"></i> Watch
                  </Button>
                </Box>
              </Box>

              <Box></Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};
