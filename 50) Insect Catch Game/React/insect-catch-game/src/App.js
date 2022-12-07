import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import InsectSelection from "./components/InsectSelection";
import GameScreen from "./components/GameScreen";
import "./App.css";

function App() {
  const [stage, setStage] = useState(0);
  const [insect, setInsect] = useState();

  const stageHandler = (event) => {
    if (stage === 1) {
      const insect = {
        src: event.target.getAttribute("src"),
        alt: event.target.getAttribute("alt"),
      };
      setInsect(insect);
    }

    setStage((prevStage) => ++prevStage);
  };

  return (
    <React.Fragment>
      {stage === 0 && <MainMenu onStageChange={stageHandler} />}
      {stage === 1 && <InsectSelection onStageChange={stageHandler} />}
      {stage === 2 && <GameScreen selectedInsect={insect} />}
    </React.Fragment>
  );
}

export default App;
