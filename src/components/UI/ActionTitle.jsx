import React, { useContext } from "react";
import classes from "./ActionTitle.module.scss";
import ThemeCtx from "../../context/themectx";

function ActionTitle({ title }) {
  const { theme } = useContext(ThemeCtx);

  return (
    <p className={`${classes["action-title"]} ${classes[theme]}`}>{title}</p>
  );
}

export default ActionTitle;
