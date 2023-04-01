import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./MobileMenuModal.module.scss";
import AllBoards from "../AllBoards/AllBoards";
import BoardCtx from "../../../context/boardctx";
import ThemeCtx from "../../../context/themectx";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import OverlayPortal from "../../UI/OverlayPortal/OverlayPortal";

function MobileModal() {
  const { theme } = useContext(ThemeCtx);
  const { viewMobileMenu, toggleMobileMenu } = useContext(BoardCtx);
  const opacityTransition = viewMobileMenu
    ? classes["show-menu"]
    : classes["hide-menu"];

  return (
    <>
      {ReactDOM.createPortal(
        <OverlayPortal
          toggleMobileMenu={toggleMobileMenu}
          viewMobileMenu={viewMobileMenu}
        >
          <menu onClick={(e) => e.stopPropagation()} className={classes[theme]}>
            <div className={classes["mobile-all-boards"]}>
              <AllBoards />
            </div>
            <div className={classes["theme-toggler-wrapper"]}>
              <ThemeToggler />
            </div>
          </menu>
        </OverlayPortal>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default MobileModal;
