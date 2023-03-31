import React, { useContext } from "react";
import classes from "./Columns.module.scss";
import BoardCtx from "../../../context/boardctx";
import Column from "../Column/Column";

function Columns() {
  const { activeBoard, showSidebar } = useContext(BoardCtx);

  const transitionClass = showSidebar ? classes["transition"] : "";

  return (
    <div className={`${classes["columns-wrapper"]} ${transitionClass}`}>
      {activeBoard.columns &&
        activeBoard.columns.map((column) => {
          return <Column column={column} key={column.id} />;
        })}
    </div>
  );
}

export default Columns;
