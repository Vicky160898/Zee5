import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MultiCarousel } from './MultiCarousel';

export const Carousel_data = () => {
    const [trend,setTrend] = useState([]);
    const getTrend =async()=>{
        let res = await axios.get("https://fakestoreapi.com/products");
        let data = await res.data;
        setTrend(data);
    }
// console.log(trend);
  

        useEffect(()=>{
        getTrend();
    },[])


  return (
    <Box>
        <MultiCarousel data={trend} head="Trending Now"/>
    </Box>
  )
}
