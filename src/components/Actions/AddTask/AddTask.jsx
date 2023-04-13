import React, { useContext, useEffect, useState } from "react";
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
  const { boards } = useContext(BoardCtx);
  const [task, setTask] = useState({});
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

  return (
    <OverlayPortal classes={classes["add-task-overlay"]}>
      <ModalWrapper>
        <div className={classes["action-title"]}>
          <ActionTitle title={"Add New Task"} />
        </div>
        <div className={classes["task-title"]}>
          <ActionInput
            input={{
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
        <SmallButtonPrimary text={"Create Task"} />
      </ModalWrapper>
    </OverlayPortal>
  );
}

export default AddTask;
