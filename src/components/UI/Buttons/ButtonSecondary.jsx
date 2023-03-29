import React from "react";
import classes from "./ButtonSecondary.module.scss";

function ButtonSecondary({ text }) {
  return (
    <button className={classes["button-secondary"]}>
      <p>{text}</p>
    </button>
  );
}

export default ButtonSecondary;
