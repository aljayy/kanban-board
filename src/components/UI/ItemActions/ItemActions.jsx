import React, { useContext } from "react";
import classes from "./ItemActions.module.scss";
import BoardCtx from "../../../context/boardctx";
import ThemeCtx from "../../../context/themectx";

function ItemActions({
  editAction,
  editText,
  deleteAction,
  deleteText,
  top,
  right,
}) {
  const { theme } = useContext(ThemeCtx);

  return (
    <div
      className={`${classes["actions-wrapper"]} ${classes[theme]}`}
      onClick={(e) => e.stopPropagation()}
      style={{ top: top, right: right }}
    >
      <p className={classes.edit} onClick={editAction}>
        {editText}
      </p>
      <p className={classes.delete} onClick={deleteAction}>
        {deleteText}
      </p>
    </div>
  );
}

export default ItemActions;
