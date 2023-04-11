import React, { useContext, useState } from "react";
import classes from "./ChangeTaskStatus.module.scss";
import chevron from "../../../assets/icon-chevron-down.svg";
import ThemeCtx from "../../../context/themectx";

function ChangeTaskStatus({ statuses, setStatuses }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme } = useContext(ThemeCtx);
  const visibilityToggle = showDropdown ? classes["show-element"] : "";

  function renderDropdown() {
    setShowDropdown(true);
  }

  function hideDropdown() {
    setShowDropdown(false);
  }

  function changeCurrentStatus(id) {
    setStatuses((prevStatuses) => {
      return prevStatuses.map((status) => {
        if (status.id === id) {
          return { ...status, isCurrent: true };
        } else return { ...status, isCurrent: false };
      });
    });
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
              <p
                key={status.id}
                onClick={() => {
                  changeCurrentStatus(status.id);
                }}
              >
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
