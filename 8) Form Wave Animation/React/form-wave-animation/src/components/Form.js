import Label from "./Label";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <form>
      <div className={classes["form-control"]}>
        <input type="text" required />
        <Label text="Email" />
      </div>

      <div className={classes["form-control"]}>
        <input type="password" required />
        <Label text="Password" />
      </div>

      <button className={classes.btn}>Login</button>
      <p className={classes.text}>
        Don't have an account? <a href="www.google.com">Register</a>
      </p>
    </form>
  );
};

export default Form;
