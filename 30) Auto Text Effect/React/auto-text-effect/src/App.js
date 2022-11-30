import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState();
  const [speed, setSpeed] = useState(300);

  const fullText = "We Love Programming!";

  useEffect(() => {
    let idx = 1;
    let timeout;
    function writeText() {
      setText(fullText.slice(0, idx));
      idx++;

      if (idx > fullText.length) {
        idx = 1;
      }
      console.log(speed);
      timeout = setTimeout(writeText, speed);
    }

    writeText();
    return () => clearTimeout(timeout);
  }, [speed]);

  const speedChangeHandler = (event) => {
    setSpeed(300 / event.target.value);
  };

  return (
    <div className="container">
      <h1 id="text">{text}</h1>

      <div className="speed">
        <label>Speed:</label>
        <input
          type="number"
          name="speed"
          id="speed"
          min="1"
          defaultValue="1"
          max="5"
          step="1"
          onChange={speedChangeHandler}
        />
      </div>
    </div>
  );
}

export default App;
