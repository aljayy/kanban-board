import React, { useState } from "react";
import classes from "./MobileHeader.module.scss";
import cross from "../../../assets/icon-add-task-mobile.svg";
import ellipsis from "../../../assets/icon-vertical-ellipsis.svg";
import logo from "../../../assets/logo-mobile.svg";
import path from "../../../assets/icon-chevron-down.svg";

function MobileHeader() {
  const [changeRotation, setChangeRotation] = useState(false);

  function viewAllBoards() {
    setChangeRotation((prev) => !prev);
  }

  return (
    <header className={classes}>
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
          className={`${classes.path} ${changeRotation ? classes.rotate : ""}`}
          onClick={viewAllBoards}
        />
      </div>
      <div className={classes["board-actions"]}>
        <button className={classes["add-task"]} disabled={true}>
          <img src={cross} alt={"Add task icon"} />
        </button>
        <img src={ellipsis} alt={"Ellipsis icon"} />
      </div>
    </header>
  );
}

export default MobileHeader;
