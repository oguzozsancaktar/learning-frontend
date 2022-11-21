import Form from "./Form";
import classes from "./Container.module.css";

const Container = () => {
  return (
    <div className={classes.container}>
      <h1>Please Login</h1>
      <Form />
    </div>
  );
};

export default Container;
