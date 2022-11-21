import { useState, useRef, useEffect } from "react";
import classes from "./Box.module.css";

const Box = () => {
  const boxRef = useRef(null);
  const [innerStyle, setInnerStyle] = useState(
    `${classes.box} ${classes.show}`
  );
  const triggerBottom = (window.innerHeight / 5) * 4;

  useEffect(() => {
    const handleScroll = (event) => {
      const boxTop = boxRef.current?.getBoundingClientRect().top ?? 0;
      setInnerStyle(
        triggerBottom > boxTop ? `${classes.box} ${classes.show}` : classes.box
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={innerStyle} ref={boxRef}>
      <h2>Content</h2>
    </div>
  );
};

export default Box;
