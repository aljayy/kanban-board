import React, { useContext } from "react";
import AddTask from "../../Actions/AddTask/AddTask";
import EditBoard from "../../Actions/EditBoard/EditBoard";
import EditTask from "../../Actions/EditTask/EditTask";
import DeleteBoard from "../../Actions/DeleteBoard/DeleteBoard";
import DeleteTask from "../../Actions/DeleteTask/DeleteTask";
import BoardCtx from "../../../context/boardctx";
import ViewTask from "../../Actions/ViewTask/ViewTask";

function Modal() {
  const {
    showAddTask,
    showEditBoard,
    showDeleteBoard,
    showDeleteModal,
    showTaskDetails,
    showEditTask,
  } = useContext(BoardCtx);

  return (
    <>
      {showAddTask && <AddTask />}
      {showEditBoard && <EditBoard />}
      {showEditTask && <EditTask />}
      {showDeleteBoard && <DeleteBoard />}
      {showDeleteModal && <DeleteTask />}
      {showTaskDetails && <ViewTask />}
    </>
  );
}

export default Modal;
