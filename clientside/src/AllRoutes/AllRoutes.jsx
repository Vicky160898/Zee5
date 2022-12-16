import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Carousel_data } from "../HomePage_PT/MultiCarousel/Carousel_data";
import Login from "../ComponentsPs/Login/LoginV";
import Signup from "../ComponentsPs/Signup/SignupV";
import Party from "../components-ns/Party";
import VideoPlay from "../Pages-AA/videoPlay/videoplay";
export const AllRoutes = () => {
  return (
    <Box>

      <Routes>
        <Route path="/" element={<Carousel_data/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/plan" element={<Party/>}/>
        <Route path="/:id" element={<VideoPlay/>}/>
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
      </Routes>
    </Box>
  );
};
