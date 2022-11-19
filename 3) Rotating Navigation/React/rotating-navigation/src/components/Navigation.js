import { BiHome, BiQuestionMark, BiEnvelope } from "react-icons/bi";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <BiHome />
          <a href="#"> Home</a>
        </li>
        <li>
          <BiQuestionMark />
          <a href="#"> About</a>
        </li>
        <li>
          <BiEnvelope />
          <a href="#"> Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
