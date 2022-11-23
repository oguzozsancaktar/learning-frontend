import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { moviesActions } from "../../store/movies";
import { getMoviesByQuery } from "../utils/MovieUtil";
import classes from "./Header.module.css";

const Header = () => {
  const [searchedText, setSearchedText] = useState("");
  const searchTermRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const searchTerm = searchTermRef.current.value;

    if (searchTerm && searchTerm !== "") {
      getQuerriedMovies(searchTerm);

      setSearchedText("");
    } else {
      window.location.reload();
    }
  };

  const getQuerriedMovies = async (searchTerm) => {
    dispatch(moviesActions.getMovies(await getMoviesByQuery(searchTerm)));
  };

  return (
    <header>
      <form id="form" onSubmit={submitHandler}>
        <input
          type="text"
          id="search"
          className={classes.search}
          placeholder="Search"
          ref={searchTermRef}
          onChange={(event) => setSearchedText(event.target.value)}
          value={searchedText}
        />
      </form>
    </header>
  );
};

export default Header;
