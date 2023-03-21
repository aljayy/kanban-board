import React, { useState } from "react";
import classes from "./MobileBoardConfig.module.scss";
import cross from "../../../assets/icon-add-task-mobile.svg";
import ellipsis from "../../../assets/icon-vertical-ellipsis.svg";
import logo from "../../../assets/logo-mobile.svg";
import path from "../../../assets/icon-chevron-down.svg";
import MobileMenuModal from "./MobileMenuModal";

function MobileHeader() {
  const [viewMenu, setViewMenu] = useState(false);

  function viewAllBoards() {
    setViewMenu((prev) => !prev);
  }

  return (
    <>
      <div className={classes["board-title"]}>
        <img
          src={logo}
          alt={"Mobile logo"}
          className={classes["mobile-logo"]}
        />
        <h2 className={classes["mobile-board-title"]} onClick={viewAllBoards}>
          Platform Launch
        </h2>
        <img
          src={path}
          alt={"Chevron icon"}
          className={`${classes.path} ${viewMenu ? classes.rotate : ""}`}
          onClick={viewAllBoards}
        />
      </div>
      <div className={classes["board-actions"]}>
        <button className={classes["add-task"]} disabled={true}>
          <img src={cross} alt={"Add task icon"} />
        </button>
        <img src={ellipsis} alt={"Ellipsis icon"} />
      </div>
      <MobileMenuModal viewMenu={viewMenu} />
    </>
  );
}

export default MobileHeader;
