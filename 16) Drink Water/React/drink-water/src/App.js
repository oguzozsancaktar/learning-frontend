import React, { useState } from "react";
import "./App.css";

let smallCups = new Array(8).fill().map((u) => {
  return { liter: "250 ml", class: "cup cup-small" };
});

function App() {
  const [fullCupCount, setFullCupCount] = useState(0);

  let percentageStyle = { visibility: "hidden", height: 0 };
  let remainedStyle = { visibility: "hidden" };
  let percentageText = "";
  let litersText = "";

  const clickHandler = (event) => {
    let clickedCup = event.target.id;

    if (clickedCup == fullCupCount) {
      setFullCupCount((prevValue) => prevValue - 1);
      clickedCup -= 1;
    }

    smallCups.forEach((cup, idx) => {
      if (idx < clickedCup) {
        cup.class = "cup cup-small full";
      } else {
        cup.class = "cup cup-small";
      }
    });

    setFullCupCount(clickedCup);
    updateBigCup();
  };

  const updateBigCup = () => {
    const totalCups = smallCups.length;
    if (fullCupCount === 0) {
      percentageStyle = { visibility: "hidden", height: 0 };
    } else {
      percentageStyle = {
        visibility: "visible",
        height: `${(fullCupCount / totalCups) * 330}px`,
      };
      percentageText = `${(fullCupCount / totalCups) * 100}%`;
    }

    if (fullCupCount == totalCups) {
      remainedStyle = { visibility: "hidden", height: 0 };
    } else {
      remainedStyle = { visibility: "visible" };
      litersText = `${2 - (250 * fullCupCount) / 1000}`;
    }
  };

  updateBigCup();

  return (
    <div className="container">
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>

      <div className="cup">
        <div className="remained" id="remained" style={remainedStyle}>
          <span id="liters"> {litersText} </span>
          <small>Remained</small>
        </div>
        <div className="percentage" id="percentage" style={percentageStyle}>
          {percentageText}
        </div>
      </div>

      <div className="text">
        Select how many glasses of water that you have drank
      </div>

      <div className="cups">
        {smallCups.map((cup, idx) => {
          return (
            <div
              className={cup.class}
              key={idx}
              id={idx + 1}
              onClick={clickHandler}
            >
              {cup.liter}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
