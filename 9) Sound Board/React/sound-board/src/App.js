import React from "react";
import applause from "./sounds/applause.mp3";
import boo from "./sounds/boo.mp3";
import gasp from "./sounds/gasp.mp3";
import tada from "./sounds/tada.mp3";
import victory from "./sounds/victory.mp3";
import wrong from "./sounds/wrong.mp3";
import "./App.css";

function App() {
  const DUMMY_SONGS = [
    {
      id: "applause",
      audio: new Audio(applause),
    },
    {
      id: "boo",
      audio: new Audio(boo),
    },
    {
      id: "gasp",
      audio: new Audio(gasp),
    },
    {
      id: "tada",
      audio: new Audio(tada),
    },
    {
      id: "victory",
      audio: new Audio(victory),
    },
    {
      id: "wrong",
      audio: new Audio(wrong),
    },
  ];

  const playHandler = (event) => {
    stopSongs();
    const song = DUMMY_SONGS.find((song) => song.id === event.target.innerHTML);
    song.audio.play();
  };

  const stopSongs = () => {
    DUMMY_SONGS.forEach((song) => {
      song.audio.pause();
      song.audio.currentTime = 0;
    });
  };

  return (
    <React.Fragment>
      {DUMMY_SONGS.map((song) => {
        return (
          <button className="btn" onClick={playHandler} key={song.id}>
            {song.id}
          </button>
        );
      })}
    </React.Fragment>
  );
}

export default App;
