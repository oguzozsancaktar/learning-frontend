import { IMG_PATH } from "../utils/MovieUtil";
import classes from "./Movie.module.css";

const Movie = (props) => {
  const voteColorClass =
    props.movie.vote_average >= 8
      ? classes.green
      : props.movie.vote_average >= 5
      ? classes.orange
      : classes.red;

  return (
    <div className={classes.movie}>
      <img src={IMG_PATH + props.movie.poster_path} alt={props.movie.title} />
      <div className={classes["movie-info"]}>
        <h3>{props.movie.title}</h3>
        <span className={voteColorClass}>{props.movie.vote_average}</span>
      </div>
      <div className={classes.overview}>
        <h3>Overview</h3>
        {props.movie.overview}
      </div>
    </div>
  );
};

export default Movie;
