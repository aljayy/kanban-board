import React from "react";
import classes from "./ButtonDestructive.module.scss";

function ButtonDestructive({ onClick }) {
  return (
    <button className={classes["btn-destructive"]} onClick={onClick}>
      <p>Delete</p>
    </button>
  );
}

export default ButtonDestructive;
