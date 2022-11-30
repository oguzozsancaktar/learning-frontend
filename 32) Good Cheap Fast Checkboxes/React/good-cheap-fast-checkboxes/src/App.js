import React, { useState } from "react";
import "./App.css";

function App() {
  const [toogleStates, setToogleStates] = useState({
    good: false,
    cheap: false,
    fast: false,
  });

  const toggleHandler = (event) => {
    const theClickedOne = event.target;
    const id = theClickedOne.id;

    let newState = { ...toogleStates };

    if (id === "good") {
      newState.good = !newState.good;
      // setToogleStates((prevState) => ({
      //   ...prevState,
      //   good: !prevState.good,
      // }));
    } else if (id === "cheap") {
      newState.cheap = !newState.cheap;
      // setToogleStates((prevState) => ({
      //   ...prevState,
      //   cheap: !prevState.cheap,
      // }));
    } else if (id === "fast") {
      newState.fast = !newState.fast;
      // setToogleStates((prevState) => ({
      //   ...prevState,
      //   fast: !prevState.fast,
      // }));
    }

    if (newState.good && newState.cheap && newState.fast) {
      if (theClickedOne.id === "good") {
        newState.fast = false;
      } else if (theClickedOne.id === "cheap") {
        newState.good = false;
      } else if (theClickedOne.id === "fast") {
        newState.cheap = false;
      }
    }

    setToogleStates(newState);
  };

  return (
    <React.Fragment>
      <h2>How do you want your project to be?</h2>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="good"
          className="toggle"
          checked={toogleStates.good}
          onChange={toggleHandler}
        />
        <label htmlFor="good" className="label">
          <div className="ball"></div>
        </label>
        <span>Good</span>
      </div>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="cheap"
          className="toggle"
          checked={toogleStates.cheap}
          onChange={toggleHandler}
        />
        <label htmlFor="cheap" className="label">
          <div className="ball"></div>
        </label>
        <span>Cheap</span>
      </div>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="fast"
          className="toggle"
          checked={toogleStates.fast}
          onChange={toggleHandler}
        />
        <label htmlFor="fast" className="label">
          <div className="ball"></div>
        </label>
        <span>Fast</span>
      </div>
    </React.Fragment>
  );
}

export default App;
