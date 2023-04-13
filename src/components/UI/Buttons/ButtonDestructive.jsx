import React from "react";
import classes from "./ButtonDestructive.module.scss";

function ButtonDestructive() {
  return (
    <button className={classes["btn-destructive"]}>
      <p>Delete</p>
    </button>
  );
}

export default ButtonDestructive;
