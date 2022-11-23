import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavHandler = () => {
    setIsActive((prevValue) => !prevValue);
  };

  const inlineClass = isActive ? "active" : "";

  return (
    <nav className={inlineClass} id="nav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="icon" id="toggle" onClick={toggleNavHandler}>
        <div className="line line1"></div>
        <div className="line line2"></div>
      </button>
    </nav>
  );
};

export default Nav;
