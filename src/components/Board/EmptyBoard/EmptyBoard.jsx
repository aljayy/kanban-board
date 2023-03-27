import React from "react";
import classes from "./EmptyBoard.module.scss";

function EmptyBoard() {
  return (
    <div className={classes["empty-board-wrapper"]}>
      <h2>This board is empty. Create a new column to get started.</h2>
      <button>
        <p>+ Add New Column</p>
      </button>
    </div>
  );
}

export default EmptyBoard;
