import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import data from "../data.json";

const BoardCtx = React.createContext({
  boards: [],
  showEditBoard: Boolean,
  showSidebar: Boolean,
  showTaskDetails: Boolean,
  showViewTask: Boolean,
  toggleActiveBoard: () => {},
  toggleEditBoardModal: () => {},
  toggleMobileMenu: () => {},
  toggleSidebar: () => {},
  toggleTaskDetailsModal: () => {},
  updateTask: () => {},
  setIds: () => {},
  ids: [],
  viewMobileMenu: Boolean,
});

export const BoardCtxProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [viewMobileMenu, setViewMobileMenu] = useState(false);
  const [ids, setIds] = useState({});

  useEffect(() => {
    let boardWithIds = data.boards.map((board) => ({
      ...board,
      id: uuidv4(),
      columns: board.columns.map((column) => ({
        ...column,
        id: uuidv4(),
        tasks: column.tasks.map((task) => ({
          ...task,
          id: uuidv4(),
        })),
      })),
    }));

    setBoards(boardWithIds);
  }, []);

  function toggleMobileMenu() {
    setViewMobileMenu((prev) => !prev);
  }

  function toggleActiveBoard(id) {
    setBoards((prevBoards) => {
      return prevBoards.map((board) => {
        if (board.id === id) return { ...board, isActive: true };
        else return { ...board, isActive: false };
      });
    });
  }

  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  function toggleEditBoardModal() {
    setShowEditBoard((prev) => !prev);
  }

  function toggleTaskDetailsModal() {
    setShowTaskDetails((prev) => !prev);
  }

  function updateTask(updatedTask) {
    let boardIndex = boards.findIndex((board) => board.isActive);
    let columnIndex = boards[boardIndex].columns.findIndex(
      (column) => column.id === ids.column
    );
    let taskIndex = boards[boardIndex].columns[columnIndex].tasks.findIndex(
      (task) => task.id === updatedTask.id
    );
    setBoards((prevBoards) => {
      let updatedBoards = [...prevBoards];
      updatedBoards[boardIndex].columns[columnIndex].tasks[taskIndex] =
        updatedTask;

      return updatedBoards;
    });
  }

  return (
    <BoardCtx.Provider
      value={{
        boards,
        showTaskDetails,
        showEditBoard,
        showSidebar,
        toggleActiveBoard,
        toggleEditBoardModal,
        toggleMobileMenu,
        toggleSidebar,
        toggleTaskDetailsModal,
        viewMobileMenu,
        setIds,
        ids,
        updateTask,
      }}
    >
      {children}
    </BoardCtx.Provider>
  );
};

export default BoardCtx;
