import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [inlineStyle, setItlineStyle] = useState("nav");
  const navRef = useRef();

  useEffect(() => {
    const fixNav = () => {
      if (window.scrollY > navRef.current.offsetHeight + 150) {
        setItlineStyle("nav active");
      } else {
        setItlineStyle("nav");
      }
    };

    window.addEventListener("scroll", fixNav);
  }, []);

  return (
    <nav className={inlineStyle} ref={navRef}>
      <div className="container">
        <h1 className="logo">
          <a href="/index.html">My Website</a>
        </h1>
        <ul>
          <li>
            <a href="#" className="current">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
