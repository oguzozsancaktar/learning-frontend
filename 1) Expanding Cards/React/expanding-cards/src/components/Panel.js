import React from "react";
import classes from "./Panel.module.css";

const Panel = (props) => {
  let inlineClass = classes.panel;
  inlineClass += props.isActive ? " " + classes.active : "";

  const setActivePanel = () => {
    props.onClick(props.title);
  };

  return (
    <div
      className={inlineClass}
      style={{ backgroundImage: `url(${props.url})` }}
      onClick={setActivePanel}
    >
      <h3>{props.title}</h3>
    </div>
  );
};

export default Panel;
