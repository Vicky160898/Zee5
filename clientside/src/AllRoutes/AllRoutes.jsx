import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Carousel_data } from "../HomePage_PT/MultiCarousel/Carousel_data";
import Login from "../ComponentsPs/Login/LoginV";
import Signup from "../ComponentsPs/Signup/SignupV";
import Party from "../components-ns/Party";
import VideoPlay from "../Pages-AA/videoPlay/videoplay";
import { LiveTVData } from "../PagesPT/LiveTV/LiveTVData";
import { TVShowsData } from "../PagesPT/TVShows/TVShowsData";
import { KidsData } from "../PagesPT/Kids/KidsData";
import { SongData } from "../PagesPT/Song/SongData";
import { PremiumData } from "../PagesPT/Premium/PremiumData";
import { MoviesData } from "../PagesPT/Movies/MoviesData";
import { Popular } from "../PagesPT/Popular/Popular";
import { News } from "../PagesPT/News/News";
import { WebSeries } from "../PagesPT/WebSeries/WebSeries";
import { WebSeriesData } from "../PagesPT/WebSeries/WebSeriesData";
import { NewsData } from "../PagesPT/News/NewsData";
import { PopularData } from "../PagesPT/Popular/PopularData";
import { SerialData } from "../PagesPT/Serial/SerialData";
export const AllRoutes = () => {
  return (
    <Box>

      <Routes>
        <Route path="/" element={<Carousel_data/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/plan" element={<Party/>}/>
        <Route path="/:id" element={<VideoPlay/>}/>
        <Route path="/serial" element={<SerialData/>}/>
        <Route path="/live" element={<LiveTVData/>}/>
        <Route path="/kids" element={<KidsData/>}/>
        <Route path="/song" element={<SongData/>}/>
        <Route path="/premium" element={<PremiumData/>}/>
        <Route path="/movies" element={<MoviesData/>}/>
        <Route path="/popular" element={<PopularData/>}/>
        <Route path="/news" element={<NewsData/>}/>
        <Route path="/web-series" element={<WebSeriesData/>}/>
        <Route path="/serial" element={<TVShowsData/>}/>
      </Routes>
    </Box>
  );
};
