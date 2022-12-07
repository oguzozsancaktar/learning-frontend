import { useState, useEffect } from "react";
import "./GameScreen.css";

const GameScreen = (props) => {
  const [time, setTime] = useState();
  const [seconds, setSeconds] = useState(0);
  const [score, setScore] = useState(0);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [insects, setInsects] = useState([
    {
      src: props.selectedInsect.src,
      alt: props.selectedInsect.alt,
      caught: false,
      style: {
        top: `100px`,
        left: `200px`,
      },
      imgStyle: {
        transform: `rotate(${Math.random() * 360}deg)`,
      },
    },
  ]);

  useEffect(() => {
    function increaseTime() {
      let currentSec = seconds;
      let m = Math.floor(currentSec / 60);
      let s = currentSec % 60;
      m = m < 10 ? `0${m}` : m;
      s = s < 10 ? `0${s}` : s;
      setTime(`Time: ${m}:${s}`);
      currentSec++;
      setSeconds(currentSec);
    }

    const timeInterval = setInterval(increaseTime, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [time, seconds]);

  function createInsect() {
    const { x, y } = getRandomLocation();
    const newInsects = insects;

    const newInsect = {
      src: props.selectedInsect.src,
      alt: props.selectedInsect.alt,
      style: {
        top: `${y}px`,
        left: `${x}px`,
      },
      imgStyle: {
        transform: `rotate(${Math.random() * 360}deg)`,
      },
    };

    newInsects.push(newInsect);

    setInsects(newInsects);
  }

  const catchInsect = (event) => {
    increaseScore();
    event.target.remove();
    addInsects();
  };

  function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
  }

  function increaseScore() {
    setScore((prevScore) => ++prevScore);

    if (score > 19) {
      setIsMessageVisible(true);
    }
  }

  function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
  }

  return (
    <div className="screen game-container" id="game-container">
      <h3 id="time" className="time">
        {time}
      </h3>
      <h3 id="score" className="score">
        Score: {score}
      </h3>
      <h5
        id="message"
        className={isMessageVisible ? "message visible" : "message"}
      >
        Are you annoyed yet? <br />
        You are playing an impossible game!!
      </h5>

      {insects.map((insect, idx) => {
        return (
          <div
            className="insect"
            // className={insect.caught ? "insect caught" : "insect"}
            style={insect.style}
            onClick={catchInsect}
            key={idx}
            id={idx}
          >
            <img src={insect.src} alt={insect.alt} style={insect.imgStyle} />
          </div>
        );
      })}
    </div>
  );
};

export default GameScreen;
