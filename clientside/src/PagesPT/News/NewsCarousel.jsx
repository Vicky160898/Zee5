import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export const NewsCarousel = () => {
  const carousel = {
    speed: 1000,
    slidesToshow: 1.3,
    slidesToScroll: 1.3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  //News

  const items = [
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externalli_182727687/cover/tv9kannada1920488170d71671416294d58ae68c23cfed.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-10z5117550/cover/indiatoday1920desktop19ba05d86e83545e592eec6dc784dbdad.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1904997942/cover/wion1920desktop5c86f7211d564959afe6ada3a1e13f41.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1224347986/cover/newsx1920desktop6be5918d572e446f9b2007ada6bdaa05.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externalli_153093558/cover/asianetnewsablevod1920desktop7c2b7e1adcc714869a7e61672e6742d3a.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externalli_803734673/cover/wion1920desktop165d25b3043d304fbd86fbc18bf544d52b.jpg",
    },
  ];

  return (
    <Box
      margin="auto"
      justifyContent="center"
      // border="10px solid yellow"
      mt={{ base: "85px", sm: "85px", md: "85px", lg: "80px" }}
      w={{ base: "80%", sm: "60%", md: "80%", lg: "95%" }}
      // w={["100%","70%","95%"]}
    >
      <Slider {...carousel} borderRadius="5px">
        {items.map((el) => (
          <Box>
            <Image
              src={el.url}
              w={{ sm: "60%", md: "80%", lg: "95%" }}
              margin="auto"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
