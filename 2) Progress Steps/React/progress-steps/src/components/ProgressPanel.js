import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Circle from "./Circle";
import Button from "./Button";
import classes from "./ProgressPanel.module.css";

const DUMMY_CIRCLES = [
  { number: 1, isActive: false },
  { number: 2, isActive: false },
  { number: 3, isActive: false },
  { number: 4, isActive: false },
];

const ProgressPanel = () => {
  const [activeCircles, setActiveCircles] = useState([1]);
  const [currentActiveCount, setCurrentActiveCount] = useState(1);
  const [prevButtonIsDisabled, setPrevButtonIsDisabled] = useState(true);
  const [nextButtonIsDisabled, setNextButtonIsDisabled] = useState(false);
  const [progressBarLevel, setProgressBarLevel] = useState("0%");

  let newActiveCirclesCount = 0;

  const addActiveCircle = (number) => {
    setActiveCircles((previousCircles) => {
      const newArr = [...previousCircles];
      newArr.push(number);
      return newArr;
    });
  };

  const removeActiveCircle = (number) => {
    setActiveCircles((previousCircles) => {
      const newArr = previousCircles.filter((id) => id !== number);
      return newArr;
    });
  };

  const nextHandler = () => {
    if (currentActiveCount < DUMMY_CIRCLES.length) {
      newActiveCirclesCount = currentActiveCount + 1;
      setCurrentActiveCount((prev) => prev + 1);
      addActiveCircle(newActiveCirclesCount);
      update();
    }
  };

  const prevHandler = () => {
    if (currentActiveCount > 1) {
      newActiveCirclesCount = currentActiveCount - 1;
      removeActiveCircle(currentActiveCount);
      setCurrentActiveCount((prev) => prev - 1);
      update();
    }
  };

  const update = () => {
    if (newActiveCirclesCount === 1) {
      setPrevButtonIsDisabled(true);
    } else if (newActiveCirclesCount === DUMMY_CIRCLES.length) {
      setNextButtonIsDisabled(true);
    } else {
      setPrevButtonIsDisabled(false);
      setNextButtonIsDisabled(false);
    }

    setProgressBarLevel(
      ((newActiveCirclesCount - 1) / (DUMMY_CIRCLES.length - 1)) * 100 + "%"
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes["progress-container"]}>
        <ProgressBar width={progressBarLevel} />
        {DUMMY_CIRCLES.map((circle) => {
          return (
            <Circle
              key={circle.number}
              number={circle.number}
              isActive={activeCircles.includes(circle.number) ? true : false}
            />
          );
        })}
      </div>
      <Button
        text="prev"
        isDisabled={prevButtonIsDisabled}
        clickHandler={prevHandler}
      />
      <Button
        text="next"
        isDisabled={nextButtonIsDisabled}
        clickHandler={nextHandler}
      />
    </div>
  );
};

export default ProgressPanel;
