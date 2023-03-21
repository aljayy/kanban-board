import React from "react";
import classes from "./ThemeToggler.module.scss";
import darkIcon from "../../../assets/icon-dark-theme.svg";
import lightIcon from "../../../assets/icon-light-theme.svg";

function ThemeToggler() {
  return (
    <div className={classes["theme-toggler"]}>
      <img src={lightIcon} alt="Light Theme Icon" />
      <button>
        <div />
      </button>
      <img src={darkIcon} alt="Dark Theme Icon" />
    </div>
  );
}

export default ThemeToggler;
