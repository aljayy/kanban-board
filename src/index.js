import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BoardCtxProvider } from "./context/boardctx";
import { ThemeCtxProvider } from "./context/themectx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeCtxProvider>
      <BoardCtxProvider>
        <App />
      </BoardCtxProvider>
    </ThemeCtxProvider>
  </React.StrictMode>
);
