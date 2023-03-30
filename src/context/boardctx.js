import React, { useEffect, useState } from "react";
import { v4 as uuidv5 } from "uuid";
import data from "../data.json";

const BoardCtx = React.createContext({
  boards: [],
  showEditBoard: Boolean,
  showSidebar: Boolean,
  toggleEditBoardModal: () => {},
  toggleSidebar: () => {},
});

export const BoardCtxProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);

  useEffect(() => {
    setBoards(
      data.boards.map((board) => ({
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
      }))
    );
  }, []);

  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  function toggleEditBoardModal() {
    setShowEditBoard((prev) => !prev);
  }

  return (
    <BoardCtx.Provider
      value={{
        boards,
        showEditBoard,
        showSidebar,
        toggleEditBoardModal,
        toggleSidebar,
      }}
    >
      {children}
    </BoardCtx.Provider>
  );
};

export default BoardCtx;
