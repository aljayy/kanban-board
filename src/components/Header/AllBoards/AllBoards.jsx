import React, { useContext } from "react";
import inactiveBoardIcon from "../../../assets/icon-board.svg";
import activeBoardIcon from "../../../assets/icon-active-board.svg";
import newBoardIcon from "../../../assets/icon-new-board.svg";
import classes from "./AllBoards.module.scss";
import BoardCtx from "../../../context/boardctx";

function AllBoards() {
  const { activeBoard, boards, toggleActiveBoard } = useContext(BoardCtx);

  return (
    <>
      <h3 className={classes}>{`All Boards (${boards.length})`}</h3>
      {boards.map((board) => {
        let active =
          activeBoard.id === board.id
            ? classes["active-board"]
            : classes["non-active-board"];

        let icon =
          activeBoard.id === board.id ? activeBoardIcon : inactiveBoardIcon;

        return (
          <li key={board.id} className={active}>
            <button onClick={() => toggleActiveBoard(board)}>
              <img src={icon} alt="Board Icon" />
              <p>{board.name}</p>
            </button>
          </li>
        );
      })}
      <li className={classes["new-board"]}>
        <button>
          <img src={newBoardIcon} alt="Board Icon" />
          <p>+ Create New Board</p>
        </button>
      </li>
    </>
  );
}

export default AllBoards;
