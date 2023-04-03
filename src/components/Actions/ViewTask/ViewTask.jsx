import React, { useContext } from "react";
import classes from "./ViewTask.module.scss";
import ActionTitle from "../../UI/ActionTitle";
import BoardCtx from "../../../context/boardctx";
import ellipsis from "../../../assets/icon-vertical-ellipsis.svg";
import OverlayPortal from "../../UI/OverlayPortal/OverlayPortal";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import check from "../../../assets/icon-check.svg";
import chevron from "../../../assets/icon-chevron-down.svg";

function ViewTask() {
  const { taskDetails, toggleTaskDetailsModal, showTaskDetails } =
    useContext(BoardCtx);

  const transition = showTaskDetails ? "" : classes["hide-task"];

  if (!showTaskDetails) return;

  return (
    <OverlayPortal
      classes={`${classes.overlay} ${transition}`}
      onClick={toggleTaskDetailsModal}
    >
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <div className={classes["task-title"]}>
          <ActionTitle title={taskDetails.title} />
          <button>
            <img src={ellipsis} alt="Ellipsis Icon" />
          </button>
        </div>
        <div className={classes["task-desc"]}>
          <p>{taskDetails.description}</p>
        </div>
        <div className={classes["subtasks-wrapper"]}>
          <p
            className={classes.tracker}
          >{`Subtasks (0 of ${taskDetails.subtasks.length})`}</p>
          {taskDetails.subtasks.map((subtask) => {
            return (
              <div className={classes.subtask}>
                <div className={`${classes.checkbox} ${classes.unchecked}`}>
                  <img src={check} alt="Check Icon" />
                </div>
                <p>{subtask.title}</p>
              </div>
            );
          })}
        </div>
        <div className={classes.status}>
          <p>Current Status</p>
          <div className={classes["current-status"]}>
            <div className={classes.selected}>
              <p>Doing</p>
              <img src={chevron} alt="Chevron Icon" />
            </div>
            <div></div>
          </div>
        </div>
      </ModalWrapper>
    </OverlayPortal>
  );
}

export default ViewTask;
