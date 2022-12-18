import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export const PremiumCarousel = () => {
  const carousel = {
    speed: 1000,
    slidesToshow: 1.3,
    slidesToScroll: 1.3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };
 // Premium
 const items = [
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246218/cover/1920x770e3b463df07154dcc8aed9443b1a5769b.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-0-1z5238286/cover/1920x770d16cdf5f3cb443acb763e30ca6a2d412.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-0-1z5148988/cover/1920x77073768911a62041c790bec34cd1bcb17e.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-101-10z5210808/cover/1920x770ba9725534a73475382021ea430ce5f54.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-0-1z571846/cover/1920x770c4c4a15374414e9bb69c851271285339.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-0-1z5228515/cover/1920x77084285028ad3d48b4a645dbbcf05d9af4.jpg",
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
