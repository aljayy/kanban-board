import React from "react";
import classes from "./SmallButtonPrimary.module.scss";

function SmallButtonPrimary({ text }) {
  return (
    <button className={classes["small-button-primary"]}>
      <p>{text}</p>
    </button>
  );
}

export default SmallButtonPrimary;
