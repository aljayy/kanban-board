import React, { useContext } from "react";
import classes from "./EmptyBoard.module.scss";
import BoardCtx from "../../../context/boardctx";

function EmptyBoard() {
  const { showSidebar, toggleEditBoardModal } = useContext(BoardCtx);
  const transition = showSidebar ? classes["left-transition"] : "";

  return (
    <div className={`${classes["empty-board-wrapper"]} ${transition}`}>
      <h2>This board is empty. Create a new column to get started.</h2>
      <button onClick={toggleEditBoardModal}>
        <p>+ Add New Column</p>
      </button>
    </div>
  );
}

export default EmptyBoard;
