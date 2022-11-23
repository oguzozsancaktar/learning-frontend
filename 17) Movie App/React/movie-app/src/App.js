import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { moviesActions } from "./store/movies";
import { getAllMovies } from "./components/utils/MovieUtil";
import Header from "./components/UI/Header";
import MovieBoard from "./components/movie/MovieBoard";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(moviesActions.getMovies(await getAllMovies()));
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <MovieBoard />
    </React.Fragment>
  );
}

export default App;
