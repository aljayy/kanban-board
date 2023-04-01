import React, { useEffect, useState } from "react";
import { v4 as uuidv5 } from "uuid";
import data from "../data.json";

const BoardCtx = React.createContext({
  activeBoard: {},
  boards: [],
  showEditBoard: Boolean,
  showSidebar: Boolean,
  showViewTask: Boolean,
  toggleActiveBoard: () => {},
  toggleEditBoardModal: () => {},
  toggleMobileMenu: () => {},
  toggleSidebar: () => {},
  toggleViewTask: () => {},
  viewMobileMenu: Boolean,
});

export const BoardCtxProvider = ({ children }) => {
  const [activeBoard, setActiveBoard] = useState({});
  const [boards, setBoards] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);
  const [showViewTask, setShowViewTask] = useState(false);
  const [viewMobileMenu, setViewMobileMenu] = useState(false);

  useEffect(() => {
    let boardWithIds = data.boards.map((board) => ({
      ...board,
      id: uuidv5(),
      columns: board.columns.map((column) => ({
        ...column,
        id: uuidv5(),
        tasks: column.tasks.map((task) => ({
          ...task,
          id: uuidv5(),
        })),
      })),
    }));

    setBoards(boardWithIds);
    setActiveBoard(boardWithIds[0]);
  }, []);

  function toggleMobileMenu() {
    setViewMobileMenu((prev) => !prev);
  }

  function toggleActiveBoard(board) {
    setActiveBoard(board);
  }

  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  function toggleViewTask() {
    setShowViewTask((prev) => !prev);
  }

  function toggleEditBoardModal() {
    setShowEditBoard((prev) => !prev);
  }

  return (
    <BoardCtx.Provider
      value={{
        activeBoard,
        boards,
        showEditBoard,
        showSidebar,
        showViewTask,
        toggleActiveBoard,
        toggleEditBoardModal,
        toggleMobileMenu,
        toggleSidebar,
        toggleViewTask,
        viewMobileMenu,
      }}
    >
      {children}
    </BoardCtx.Provider>
  );
};

export default BoardCtx;
