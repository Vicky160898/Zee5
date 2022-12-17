import { Box } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Premium } from "./Premium";


export const PremiumData = () => {
  const [movie, setMovie] = useState([]);
  const getmovie = async () => {
    let res = await axios.get("http://localhost:8080/admin/movies");
    let data = await res.data;
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
    let res = await axios.get("http://localhost:8080/admin/popular");
    let data = await res.data;
    setPopular(data);
  };

  const [kids, setKids] = useState([]);
  const getkids = async () => {
    let res = await axios.get("http://localhost:8080/admin/kids");
    let data = await res.data;
    setKids(data);
  };
  const [premium, setPremium] = useState([]);
  const getpremium = async () => {
    let res = await axios.get("http://localhost:8080/admin/premium");
    let data = await res.data;
    setPremium(data);
  };
  const [song, setSong] = useState([]);
  const getsong = async () => {
    let res = await axios.get("http://localhost:8080/admin/song");
    let data = await res.data;
    setSong(data);
  };
  const [live, setLive] = useState([]);
  const getlive= async () => {
    let res = await axios.get("http://localhost:8080/admin/music");
    let data = await res.data;
    setLive(data);
  };
  useEffect(() => {
    getmovie();
    getweb();
    getnews();
    getserial();
    getpopular();
    getkids();
    getpremium();
    getsong();
    getlive();
  }, []);

  return (
    <Box>
      
      <Premium data={premium} head="Premium" />
      <Premium data={serial} head="Serial" />
      <Premium data={news} head="News" />
      <Premium data={popular} head="Popular Movies" />
      <Premium data={kids} head="Kids" />
      <Premium data={live} head="Live" />
      <Premium data={web} head="Web-Series" />
      <Premium data={song} head="Songs" />
      <Premium data={movie} head="Movies" />
      
      
    </Box>
  );
};
