import React, { useEffect, useState } from "react";
import Background from "./components/Background";
import LoadingText from "./components/LoadingText";
import "./App.css";

function App() {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    let temp = 0;

    const interval = setInterval(() => {
      temp++;
      setLoad(temp);
      if (temp > 99) {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [setLoad]);

  return (
    <React.Fragment>
      <Background load={load} />
      <LoadingText load={load} />
    </React.Fragment>
  );
}

export default App;
