import { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const refs = useRef([]);

  useEffect(() => {
    refs.current[0].focus();
  }, []);

  const keydownHandler = (event) => {
    const id = +event.target.id;
    if (event.key >= 0 && event.key <= 9) {
      event.target.value = "";
      if (id >= 5) return;
      setTimeout(() => refs.current[id + 1].focus(), 10);
    } else if (event.key === "Backspace") {
      if (id <= 0) return;
      setTimeout(() => refs.current[id - 1].focus(), 10);
    }
  };

  return (
    <div className="container">
      <h2>Verify Your Account</h2>
      <p>
        We emailed you the six digit code to cool_guy@email.com <br />
        Enter the code below to confirm your email address.
      </p>
      <div className="code-container">
        {(() => {
          let inputs = [];
          for (let i = 0; i < 6; i++) {
            inputs.push(
              <input
                type="number"
                className="code"
                placeholder="0"
                min="0"
                max="9"
                required
                key={i}
                id={i}
                onKeyDown={keydownHandler}
                ref={(ref) => (refs.current[i] = ref)}
              />
            );
          }
          return inputs;
        })()}
      </div>
      <small className="info">
        This is design only. We didn't actually send you an email as we don't
        have your email, right?
      </small>
    </div>
  );
}

export default App;
