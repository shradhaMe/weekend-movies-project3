import React, { useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import { Movie } from "./Movie";
import Form from './Form';

const Movies = (props) => {
  const [movies, setMovies] = useState(null);

  const fetctMovies = async (movieName) => {
    const res = await axios({
      url: "https://api.themoviedb.org/3/search/movie",
      method: "GET",
      dataResponse: "json",
      params: {
        api_key: "9b4cc661bf8622c89299a0070c561412",
        query: movieName,
        language: 'en-US',
        include_adult: 'false',
        page: 1,
      },
    });

    setMovies(res.data.results);
  }

  const onSubmit = (value) => {
    fetctMovies(value);
  }

  return (
    <>
      <Form onSubmit={onSubmit} />
      {movies && movies.length === 0 && <p className="error">Your search did not return any movies. Please try again with another search.</p>}
      <MoviesWrapper>
        {movies && movies.map((movieDetails) => (
          <Movie movieDetails={movieDetails} />
        ))}
      </MoviesWrapper>
    </>

  );
};

const MoviesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
`;

export { Movies };
