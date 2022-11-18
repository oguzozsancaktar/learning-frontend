import classes from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  return (
    <div className={classes.progress} style={{ width: props.width }}></div>
  );
};

export default ProgressBar;
