import React, { useState, useEffect } from "react";
import "./App.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function App() {
  const [date, setDate] = useState({
    month: 0,
    day: 0,
    date: 0,
    hours: 0,
    hoursAngle: 0,
    minutes: 0,
    minutesAngle: 0,
    secondsAngle: 0,
    ampm: "AM",
  });

  useEffect(() => {
    let newDate = {
      month: 0,
      day: 0,
      date: 0,
      hours: 0,
      hoursAngle: 0,
      minutes: 0,
      minutesAngle: 0,
      secondsAngle: 0,
      ampm: "AM",
    };

    const setTime = () => {
      const time = new Date();
      const month = time.getMonth();
      const day = time.getDay();
      const date = time.getDate();
      const hours = time.getHours();
      const hoursForClock = hours % 12;
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      newDate.month = month;
      newDate.day = day;
      newDate.date = date;
      newDate.hours = hoursForClock;
      newDate.hoursAngle = scale(hoursForClock, 0, 11, 0, 360);
      newDate.minutes = minutes;
      newDate.minutesAngle = scale(minutes, 0, 59, 0, 360);
      newDate.secondsAngle = scale(seconds, 0, 59, 0, 360);
      newDate.ampm = ampm;

      setDate(newDate);
    };

    const interval = setInterval(setTime, 1000);

    function scale(number, inMin, inMax, outMin, outMax) {
      return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    return () => clearInterval(interval);
  }, [setDate]);

  const toggleHandler = (event) => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      event.target.innerHTML = "Dark mode";
    } else {
      html.classList.add("dark");
      event.target.innerHTML = "Light Mode";
    }
  };

  return (
    <React.Fragment>
      <button className="toggle" onClick={toggleHandler}>
        Dark mode
      </button>

      <div className="clock-container">
        <div className="clock">
          <div
            className="needle hour"
            style={{
              transform: `translate(-50%, -100%) rotate(${date.hoursAngle}deg)`,
            }}
          ></div>
          <div
            className="needle minute"
            style={{
              transform: `translate(-50%, -100%) rotate(${date.minutesAngle}deg)`,
            }}
          ></div>
          <div
            className="needle second"
            style={{
              transform: `translate(-50%, -100%) rotate(${date.secondsAngle}deg)`,
            }}
          ></div>
          <div className="center-point"></div>
        </div>
        <div className="time">
          {date.hours}:{date.minutes < 10 ? "0" + date.minutes : date.minutes}{" "}
          {date.ampm}
        </div>
        <div className="date">
          {days[date.day]}, {months[date.month]}{" "}
          <span className="circle">{date.date}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
