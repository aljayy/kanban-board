import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./AddTask.module.scss";
import OverlayPortal from "../../UI/OverlayPortal/OverlayPortal";
import ModalWrapper from "../../UI/ModalWrapper/ModalWrapper";
import ActionTitle from "../../UI/ActionTitle";
import ActionInput from "../../UI/ActionInput";
import ActionTagInput from "../../UI/ActionTagInput";
import ChangeTaskStatus from "../ChangeTaskStatus/ChangeTaskStatus";
import SmallButtonPrimary from "../../UI/Buttons/SmallButtonPrimary";
import ActionDesc from "../../UI/ActionDesc";
import BoardCtx from "../../../context/boardctx";

function AddTask() {
  const { boards, addTask, toggleAddTaskModal } = useContext(BoardCtx);
  const [task, setTask] = useState({});
  const [titleError, setTitleError] = useState(false);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    let status = boards
      .find((board) => board.isActive)
      .columns.map((column, index) => {
        return {
          status: column.name,
          id: column.id,
          isCurrent: index === 0,
        };
      });

    setStatuses(status);
    setTask({
      title: "",
      id: uuidv4(),
      description: "",
      status: status[0].status,
      subtasks: [
        { title: "", isCompleted: false },
        { title: "", isCompleted: false },
      ],
    });
  }, [boards]);

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

  function saveTask() {
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
    addTask(task, newColumnId);
  }

  return (
    <OverlayPortal
      classes={classes["add-task-overlay"]}
      onClick={toggleAddTaskModal}
    >
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <div className={classes["action-title"]}>
          <ActionTitle title={"Add New Task"} />
        </div>
        <div className={classes["task-title"]}>
          <ActionInput
            input={{
              error: titleError,
              label: "Title",
              placeholder: "e.g. Refactor legacy code",
              type: "text",
              onChange: editTaskTitle,
            }}
          />
        </div>
        <div className={classes["task-desc"]}>
          <ActionDesc
            taskDesc={{ onChange: editTaskDesc, description: task.description }}
          />
        </div>
        <div className={classes.subtasks}>
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
        <div className={classes.statuses}>
          <ChangeTaskStatus statuses={statuses} setStatuses={setStatuses} />
        </div>
        <SmallButtonPrimary text={"Create Task"} onClick={saveTask} />
      </ModalWrapper>
    </OverlayPortal>
  );
}

export default AddTask;
