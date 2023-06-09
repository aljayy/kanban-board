import React, { useContext } from "react";
import classes from "./Columns.module.scss";
import BoardCtx from "../../../context/boardctx";
import Column from "../Column/Column";

function Columns() {
  const { boards, showSidebar } = useContext(BoardCtx);

  const transitionClass = showSidebar ? classes["transition"] : "";

  if (boards.length < 1) return;

  const activeBoard = boards.find((board) => board.isActive);

  return (
    <div className={`${classes["columns-wrapper"]} ${transitionClass}`}>
      {activeBoard.columns.map((column) => {
        return (
          <Column
            column={column}
            key={column.id}
            componentIds={{ board: activeBoard.id, column: column.id }}
          />
        );
      })}
    </div>
  );
}

export default Columns;
