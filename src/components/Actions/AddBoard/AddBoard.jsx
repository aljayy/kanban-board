import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./AddBoard.module.scss";
import ActionInput from "../../UI/ActionInput";
import ActionTagInput from "../../UI/ActionTagInput";
import ActionTitle from "../../UI/ActionTitle";
import OverlayPortal from "../../UI/OverlayPortal/OverlayPortal";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import SmallButtonPrimary from "../../UI/Buttons/SmallButtonPrimary";
import BoardCtx from "../../../context/boardctx";

function AddBoard() {
  const { addNewBoard } = useContext(BoardCtx);
  const [newBoard, setNewBoard] = useState({
    name: "",
    isActive: false,
    id: uuidv4(),
    columns: [
      { name: "Todo", id: uuidv4(), tasks: [] },
      { name: "Doing", id: uuidv4(), tasks: [] },
    ],
  });
  const [titleError, setTitleError] = useState(false);

  function editBoardName(value) {
    setNewBoard((prevBoard) => {
      return { ...prevBoard, name: value };
    });
  }

  function addColumn() {
    setNewBoard((prevBoard) => {
      return {
        ...prevBoard,
        columns: prevBoard.columns.concat({
          name: "",
          id: uuidv4(),
          tasks: [],
        }),
      };
    });
  }

  function editColumnName(value, id) {
    setNewBoard((prevBoard) => {
      return {
        ...prevBoard,
        columns: prevBoard.columns.map((column) => {
          if (column.id === id) return { ...column, name: value };
          else return { ...column };
        }),
      };
    });
  }

  function createNewBoard() {
    if (newBoard.name.trim() === "") {
      setTitleError(true);
      return;
    } else setTitleError(false);

    let columnErrors = newBoard.columns.map((column) => {
      if (column.name.trim() === "") {
        return { ...column, hasError: true };
      } else {
        delete column.hasError;
        return column;
      }
    });

    if (columnErrors.some((column) => column.hasError)) {
      setNewBoard((prevBoard) => {
        return { ...prevBoard, columns: columnErrors };
      });
      return;
    }

    addNewBoard(newBoard);
  }

  return (
    <OverlayPortal classes={classes["add-board-overlay"]}>
      <ModalWrapper>
        <div className={classes["action-title"]}>
          <ActionTitle title={"Add New Board"} />
        </div>
        <div className={classes["board-title"]}>
          <ActionInput
            input={{
              label: "Board Name",
              type: "text",
              placeholder: "e.g. Web Design",
              onChange: editBoardName,
              error: titleError,
            }}
          />
        </div>
        <div className={classes.columns}>
          <ActionTagInput
            data={{
              label: "Board Columns",
              tags: newBoard.columns,
              type: "text",
              action: "+Add New Column",
              onAction: addColumn,
              onChange: editColumnName,
            }}
          />
        </div>
        <SmallButtonPrimary
          text={"Create New Board"}
          onClick={createNewBoard}
        />
      </ModalWrapper>
    </OverlayPortal>
  );
}

export default AddBoard;
