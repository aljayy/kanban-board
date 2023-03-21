import React from "react";
import data from "../../../data.json";
import AllBoards from "../AllBoards/AllBoards";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import classes from "./MobileMenuModal.module.scss";

function MobileModal({ viewMenu }) {
  if (!viewMenu) return;

  let localData = data.boards;

  return (
    <div className={classes.overlay}>
      <menu>
        <AllBoards localData={localData} />
        <ThemeToggler />
      </menu>
    </div>
  );
}

export default MobileModal;
