import React, { useContext } from "react";
import classes from "./Task.module.scss";
import ThemeCtx from "../../../context/themectx";

function Task({ task }) {
  const { theme } = useContext(ThemeCtx);

  return (
    <div className={`${classes.task} ${classes[theme]}`}>
      <p className={classes["task-title"]}>{task.title}</p>
      <p
        className={classes["subtasks"]}
      >{`0 of ${task.subtasks.length} subtasks`}</p>
    </div>
  );
}

export default Task;
