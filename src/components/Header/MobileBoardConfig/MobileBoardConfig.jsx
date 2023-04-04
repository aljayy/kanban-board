import React, { useContext } from "react";
import classes from "./MobileBoardConfig.module.scss";
import cross from "../../../assets/icon-add-task-mobile.svg";
import ellipsis from "../../../assets/icon-vertical-ellipsis.svg";
import logo from "../../../assets/logo-mobile.svg";
import path from "../../../assets/icon-chevron-down.svg";
import BoardCtx from "../../../context/boardctx";
import MobileMenuModal from "./MobileMenuModal";
import ThemeCtx from "../../../context/themectx";

function MobileHeader() {
  const { boards, viewMobileMenu, toggleMobileMenu } = useContext(BoardCtx);
  const { theme } = useContext(ThemeCtx);

  if (boards.length < 1) return;

  const activeBoard = boards.find((board) => board.isActive);

  return (
    <>
      <div className={classes["board-title"]}>
        <img
          src={logo}
          alt={"Mobile logo"}
          className={classes["mobile-logo"]}
        />
        <h2
          className={`${classes["mobile-board-title"]} ${classes[theme]}`}
          onClick={toggleMobileMenu}
        >
          {activeBoard.name}
        </h2>
        <img
          src={path}
          alt={"Chevron icon"}
          className={`${classes.path} ${viewMobileMenu ? classes.rotate : ""}`}
          onClick={toggleMobileMenu}
        />
      </div>
      <div className={classes["board-actions"]}>
        <button className={classes["add-task"]} disabled={true}>
          <img src={cross} alt={"Add task icon"} />
        </button>
        <img src={ellipsis} alt={"Ellipsis icon"} />
      </div>
      <MobileMenuModal />
    </>
  );
}

export default MobileHeader;
