import React, { useContext } from "react";
import classes from "./ThemeToggler.module.scss";
import darkIcon from "../../../assets/icon-dark-theme.svg";
import lightIcon from "../../../assets/icon-light-theme.svg";
import ThemeCtx from "../../../context/themectx";

function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeCtx);

  const transition =
    theme === "light" ? classes["transform-left"] : classes["transform-right"];

  return (
    <div className={`${classes["theme-toggler"]} ${classes[theme]}`}>
      <img src={lightIcon} alt="Light Theme Icon" />
      <button onClick={toggleTheme}>
        <div className={transition} />
      </button>
      <img src={darkIcon} alt="Dark Theme Icon" />
    </div>
  );
}

export default ThemeToggler;
