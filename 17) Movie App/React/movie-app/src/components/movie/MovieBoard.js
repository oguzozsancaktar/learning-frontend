import React from "react";
import { useSelector } from "react-redux";
import Movie from "./Movie";
import "./MovieBoard.module.css";

const MovieBoard = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <main id="main">
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </main>
  );
};

export default MovieBoard;
