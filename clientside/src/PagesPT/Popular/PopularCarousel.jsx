import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

export const PopularCarousel = () => {
  const carousel = {
    speed: 1000,
    slidesToshow: 1.3,
    slidesToScroll: 1.3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  //popular

  const items = [
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-6-1286/cover/061286incover.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-6-1734/cover/1920x770a2026d56a3a84f0bb6f49a6340ff10c6.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-6-1533/cover/1920x770a302c5058f864847b9a808663b2f8c171043178d600246b9832c5554bdd5107a.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-6-1958/cover/061958incover.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-6-1325/cover/1920x7709210fd38fe264571a1eeb59ac3441616.jpg",
    },
    {
      url: "https://akamaividz2.zee5.com/image/upload/w_1199,h_480,c_scale,f_webp,q_auto:eco/resources/0-6-2505/cover/1920x770c7aab1ac0c25484fb89eca09184ddc6e.jpg",
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
