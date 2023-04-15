import React, { useState, useEffect, useContext } from "react";
import classes from "./DeleteBoard.module.scss";
import OverlayPortal from "../../UI/OverlayPortal/OverlayPortal";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import BoardCtx from "../../../context/boardctx";
import ButtonDestructive from "../../UI/Buttons/ButtonDestructive";
import ButtonSecondary from "../../UI/Buttons/ButtonSecondary";

function DeleteBoard() {
  const [board, setBoard] = useState();
  const { boards, toggleDeleteBoard, deleteBoard } = useContext(BoardCtx);

  useEffect(() => {
    let currentBoard = boards.find((board) => board.isActive);

    setBoard(currentBoard);
  }, [boards]);

  if (!board) return;

  return (
    <OverlayPortal
      classes={classes["delete-board-overlay"]}
      onClick={toggleDeleteBoard}
    >
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <p className={classes["modal-title"]}>Delete this board?</p>
        <p
          className={classes.warning}
        >{`Are you sure you want to delete the '${board.name}' board? This action will remove all columns and tasks and cannot be reversed.`}</p>
        <div className={classes["action-btns"]}>
          <ButtonDestructive
            onClick={() => {
              deleteBoard(board.id);
              toggleDeleteBoard();
            }}
          />
          <ButtonSecondary text={"Cancel"} onClick={toggleDeleteBoard} />
        </div>
      </ModalWrapper>
    </OverlayPortal>
  );
}

export default DeleteBoard;
