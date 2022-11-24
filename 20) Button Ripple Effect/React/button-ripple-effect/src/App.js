import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inlineStyle, setInlineStyle] = useState(null);

  useEffect(() => {
    setTimeout(() => setInlineStyle(null), 400);
  }, [inlineStyle]);

  const clickHandler = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const buttonTop = event.target.offsetTop;
    const buttonLeft = event.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const newStyle = { top: yInside + "px", left: xInside + "px" };
    setInlineStyle(null);

    setInlineStyle(newStyle);
  };

  return (
    <button className="ripple" onClick={clickHandler}>
      Click Me
      {inlineStyle && <span className="circle" style={inlineStyle}></span>}
    </button>
  );
}

export default App;
