import React, { useContext } from "react";
import classes from "./ItemActions.module.scss";
import BoardCtx from "../../../context/boardctx";

function ItemActions() {
  const { showItemActions } = useContext(BoardCtx);

  if (!showItemActions) return;

  return (
    <div
      className={classes["actions-wrapper"]}
      onClick={(e) => e.stopPropagation()}
    >
      <p className={classes.edit}>Edit Task</p>
      <p className={classes.delete}>Delete Task</p>
    </div>
  );
}

export default ItemActions;
