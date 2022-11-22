import { useState } from "react";
import { BiCaretDown, BiX } from "react-icons/bi";
import classes from "./FAQ.module.css";

const FAQ = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => setIsActive((prev) => !prev);

  const inlineStyle = isActive
    ? `${classes.faq} ${classes.active}`
    : classes.faq;

  return (
    <div className={inlineStyle}>
      <h3 className={classes["faq-title"]}>
        What do you call someone with no body and no nose?
      </h3>
      <p className={classes["faq-text"]}>Nobody knows.</p>
      <button className={classes["faq-toggle"]} onClick={toggleHandler}>
        <BiCaretDown className={classes["fa-chevron-down"]} />
        <BiX className={classes["fa-times"]} />
      </button>
    </div>
  );
};

export default FAQ;
