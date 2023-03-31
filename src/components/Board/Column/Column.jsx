import React from "react";
import Task from "../Task/Task";
import classes from "./Column.module.scss";

function Column({ column }) {
  console.log(column);
  return (
    <div className={classes["column-wrapper"]}>
      <div className={classes["title-wrapper"]}>
        <div className={classes.oval} />
        <p
          className={classes.title}
        >{`${column.name} (${column.tasks.length})`}</p>
      </div>
      <div className={classes["tasks-wrapper"]}>
        {column.tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </div>
    </div>
  );
}

export default Column;
