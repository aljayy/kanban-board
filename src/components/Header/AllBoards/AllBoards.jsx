import React from "react";
import data from "../../../data.json";
import inactiveBoardIcon from "../../../assets/icon-board.svg";
import activeBoardIcon from "../../../assets/icon-active-board.svg";
import newBoardIcon from "../../../assets/icon-new-board.svg";
import classes from "./AllBoards.module.scss";

function AllBoards() {
  const localData = data.boards;
  return (
    <>
      <h3 className={classes}>{`All Boards (${localData.length})`}</h3>
      {localData.map((board, index) => {
        let activeBoard =
          index === 0 ? classes["active-board"] : classes["non-active-board"];

        let icon = index === 0 ? activeBoardIcon : inactiveBoardIcon;

        return (
          <li key={index} className={activeBoard}>
            <button>
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
