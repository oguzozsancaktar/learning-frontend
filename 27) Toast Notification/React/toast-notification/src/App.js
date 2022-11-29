import React, { useRef } from "react";
import "./App.css";

const DUMMY_MESSAGES = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

function App() {
  const toastsRef = useRef();

  const clickHandler = () => {
    const message =
      DUMMY_MESSAGES[Math.floor(Math.random() * DUMMY_MESSAGES.length)];

    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = message;

    toastsRef.current.appendChild(notif);

    setTimeout(() => {
      notif.remove();
    }, 3000);
  };

  return (
    <React.Fragment>
      <div id="toasts" ref={toastsRef}></div>

      <button className="btn" id="button" onClick={clickHandler}>
        Show Notification
      </button>
    </React.Fragment>
  );
}

export default App;
