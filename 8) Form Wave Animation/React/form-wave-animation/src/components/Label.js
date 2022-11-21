import parse from "html-react-parser";
import classes from "./Form.module.css";

const Label = (props) => {
  const content = props.text
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");

  return <label>{parse(content)}</label>;
};

export default Label;
