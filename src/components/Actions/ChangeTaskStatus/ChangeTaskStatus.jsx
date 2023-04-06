import React, { useContext, useEffect, useState } from "react";
import classes from "./ChangeTaskStatus.module.scss";
import chevron from "../../../assets/icon-chevron-down.svg";
import BoardCtx from "../../../context/boardctx";

function ChangeTaskStatus() {
  const [currentStatus, setCurrentStatus] = useState();
  const { boards, theme, ids } = useContext(BoardCtx);

  useEffect(() => {
    let status = boards
      .find((board) => board.isActive)
      .columns.filter((column) => column.id === ids.column)[0].name;

    setCurrentStatus(status);
  }, [boards, ids]);
  return (
    <div className={`${classes.status} ${classes[theme]}`}>
      <p>Current Status</p>
      <div className={classes["current-status"]}>
        <div className={classes.selected}>
          <p>{currentStatus}</p>
          <img src={chevron} alt="Chevron Icon" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ChangeTaskStatus;
