import React from "react";
import classes from "./ChangeTaskStatus.module.scss";
import chevron from "../../../assets/icon-chevron-down.svg";

function ChangeTaskStatus({ theme }) {
  return (
    <div className={`${classes.status} ${classes[theme]}`}>
      <p>Current Status</p>
      <div className={classes["current-status"]}>
        <div className={classes.selected}>
          <p>Doing</p>
          <img src={chevron} alt="Chevron Icon" />
        </div>
        <ChangeTaskStatus theme={theme} />
        <div></div>
      </div>
    </div>
  );
}

export default ChangeTaskStatus;
