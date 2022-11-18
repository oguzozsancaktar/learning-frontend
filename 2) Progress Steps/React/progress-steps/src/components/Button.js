import classes from "./Button.module.css";

const Button = (props) => {
  const clickHandler = () => {
    props.clickHandler();
  };

  return (
    <button
      className={classes.btn}
      onClick={clickHandler}
      disabled={props.isDisabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
