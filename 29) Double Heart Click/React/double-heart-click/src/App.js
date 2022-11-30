import React, { useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import "./App.css";

function App() {
  const [timesClicked, setTimesClicked] = useState(0);
  const [showIcon, setShowIcon] = useState(false);

  const icon = (
    <i>
      <BsFillSuitHeartFill
        className="heart"
        style={{ top: "600px", left: "500px" }}
      />
    </i>
  );

  const likeHandler = (event) => {
    setTimesClicked((prevValue) => ++prevValue);

    setShowIcon(true);

    setTimeout(() => setShowIcon(false), 1000);
  };

  return (
    <React.Fragment>
      <h3>Double click on the image to {icon} it</h3>
      <small>
        You like it <span id="times">{timesClicked}</span> times
      </small>
      <div className="loveMe" onDoubleClick={likeHandler}>
        {showIcon && icon}
      </div>
    </React.Fragment>
  );
}

export default App;
