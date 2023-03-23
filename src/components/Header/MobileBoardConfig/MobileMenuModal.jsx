import React, { useContext } from "react";
import classes from "./MobileMenuModal.module.scss";
import AllBoards from "../AllBoards/AllBoards";
import ThemeCtx from "../../../context/themectx";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

function MobileModal({ viewMenu, toggleMenu }) {
  const opacityTransition = viewMenu
    ? classes["show-menu"]
    : classes["hide-menu"];
  const { theme } = useContext(ThemeCtx);

  return (
    <div
      className={`${classes.overlay} ${opacityTransition}`}
      onClick={toggleMenu}
    >
      <menu onClick={(e) => e.stopPropagation()} className={classes[theme]}>
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
