import React, { useContext } from "react";
import classes from "./EditBoard.module.scss";
import ActionInput from "../../UI/ActionInput";
import BoardCtx from "../../../context/boardctx";
import ActionTagInput from "../../UI/ActionTagInput";
import ActionTitle from "../../UI/ActionTitle";
import SmallButtonPrimary from "../../UI/Buttons/SmallButtonPrimary";

function EditBoard() {
  const { showEditBoard, toggleEditBoardModal } = useContext(BoardCtx);

  const transition = showEditBoard ? "" : classes["hide-edit-board"];

  // LOCAL DATA
  const title = "Edit Board";

  const inputData = {
    id: "board-name",
    label: "Board Name",
    placeholder: "e.g. Web Design",
    type: "text",
  };

  const tagInputData = {
    action: "+ Add New Column",
    columns: [{ title: "Todo" }, { title: "Doing" }, { title: "Done" }],
    id: "board-columns",
    label: "Board Columns",
    type: "text",
  };
  //

  return (
    <div
      className={`${classes.overlay} ${transition}`}
      onClick={toggleEditBoardModal}
    >
      <div
        className={classes["edit-board-wrapper"]}
        onClick={(e) => e.stopPropagation()}
      >
        <ActionTitle title={title} />
        <div className={classes["board-name-wrapper"]}>
          <ActionInput input={inputData} />
        </div>
        <div className={classes["tag-input-wrapper"]}>
          <ActionTagInput input={tagInputData} />
        </div>
        <div className={classes.save}>
          <SmallButtonPrimary text={"Save Changes"} />
        </div>
      </div>
    </div>
  );
}

export default EditBoard;
