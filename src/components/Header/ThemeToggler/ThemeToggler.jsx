import React, { useContext } from "react";
import classes from "./ThemeToggler.module.scss";
import darkIcon from "../../../assets/icon-dark-theme.svg";
import lightIcon from "../../../assets/icon-light-theme.svg";
import ThemeCtx from "../../../context/themectx";

function ThemeToggler() {
  const { isLight, toggleTheme } = useContext(ThemeCtx);

  const toggleTransition = isLight ? "" : classes.transform;

  return (
    <div className={classes["theme-toggler"]}>
      <img src={lightIcon} alt="Light Theme Icon" />
      <button onClick={toggleTheme}>
        <div className={toggleTransition} />
      </button>
      <img src={darkIcon} alt="Dark Theme Icon" />
    </div>
  );
}

export default ThemeToggler;
