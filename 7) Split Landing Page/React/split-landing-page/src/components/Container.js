import { useState } from "react";
import Split from "./Split";
import classes from "./Container.module.css";

const Container = () => {
  const [inlineStyle, setInlineStyle] = useState(classes.container);

  const addHoverHandler = (action) => {
    action === "hover-right"
      ? setInlineStyle(`${classes.container} ${classes["hover-right"]}`)
      : setInlineStyle(`${classes.container} ${classes["hover-left"]}`);
  };

  const removeHoverHandler = (action) => {
    setInlineStyle(classes.container);
  };

  return (
    <div className={inlineStyle}>
      <Split
        inlineStyle="right"
        title="XBOX Series X"
        addHover={removeHoverHandler}
        removeHover={removeHoverHandler}
      />
      <Split
        inlineStyle="left"
        title="Playstation 5"
        addHover={addHoverHandler}
        removeHover={removeHoverHandler}
      />
    </div>
  );
};

export default Container;
