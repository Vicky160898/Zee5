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
      title: "video1",
      src: "https://www.youtube.com/watch?v=joZRFygCD5w",
      credit: "Video by Zee",
    },
    {
      id: 2,
      title: "video2",
      src: "https://www.youtube.com/watch?v=LP26qiLkZ_Y",
      credit: "Video by Zee",
    },
    {
      id: 3,
      title: "video3",
      src: "https://www.youtube.com/watch?v=emP7ArfCcF8",
      credit: "Video by Zee",
    },
    {
      id: 4,
      title: "video4",
      src: "https://www.youtube.com/watch?v=QAvzUoOJmK0",
      credit: "Video by Zee",
    },
    {
      id: 5,
      title: "video5",
      src: "https://www.youtube.com/watch?v=jl0SRPOqlHA",
      credit: "Video by Zee",
    },
  ];
  return (
    <Box mt="5.7%"  marginTop={{sm:"20%",md:"8%",lg:"5%"}}>
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
