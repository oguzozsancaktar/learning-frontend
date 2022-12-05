import { useState } from "react";
import "./App.css";

const rates = {
  Satisfied: "Satisfied",
  Neutral: "Neutral",
  Unhappy: "Unhappy",
};

const initialRatingClass = "rating";
const activeRatingClass = "rating active";

function App() {
  const [isRated, setIsRated] = useState(false);
  const [selectedRating, setSelectedRating] = useState(rates.Satisfied);
  const [ratingClassList, setRatingClassList] = useState({
    Satisfied: activeRatingClass,
    Neutral: initialRatingClass,
    Unhappy: initialRatingClass,
  });

  const setRatingHandler = (event) => {
    const newClassList = {
      Satisfied: initialRatingClass,
      Neutral: initialRatingClass,
      Unhappy: initialRatingClass,
    };

    if (event.target.id === rates.Satisfied) {
      console.log("satisfied");
      newClassList.Satisfied = activeRatingClass;
      setSelectedRating(rates.Satisfied);
    } else if (event.target.id === rates.Neutral) {
      console.log("neutral");
      newClassList.Neutral = activeRatingClass;
      setSelectedRating(rates.Neutral);
    } else if (event.target.id === rates.Unhappy) {
      console.log("unhappy");
      newClassList.Unhappy = activeRatingClass;
      setSelectedRating(rates.Unhappy);
    }

    setRatingClassList(newClassList);
  };

  const rateHandler = () => {
    setIsRated(true);
  };

  return (
    <div id="panel" className="panel-container">
      {isRated && (
        <div>
          <strong>Thank You!</strong>
          <br />
          <strong>Feedback: {selectedRating}</strong>
          <p>We'll use your feedback to improve our customer support</p>
        </div>
      )}
      {!isRated && (
        <div>
          <strong>
            How satisfied are you with our <br />
            customer support performance?
          </strong>
          <div className="ratings-container">
            <div
              className={ratingClassList.Unhappy}
              id={rates.Unhappy}
              onClick={setRatingHandler}
            >
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png"
                alt=""
                id={rates.Unhappy}
              />
              <small id={rates.Unhappy}>Unhappy</small>
            </div>

            <div
              className={ratingClassList.Neutral}
              id={rates.Neutral}
              onClick={setRatingHandler}
            >
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png"
                alt=""
                id={rates.Neutral}
              />
              <small id={rates.Neutral}>Neutral</small>
            </div>

            <div
              className={ratingClassList.Satisfied}
              id={rates.Satisfied}
              onClick={setRatingHandler}
            >
              <img
                src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png"
                alt=""
                id={rates.Satisfied}
              />
              <small id={rates.Satisfied}>Satisfied</small>
            </div>
          </div>
          <button className="btn" id="send" onClick={rateHandler}>
            Send Review
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
