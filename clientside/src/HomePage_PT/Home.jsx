import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Home = () => {
  const carouselcall = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1.2,
    gap: 20,
    arrow: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const list = [
    {
      Url: "",
    },
    {
      Url: "",
    },
    {
      Url: "",
    },
    {
      Url: "",
    },
  ];
  return (
    <Box>
      {/* <Box>
        <Slider {...carouselcall} style={{ overflow: "hidden" }}>
            {list.map((el)=>(
              <Box>
                <Image src={el.Url} alt="" style={{ width: "100vw" }}/>
              </Box>
            ))}
          </Slider>
        </Box> */}
     
    </Box>
  );
};
