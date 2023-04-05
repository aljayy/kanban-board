import React, { useContext } from "react";
import classes from "./Task.module.scss";
import BoardCtx from "../../../context/boardctx";
import ThemeCtx from "../../../context/themectx";

function Task({ task, componentIds }) {
  const { toggleTaskDetailsModal, setIds } = useContext(BoardCtx);
  const { theme } = useContext(ThemeCtx);

  function viewTaskDetails() {
    setIds(componentIds);
    toggleTaskDetailsModal();
  }

  return (
    <div
      className={`${classes.task} ${classes[theme]}`}
      onClick={() => viewTaskDetails(task)}
    >
      <p className={classes["task-title"]}>{task.title}</p>
      <p
        className={classes["subtasks"]}
      >{`0 of ${task.subtasks.length} subtasks`}</p>
    </div>
  );
}

export default Task;
