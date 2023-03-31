import React, { useContext } from "react";
import classes from "./Columns.module.scss";
import BoardCtx from "../../../context/boardctx";
import Column from "../Column/Column";

function Columns() {
  const { activeBoard } = useContext(BoardCtx);

  return (
    <div className={classes["columns-wrapper"]}>
      {activeBoard.columns &&
        activeBoard.columns.map((column) => {
          return <Column column={column} key={column.id} />;
        })}
    </div>
  );
}

export default Columns;
