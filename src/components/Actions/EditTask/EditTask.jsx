import React, { useContext, useEffect, useState } from "react";
import classes from "./EditTask.module.scss";
import ActionInput from "../../UI/ActionInput";
import ActionTagInput from "../../UI/ActionTagInput";
import ActionTitle from "../../UI/ActionTitle";
import BoardCtx from "../../../context/boardctx";
import ChangeTaskStatus from "../../Actions/ChangeTaskStatus/ChangeTaskStatus";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import OverlayPortal from "../../UI/OverlayPortal/OverlayPortal";
import SmallButtonPrimary from "../../UI/Buttons/SmallButtonPrimary";
import ThemeCtx from "../../../context/themectx";

function EditTask() {
  const { ids, boards, toggleEditTaskModal, updateTask } = useContext(BoardCtx);
  const [statuses, setStatuses] = useState([]);
  const [task, setTask] = useState({});
  const [titleError, setTitleError] = useState(false);
  const { theme } = useContext(ThemeCtx);

  useEffect(() => {
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
  }, [boards, ids.column, ids.task]);

  if (!task || Object.keys(task).length < 1) return;

  function editTaskTitle(value) {
    setTask((prevTask) => {
      return { ...prevTask, title: value };
    });
  }

  function editTaskDesc(value) {
    setTask((prevTask) => {
      return { ...prevTask, description: value };
    });
  }

  function editSubtasks(value, index) {
    setTask((prevTask) => {
      return {
        ...prevTask,
        subtasks: prevTask.subtasks.map((subtask, i) => {
          if (index === i) {
            return { ...subtask, title: value };
          }
          return subtask;
        }),
      };
    });
  }

  function addSubtask() {
    setTask((prevTask) => {
      return {
        ...prevTask,
        subtasks: prevTask.subtasks.concat([{ title: "", isCompleted: false }]),
      };
    });
  }

  function deleteSubtask(index) {
    setTask((prevTask) => {
      return {
        ...prevTask,
        subtasks: prevTask.subtasks.filter((subtask, i) => i !== index),
      };
    });
  }

  function saveChanges() {
    if (task.title.trim() === "") {
      setTitleError(true);
      return;
    } else setTitleError(false);

    let subtaskErrors = task.subtasks.map((subtask) => {
      if (subtask.title.trim() === "") {
        return { ...subtask, hasError: true };
      } else {
        delete subtask.hasError;
        return subtask;
      }
    });

    if (subtaskErrors.some((subtask) => subtask.hasError)) {
      setTask((prevTask) => {
        return { ...prevTask, subtasks: subtaskErrors };
      });
      return;
    }

    let newColumnId = statuses.filter((status) => status.isCurrent)[0].id;
    updateTask(task, newColumnId);
  }

  return (
    <OverlayPortal
      classes={`${classes["edit-overlay"]} ${classes[theme]}`}
      onClick={toggleEditTaskModal}
    >
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <div className={classes["action-title"]}>
          <ActionTitle title={"Edit Task"} />
        </div>
        <div className={classes["task-title"]}>
          <ActionInput
            input={{
              label: "Title",
              id: task.id,
              type: "text",
              value: task.title,
              onChange: editTaskTitle,
              error: titleError,
            }}
          />
        </div>
        <div className={classes["task-desc"]}>
          <label>Description</label>
          <textarea
            placeholder={"Shortly describe your task."}
            defaultValue={task.description}
            onChange={(e) => editTaskDesc(e.target.value)}
          />
        </div>
        <div className={classes["action-tag"]}>
          <ActionTagInput
            data={{
              label: "Subtasks",
              tags: task.subtasks,
              type: "text",
              action: "+Add New Subtask",
              onAction: addSubtask,
              onChange: editSubtasks,
              onDelete: deleteSubtask,
            }}
          />
        </div>
        <ChangeTaskStatus statuses={statuses} setStatuses={setStatuses} />
        <div className={classes["action-btn"]}>
          <SmallButtonPrimary text={"Save Changes"} onClick={saveChanges} />
        </div>
      </ModalWrapper>
    </OverlayPortal>
  );
}

export default EditTask;
