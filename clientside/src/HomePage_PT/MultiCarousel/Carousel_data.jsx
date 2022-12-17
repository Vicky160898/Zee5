import { Box } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MultiCarousel } from "./MultiCarousel";
import { VideoCarousel } from "../Carousel/VideoCarousel";

export const Carousel_data = () => {
  const [movie, setMovie] = useState([]);
  const getmovie = async () => {
    let res = await axios.get("http://localhost:8080/admin/movies");
    let data = await res.data;
    console.log(data)
    setMovie(data);
  };

  const [web, setWeb] = useState([]);
  const getweb = async () => {
    let res = await axios.get("http://localhost:8080/admin/web-series");
    let data = await res.data;
    setWeb(data);
  };
  const [news, setNews] = useState([]);
  const getnews = async () => {
    let res = await axios.get("http://localhost:8080/admin/news");
    let data = await res.data;
    setNews(data);
  };

  const [serial, setSerial] = useState([]);
  const getserial = async () => {
    let res = await axios.get("http://localhost:8080/admin/serial");
    let data = await res.data;
    setSerial(data);
  };

  const [popular, setPopular] = useState([]);
  const getpopular = async () => {
    let res = await axios.get("http://localhost:8080/admin/Popular-Movies");
    let data = await res.data;
    setPopular(data);
  };

  useEffect(() => {
    getmovie();
    getweb();
    getnews();
    getserial();
    getpopular();
  }, []);

  return (
    <Box>
      <VideoCarousel/>
      <MultiCarousel data={movie} head="Movies" />
      <MultiCarousel data={web} head="Web-Series" />
      <MultiCarousel data={serial} head="Serial" />
      <MultiCarousel data={news} head="News" />
      <MultiCarousel data={popular} head="Popular-Movies" />
    </Box>
  );
};
