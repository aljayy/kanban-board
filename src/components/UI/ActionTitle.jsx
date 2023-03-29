import React, { useContext } from "react";
import classes from "./ActionTitle.module.scss";
import ThemeCtx from "../../context/themectx";

function ActionTitle({ title }) {
  return <p className={classes["action-title"]}>{title}</p>;
}

export default ActionTitle;
