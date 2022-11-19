import { useState } from "react";
import classes from "./SearchWidget.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchWidget = () => {
  const [isActive, setIsActive] = useState(false);

  const innerStyle = isActive
    ? `${classes.search} ${classes.active}`
    : classes.search;

  const clickHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={innerStyle}>
      <input type="text" className={classes.input} placeholder="Search..." />
      <button className={classes.btn} onClick={clickHandler}>
        <BiSearchAlt2 />
      </button>
    </div>
  );
};

export default SearchWidget;
