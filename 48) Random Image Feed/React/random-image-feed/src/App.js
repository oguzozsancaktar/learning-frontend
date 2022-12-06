import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const unsplashURL = "https://source.unsplash.com/random/";
    const rows = 5;
    const imgSrcArr = [];

    function getRandomSize() {
      return `${getRandomNr()}x${getRandomNr()}`;
    }

    function getRandomNr() {
      return Math.floor(Math.random() * 10) + 300;
    }

    for (let i = 0; i < rows * 3; i++) {
      const img = `${unsplashURL}${getRandomSize()}`;
      imgSrcArr.push(img);
    }

    setImgs(imgSrcArr);
  }, []);

  return (
    <React.Fragment>
      <h1>Random Image Feed</h1>
      <div class="container">
        {imgs.map((img, idx) => {
          return <img src={img} key={idx} alt={idx} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
