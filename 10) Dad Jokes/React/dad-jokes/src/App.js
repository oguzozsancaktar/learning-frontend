import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    generateJoke();
  }, []);

  const generateJoke = async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    setJoke(data.joke);
  };

  return (
    <div className="container">
      <h3>Don't Laugh Challange</h3>
      <div id="joke" className="joke">
        {joke}
      </div>
      <button id="jokeBtn" className="btn" onClick={generateJoke}>
        Get Another Joke
      </button>
    </div>
  );
}

export default App;
