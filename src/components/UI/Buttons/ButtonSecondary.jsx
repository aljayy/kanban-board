import React, { useContext } from "react";
import classes from "./ButtonSecondary.module.scss";
import ThemeCtx from "../../../context/themectx";

function ButtonSecondary({ text, onClick }) {
  const { theme } = useContext(ThemeCtx);

  return (
    <button
      className={`${classes["button-secondary"]} ${classes[theme]}`}
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
}

export default ButtonSecondary;
