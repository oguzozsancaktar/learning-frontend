import classes from "./Slide.module.css";

const Slide = (props) => {
  const inlineClasses = props.slide.isActive
    ? `${classes.slide} ${classes.active}`
    : classes.slide;

  const inlineStyle = { backgroundImage: `url(${props.slide.url})` };

  return <div className={inlineClasses} style={inlineStyle}></div>;
};

export default Slide;
