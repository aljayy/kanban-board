import React from "react";
import AllBoards from "../AllBoards/AllBoards";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import classes from "./MobileMenuModal.module.scss";

function MobileModal({ viewMenu, toggleMenu }) {
  const opacityTransition = viewMenu
    ? classes["show-menu"]
    : classes["hide-menu"];

  return (
    <div
      className={`${classes.overlay} ${opacityTransition}`}
      onClick={toggleMenu}
    >
      <menu>
        <div className={classes["mobile-all-boards"]}>
          <AllBoards />
        </div>
        <div className={classes["theme-toggler-wrapper"]}>
          <ThemeToggler />
        </div>
      </menu>
    </div>
  );
}

export default MobileModal;
