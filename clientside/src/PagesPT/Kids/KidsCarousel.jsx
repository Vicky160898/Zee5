import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export const KidsCarousel = () => {
  const carousel = {
    speed: 1000,
    slidesToshow: 1.3,
    slidesToScroll: 1.3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };
 
  





  return (
    <Box margin="auto" justifyContent="center" 
    // border="10px solid yellow"
    mt={{base:"85px",sm:"85px",md:"85px",lg:"80px"}}
    w={{base:"80%",sm:"60%",md:"80%",lg:"95%"}}
    // w={["100%","70%","95%"]}
    >
      <Slider {...carousel} borderRadius="5px" >
        {items.map((el) => (
          <Box>
            <Image src={el.url} 
            w={{sm:"60%",md:"80%",lg:"95%"}}
             margin="auto" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
