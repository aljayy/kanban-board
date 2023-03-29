import React, { useState } from "react";

const BoardCtx = React.createContext({
  showEditBoard: Boolean,
  showSidebar: Boolean,
  toggleEditBoardModal: () => {},
  toggleSidebar: () => {},
});

export const BoardCtxProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);

  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  function toggleEditBoardModal() {
    setShowEditBoard((prev) => !prev);
  }

  return (
    <BoardCtx.Provider
      value={{
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
