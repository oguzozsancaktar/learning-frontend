import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [key, setKey] = useState(null);
  const [keyCode, setKeyCode] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      setKey(event.key === " " ? "Space" : event.key);
      setKeyCode(event.keyCode);
      setCode(event.code);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div id="insert">
      {key && (
        <div className="key">
          {key}
          <small>event.key</small>
        </div>
      )}
      {keyCode && (
        <div className="key">
          {keyCode}
          <small>event.keyCode</small>
        </div>
      )}
      {code && (
        <div className="key">
          {code}
          <small>event.code</small>
        </div>
      )}
      <div className="key">Press any key to get the keyCode</div>
    </div>
  );
}

export default App;
