import React, { useState } from "react";
import "./App.css";

const INITIAL_NUMS = [
  { num: 3, className: "in" },
  { num: 2, className: "" },
  { num: 1, className: "" },
  { num: 0, className: "" },
];

function App() {
  const [nums, setNums] = useState(JSON.parse(JSON.stringify(INITIAL_NUMS)));
  const [counterClass, setCounterClass] = useState("counter");
  const [finalClass, setFinalClass] = useState("final");

  const nextToLast = INITIAL_NUMS.length - 1;

  const numAnimationHandler = (event) => {
    const newNums = [...nums];
    const idx = nextToLast - event.target.innerHTML;

    if (event.animationName === "goIn" && idx !== nextToLast) {
      newNums[idx].className = "out";
    } else if (event.animationName === "goOut" && idx < nextToLast) {
      newNums[idx + 1].className = "in";
    } else {
      setCounterClass("counter hide");
      setFinalClass("final show");
    }
    setNums(newNums);
  };

  const replayHandler = () => {
    setCounterClass("counter");
    setFinalClass("final");
    setNums(JSON.parse(JSON.stringify(INITIAL_NUMS)));
  };

  return (
    <React.Fragment>
      <div className={counterClass}>
        <div className="nums">
          {nums.map((num) => {
            return (
              <span
                className={num.className}
                key={num.num}
                onAnimationEnd={numAnimationHandler}
              >
                {num.num}
              </span>
            );
          })}
        </div>
        <h4>Get Ready</h4>
      </div>

      <div className={finalClass}>
        <h1>GO</h1>
        <button id="replay" onClick={replayHandler}>
          Replay
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
