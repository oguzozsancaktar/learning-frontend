import classes from "./Circle.module.css";

const Circle = (props) => {
  const inlineClass = props.isActive
    ? `${classes.circle} ${classes.active}`
    : classes.circle;

  return <div className={inlineClass}>{props.number}</div>;
};

export default Circle;
