import React, { useContext, useEffect, useState } from "react";
import classes from "./ChangeTaskStatus.module.scss";
import chevron from "../../../assets/icon-chevron-down.svg";
import BoardCtx from "../../../context/boardctx";
import ThemeCtx from "../../../context/themectx";

function ChangeTaskStatus() {
  const [statuses, setStatuses] = useState();
  const [showDropdown, setShowDropdown] = useState(false);
  const { boards, ids, changeTaskStatus } = useContext(BoardCtx);
  const { theme } = useContext(ThemeCtx);
  const visibilityToggle = showDropdown ? classes["show-element"] : "";

  useEffect(() => {
    let status = boards
      .find((board) => board.isActive)
      .columns.map((column) => {
        return {
          status: column.name,
          id: column.id,
          isCurrent: column.id === ids.column,
        };
      });

    setStatuses(status);
  }, [boards, ids]);

  function renderDropdown() {
    setShowDropdown(true);
  }

  function hideDropdown() {
    setShowDropdown(false);
  }

  if (!statuses || statuses.length < 1) return;

  return (
    <div className={`${classes.status} ${classes[theme]}`}>
      <p className={classes["current-status"]}>Current Status</p>
      <div
        className={classes["all-status"]}
        onMouseEnter={renderDropdown}
        onMouseLeave={hideDropdown}
      >
        <div className={classes.selected}>
          <p>{statuses.filter((status) => status.isCurrent)[0].status}</p>
          <img src={chevron} alt="Chevron Icon" />
          <div className={`${classes["spacing-filler"]} ${visibilityToggle}`} />
        </div>
        <div className={`${classes.dropdown} ${visibilityToggle}`}>
          {statuses.map((status) => {
            return (
              <p key={status.id} onClick={() => changeTaskStatus(status.id)}>
                {status.status}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChangeTaskStatus;
