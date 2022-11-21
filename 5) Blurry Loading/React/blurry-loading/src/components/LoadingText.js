import { scale } from "./Util";
import classes from "./LoadingText.module.css";

const LoadingText = (props) => {
  return (
    <div
      className={classes["loading-text"]}
      style={{ opacity: scale(props.load, 0, 100, 1, 0) }}
    >
      {props.load}%
    </div>
  );
};

export default LoadingText;
