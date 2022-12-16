import React from "react";
import "./VideoCarousel.css";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import { Box, Text } from "@chakra-ui/react";
export const VideoCarousel = () => {
  const videoSetting = [
    {
      id: 1,
      title: "Kumkum Bhagya",
      src: "https://www.youtube.com/watch?v=joZRFygCD5w",
      credit: "Zee TV",
    },
    {
      id: 2,
      title: "Kundali Bhagya",
      src: "https://www.youtube.com/watch?v=LP26qiLkZ_Y",
      credit: "Zee TV",
    },
    {
      id: 3,
      title: "Radha Mohan",
      src: "https://www.youtube.com/watch?v=emP7ArfCcF8",
      credit: "Zee TV",
    },
    {
      id: 4,
      title: "Kundali Bhagya",
      src: "https://www.youtube.com/watch?v=QAvzUoOJmK0",
      credit: "Zee TV",
    },
    {
      id: 5,
      title: "Bhagya Lakshmi",
      src: "https://www.youtube.com/watch?v=jl0SRPOqlHA",
      credit: "Zee TV",
    },
  ];
  return (
    <Box  marginTop={{base:"18%",md:"9%",lg:"6%"}}>
      <Carousel>
        {videoSetting.map((item) => (
          <Carousel.Item key={item.id}>
            <ReactPlayer
              url={item.src}
              width={{md:"80%",md:"100%",lg:"100%"}}
              pip={true}
              controls={true}
              playing={true}
            />
            <Carousel.Caption>
              <Text>{item.title}</Text>
              <Text>{item.credit}</Text>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};
