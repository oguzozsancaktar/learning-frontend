import React from "react";
import FAQ from "./FAQ";
import classes from "./FAQContainer.module.css";

const FAQContainer = (props) => {
  return (
    <React.Fragment>
      <h1>Frequently Asked Questions</h1>
      <div className={classes["faq-container"]}>
        <FAQ
          title="Why shouldn't we trust atoms?"
          text="They make up everything"
        />
        <FAQ
          title="What do you call someone with no body and no nose?"
          text="Nobody knows."
        />
        <FAQ
          title="What's the object-oriented way to become wealthy?"
          text="Inheritance"
        />
        <FAQ
          title="How many tickles does it take to tickle an octopus?"
          text="Ten-tickles!"
        />
        <FAQ title="What is: 1 + 1?" text="Depends on who are you asking." />
      </div>
    </React.Fragment>
  );
};

export default FAQContainer;
