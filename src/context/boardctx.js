import React, { useState } from "react";

const BoardCtx = React.createContext({
  showSidebar: Boolean,
  toggleSidebar: () => {},
});

export const BoardCtxProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  return (
    <BoardCtx.Provider value={{ showSidebar, toggleSidebar }}>
      {children}
    </BoardCtx.Provider>
  );
};

export default BoardCtx;
