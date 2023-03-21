import React from "react";
import data from "../../../data.json";
import AllBoards from "../AllBoards/AllBoards";
import classes from "./MobileMenuModal.module.scss";

function MobileModal({ viewMenu }) {
  if (!viewMenu) return;

  let localData = data.boards;

  return (
    <div className={classes.overlay}>
      <menu>
        <AllBoards localData={localData} />
      </menu>
    </div>
  );
}

export default MobileModal;
