import React from "react";
import "./App.css";

const SQUARE = 500;
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

function App() {
  const mouseOverHandler = (event) => {
    setColor(event.target);
  };

  const mouseOutHandler = (event) => {
    removeColor(event.target);
  };

  function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="container" id="container">
      {(() => {
        let squares = [];
        for (let i = 0; i < SQUARE; i++) {
          squares.push(
            <div
              key={i}
              className="square"
              onMouseOver={mouseOverHandler}
              onMouseOut={mouseOutHandler}
            ></div>
          );
        }
        return squares;
      })()}
    </div>
  );
}

export default App;
