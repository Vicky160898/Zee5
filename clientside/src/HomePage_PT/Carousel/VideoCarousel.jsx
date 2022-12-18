import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export const VideoCarousel = () => {
  const carousel = {
    speed: 1000,
    slidesToshow: 1.3,
    slidesToScroll: 1.3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };
 
  const items = [
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/cover/1170x658withlogod884c823e4ad4a6293cb4a99316a8cfb.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1170x658withlogo15276a9c997d48958e486bdda9eecc4e_free.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/cover/1170x658withlogoeacb29c71a9248d486d2d5132d77922c.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-8-8703/cover/moviescompo1440x8100fe1eeaef4c541788aee59d2bab7b1f4.jpg",
    },
  ];





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
