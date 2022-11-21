import { scale } from "./Util";
import classes from "./Background.module.css";

const Background = (props) => {
  return (
    <section
      className={classes.bg}
      style={{ filter: `blur(${scale(props.load, 0, 100, 30, 0)}px)` }}
    ></section>
  );
};

export default Background;
