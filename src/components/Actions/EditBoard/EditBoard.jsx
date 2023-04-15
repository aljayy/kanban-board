import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./EditBoard.module.scss";
import ActionInput from "../../UI/ActionInput";
import ActionTagInput from "../../UI/ActionTagInput";
import ActionTitle from "../../UI/ActionTitle";
import BoardCtx from "../../../context/boardctx";
import OverlayPortal from "../../UI/OverlayPortal/OverlayPortal";
import SmallButtonPrimary from "../../UI/Buttons/SmallButtonPrimary";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";

function EditBoard() {
  const { showEditBoard, toggleEditBoardModal, boards, changeBoardDetails } =
    useContext(BoardCtx);
  const [board, setBoard] = useState();
  const [titleError, setTitleError] = useState(false);

  const transition = showEditBoard ? "" : classes["hide-edit-board"];

  useEffect(() => {
    setBoard(boards.find((board) => board.isActive));
  }, [boards]);

  if (!board) return;

  function changeBoardTitle(value) {
    setBoard((prevBoard) => {
      return { ...prevBoard, name: value };
    });
  }

  function changeColumnTitle(value, index) {
    setBoard((prevBoard) => {
      return {
        ...prevBoard,
        columns: prevBoard.columns.map((column, i) => {
          if (index === i) {
            return { ...column, name: value };
          } else return { ...column };
        }),
      };
    });
  }

  function addColumn() {
    setBoard((prevBoard) => {
      return {
        ...prevBoard,
        columns: prevBoard.columns.concat([
          { name: "", id: uuidv4(), tasks: [] },
        ]),
      };
    });
  }

  function removeColumn(i, columnId) {
    console.log(columnId);
    console.log(board);
    setBoard((prevBoard) => {
      return {
        ...prevBoard,
        columns: prevBoard.columns.filter((column) => column.id !== columnId),
      };
    });
  }

  function saveChanges() {
    if (board.name.trim() === "") {
      setTitleError(true);
      return;
    } else setTitleError(false);

    let columnError = board.columns.map((column) => {
      if (column.name.trim() === "") {
        return { ...column, hasError: true };
      } else {
        delete column.hasError;
        return column;
      }
    });

    if (columnError.some((column) => column.hasError)) {
      setBoard((prevBoard) => {
        return { ...prevBoard, columns: columnError };
      });
      return;
    }

    changeBoardDetails(board);
  }

  return (
    <OverlayPortal
      classes={`${classes.overlay} ${transition}`}
      onClick={toggleEditBoardModal}
    >
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <div className={classes["action-title"]}>
          <ActionTitle title={"Edit Board"} />
        </div>
        <div className={classes["board-name-wrapper"]}>
          <ActionInput
            input={{
              label: "Board Name",
              value: board.name,
              type: "text",
              id: board.id,
              onChange: changeBoardTitle,
              error: titleError,
            }}
          />
        </div>
        <div className={classes["tag-input-wrapper"]}>
          <ActionTagInput
            data={{
              label: "Board Columns",
              tags: board.columns,
              onChange: changeColumnTitle,
              action: "+ Add New Column",
              onAction: addColumn,
              onDelete: removeColumn,
            }}
          />
        </div>
        <div className={classes.save}>
          <SmallButtonPrimary text={"Save Changes"} onClick={saveChanges} />
        </div>
      </ModalWrapper>
    </OverlayPortal>
  );
}

export default EditBoard;
