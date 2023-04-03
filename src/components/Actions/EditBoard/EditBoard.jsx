import React, { useContext } from "react";
import classes from "./EditBoard.module.scss";
import ActionInput from "../../UI/ActionInput";
import ActionTagInput from "../../UI/ActionTagInput";
import ActionTitle from "../../UI/ActionTitle";
import BoardCtx from "../../../context/boardctx";
import OverlayPortal from "../../UI/OverlayPortal/OverlayPortal";
import SmallButtonPrimary from "../../UI/Buttons/SmallButtonPrimary";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";

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

  return (
    <OverlayPortal
      classes={`${classes.overlay} ${transition}`}
      onClick={toggleEditBoardModal}
    >
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
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
      </ModalWrapper>
    </OverlayPortal>
  );
}

export default EditBoard;
