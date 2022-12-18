import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export const LiveTVCarousel = () => {
  const carousel = {
    speed: 1000,
    slidesToshow: 1.3,
    slidesToScroll: 1.3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  // //live
  const items = [
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3506/cover/1920x7709a564461a89c4ec0ba0318513c6f27e7.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5238413/cover/1920x77011944dc2739a43cdb5d7d7aad74643c3.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-1179/cover/1920x7709666bd30c8b9448e9b386ef38f01b2ea.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3506/cover/1920x7709a564461a89c4ec0ba0318513c6f27e7.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-1392/cover/1920x7708a94d67968bc434e93f8d757db629fdb.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5214869/cover/1920x7701d5c55a4025a45c0be3d7c02e53fa916.jpg",
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
