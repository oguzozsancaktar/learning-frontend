import { useState, useRef } from "react";
import "./App.css";

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const refs = useRef([]);

  const getSelected = () => {
    let answer;
    refs.current.forEach((ref) => {
      if (ref.checked) {
        answer = ref.id;
      }
    });

    return answer;
  };

  const deselectAnswers = () => {
    refs.current.forEach((ref) => {
      ref.checked = false;
    });
  };

  const submitHandler = () => {
    const answer = getSelected();

    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        setScore((prevScore) => ++prevScore);
      }

      if (currentQuiz + 1 < quizData.length) {
        setCurrentQuiz((prevQuiz) => ++prevQuiz);
        deselectAnswers();
      } else {
        setQuizEnd(true);
      }
    }
  };

  const reloadHandler = () => {
    window.location.reload(false);
  };

  return (
    <div className="quiz-container" id="quiz">
      {quizEnd && (
        <div>
          <h2>
            You answered {score}/{quizData.length} questions correctly
          </h2>
          <button onClick={reloadHandler}>Reload</button>
        </div>
      )}
      {!quizEnd && (
        <div>
          <div className="quiz-header">
            <h2 id="question">{quizData[currentQuiz].question}</h2>
            <ul>
              <li>
                <input
                  type="radio"
                  name="answer"
                  id="a"
                  className="answer"
                  ref={(ref) => (refs.current[0] = ref)}
                />
                <label htmlFor="a" id="a_text">
                  {quizData[currentQuiz].a}
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="answer"
                  id="b"
                  className="answer"
                  ref={(ref) => (refs.current[1] = ref)}
                />
                <label htmlFor="b" id="b_text">
                  {quizData[currentQuiz].b}
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="answer"
                  id="c"
                  className="answer"
                  ref={(ref) => (refs.current[2] = ref)}
                />
                <label htmlFor="c" id="c_text">
                  {quizData[currentQuiz].c}
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="answer"
                  id="d"
                  className="answer"
                  ref={(ref) => (refs.current[3] = ref)}
                />
                <label htmlFor="d" id="d_text">
                  {quizData[currentQuiz].d}
                </label>
              </li>
            </ul>
          </div>
          <button id="submit" onClick={submitHandler}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
