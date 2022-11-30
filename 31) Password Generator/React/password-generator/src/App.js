import { useState, useRef } from "react";
import { generatePassword } from "./PasswordGenerator";
import { BsClipboard } from "react-icons/bs";
import "./App.css";

function App() {
  const [password, setPassword] = useState();
  const lengthRef = useRef();
  const lowerRef = useRef();
  const upperRef = useRef();
  const numberRef = useRef();
  const symbolRef = useRef();

  const generatePasswordHandler = () => {
    const generatedPassword = generatePassword(
      lowerRef.current.checked,
      upperRef.current.checked,
      numberRef.current.checked,
      symbolRef.current.checked,
      +lengthRef.current.value
    );

    setPassword(generatedPassword);
  };

  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="result-container">
        <span id="result">{password}</span>
        <button className="btn" id="clipboard">
          <i>
            <BsClipboard />
          </i>
        </button>
      </div>
      <div className="settings">
        <div className="setting">
          <label>Password Length</label>
          <input
            type="number"
            id="length"
            min="4"
            max="20"
            defaultValue="20"
            ref={lengthRef}
          />
        </div>
        <div className="setting">
          <label>Include uppercase letters</label>
          <input
            type="checkbox"
            id="uppercase"
            defaultChecked="checked"
            ref={upperRef}
          />
        </div>
        <div className="setting">
          <label>Include lovercase letters</label>
          <input
            type="checkbox"
            id="lowercase"
            defaultChecked="checked"
            ref={lowerRef}
          />
        </div>
        <div className="setting">
          <label>Include numbers</label>
          <input
            type="checkbox"
            id="numbers"
            defaultChecked="checked"
            ref={numberRef}
          />
        </div>
        <div className="setting">
          <label>Include symbols</label>
          <input
            type="checkbox"
            id="symbols"
            defaultChecked="checked"
            ref={symbolRef}
          />
        </div>
      </div>
      <button
        className="btn btn-large"
        id="generate"
        onClick={generatePasswordHandler}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
