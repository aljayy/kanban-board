import React, { useContext } from "react";
import AddTask from "../../Actions/AddTask/AddTask";
import EditBoard from "../../Actions/EditBoard/EditBoard";
import EditTask from "../../Actions/EditTask/EditTask";
import BoardCtx from "../../../context/boardctx";
import ViewTask from "../../Actions/ViewTask/ViewTask";
import DeleteTask from "../../Actions/DeleteTask/DeleteTask";

function Modal() {
  const {
    showAddTask,
    showEditBoard,
    showDeleteModal,
    showTaskDetails,
    showEditTask,
  } = useContext(BoardCtx);

  return (
    <>
      {showAddTask && <AddTask />}
      {showEditBoard && <EditBoard />}
      {showEditTask && <EditTask />}
      {showDeleteModal && <DeleteTask />}
      {showTaskDetails && <ViewTask />}
    </>
  );
}

export default Modal;
