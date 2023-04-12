import React, { useContext, useEffect, useState } from "react";
import classes from "./ViewTask.module.scss";
import check from "../../../assets/icon-check.svg";
import ellipsis from "../../../assets/icon-vertical-ellipsis.svg";
import ActionTitle from "../../UI/ActionTitle";
import BoardCtx from "../../../context/boardctx";
import ChangeTaskStatus from "../ChangeTaskStatus/ChangeTaskStatus";
import ItemActions from "../../UI/ItemActions/ItemActions";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import OverlayPortal from "../../UI/OverlayPortal/OverlayPortal";
import ThemeCtx from "../../../context/themectx";
import SmallButtonPrimary from "../../UI/Buttons/SmallButtonPrimary";

function ViewTask() {
  const {
    toggleTaskDetailsModal,
    showTaskDetails,
    boards,
    ids,
    updateTask,
    setShowItemActions,
    toggleEditTaskModal,
  } = useContext(BoardCtx);
  const { theme } = useContext(ThemeCtx);
  const transition = showTaskDetails ? "" : classes["hide-task"];
  const [statuses, setStatuses] = useState(undefined);
  const [task, setTask] = useState([]);

  useEffect(() => {
    if (Object.keys(ids).length > 2) {
      let status = boards
        .find((board) => board.isActive)
        .columns.map((column) => {
          return {
            status: column.name,
            id: column.id,
            isCurrent: column.id === ids.column,
          };
        });

      let currentTask = boards
        .find((board) => board.isActive)
        .columns.find((column) => column.id === ids.column)
        .tasks.find((task) => task.id === ids.task);
      setStatuses(status);
      setTask(currentTask);
    }
  }, [boards, ids]);

  if (!task || task.length < 1) return;

  function toggleCompleted(index) {
    let updatedTask = {
      ...task,
      subtasks: task.subtasks.map((subtask, i) => {
        if (i === index) {
          return {
            ...subtask,
            isCompleted: !subtask.isCompleted,
          };
        }
        return subtask;
      }),
    };

    setTask(updatedTask);
  }

  function saveChanges() {
    let newColumnId = statuses.filter((status) => status.isCurrent)[0].id;
    updateTask(task, newColumnId);
  }

  return (
    <OverlayPortal
      classes={`${classes.overlay} ${transition} ${classes[theme]}`}
      onClick={() => {
        toggleTaskDetailsModal();
        setShowItemActions(false);
      }}
    >
      <ModalWrapper
        onClick={(e) => {
          e.stopPropagation();
          setShowItemActions(false);
        }}
      >
        <div className={classes["task-title"]}>
          <ActionTitle title={task.title} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowItemActions(true);
            }}
          >
            <img src={ellipsis} alt="Ellipsis Icon" />
          </button>
          <ItemActions
            editAction={toggleEditTaskModal}
            editText={"Edit Task"}
            deleteText={"Delete Task"}
          />
        </div>
        <div className={classes["task-desc"]}>
          <p>{task.description}</p>
        </div>
        <div className={classes["subtasks-wrapper"]}>
          <p className={classes.tracker}>{`Subtasks (${
            task.subtasks.filter((subtask) => subtask.isCompleted).length
          } of ${task.subtasks.length})`}</p>
          {task.subtasks.map((subtask, index) => {
            return (
              <div
                className={`${classes.subtask} ${
                  subtask.isCompleted ? classes.checked : classes.unchecked
                }`}
                key={index}
                onClick={() => toggleCompleted(index)}
              >
                <div className={`${classes.checkbox}`}>
                  <img src={check} alt="Check Icon" />
                </div>
                <p>{subtask.title}</p>
              </div>
            );
          })}
        </div>
        <ChangeTaskStatus statuses={statuses} setStatuses={setStatuses} />
        <div className={classes["action-btn"]}>
          <SmallButtonPrimary text={"Save"} onClick={saveChanges} />
        </div>
      </ModalWrapper>
    </OverlayPortal>
  );
}

export default ViewTask;
