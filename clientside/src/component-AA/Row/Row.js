import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";
import { Box, Image, Skeleton, Stack } from "@chakra-ui/react";

const Rows = ({ title, isLargeRow = false }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState(false);
 

  const fetchData = async () => {
    const request = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=57aae2206da7dc6e06f17197a51211ba&language=en-US");
    setMovies(request.data.results);
    setLoading(false);
    return request;
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Stack>
        <Skeleton startColor='white' endColor='orange.500' height="60px" />
        <Skeleton startColor='white' endColor='orange.500' height="60px" />
        <Skeleton startColor='white' endColor='orange.500' height="20px" />
      </Stack>
    );
  }

  return (
    <Box className="row">
      <h2 className="row__title">{title}</h2>
      <Box className={`row__posters ${isLargeRow && "row__postersLarge"}`}>
        {movies
          ? movies.map((movie) => (
            
              <Image  onMouseEnter={() => setState(true)}
              onMouseLeave={() => setState(false)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))
          : ""}
        ;
      </Box>
    </Box>
  );
};

export default Rows;
