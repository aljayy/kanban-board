import React, { useContext, useEffect, useState } from "react";
import classes from "./DeleteTask.module.scss";
import OverlayPortal from "../../UI/OverlayPortal/OverlayPortal";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import BoardCtx from "../../../context/boardctx";
import ButtonSecondary from "../../UI/Buttons/ButtonSecondary";
import ButtonDestructive from "../../UI/Buttons/ButtonDestructive";

function DeleteTask() {
  const { toggleDeleteItemModal, ids, boards, deleteTask } =
    useContext(BoardCtx);
  const [task, setTask] = useState();

  useEffect(() => {
    let currentTask = boards
      .find((board) => board.isActive)
      .columns.find((column) => column.id === ids.column)
      .tasks.find((task) => task.id === ids.task);

    setTask(currentTask);
  }, [boards, ids.column, ids.task]);

  if (!task) return;

  return (
    <OverlayPortal
      classes={classes["delete-overlay"]}
      onClick={toggleDeleteItemModal}
    >
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <p className={classes["modal-title"]}>Delete this task?</p>
        <p
          className={classes.warning}
        >{`Are you sure you want to delete the '${task.title}' task and its subtasks? This action cannot be reversed.`}</p>
        <div className={classes["action-btns"]}>
          <ButtonDestructive onClick={() => deleteTask(task.id)} />
          <ButtonSecondary text={"Cancel"} onClick={toggleDeleteItemModal} />
        </div>
      </ModalWrapper>
    </OverlayPortal>
  );
}

export default DeleteTask;
