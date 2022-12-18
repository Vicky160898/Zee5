import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export const SerialCarousel = () => {
  const carousel = {
    speed: 1000,
    slidesToshow: 1.3,
    slidesToScroll: 1.3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  //serial

  const items = [
    {
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2175/1092175-h-436bc9c9aa3d"
    },
    {
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/883/1400883-h-f24a545e2f10",
    },
    {
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4260/1364260-h-258740443e65",
    },
    {
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9525/1119525-h-16baea83c2e9",
    },
    {
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2175/1092175-h-436bc9c9aa3d",
    },
    {
      url: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2956/762956-h",
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
