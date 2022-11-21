import React from "react";
import classes from "./Container.module.css";

const Split = (props) => {
  const inlineStyle =
    props.inlineStyle === "right"
      ? `${classes.split} ${classes.right}`
      : `${classes.split} ${classes.left}`;

  const mouseEnterHandler = (event) => {
    props.addHover(
      props.inlineStyle === "right" ? "hover-right" : "hover-left"
    );
  };

  const mouseLeaveHandler = (event) => {
    props.removeHover(
      props.inlineStyle === "right" ? "hover-right" : "hover-left"
    );
  };

  return (
    <div
      className={inlineStyle}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <h1>{props.title}</h1>
      <a href="www.google.com" className={classes.btn}>
        Buy Now
      </a>
    </div>
  );
};

export default Split;
