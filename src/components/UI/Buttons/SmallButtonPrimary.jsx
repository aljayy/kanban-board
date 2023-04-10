import React from "react";
import classes from "./SmallButtonPrimary.module.scss";

function SmallButtonPrimary({ text, onClick }) {
  return (
    <button className={classes["small-button-primary"]} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
}

export default SmallButtonPrimary;
