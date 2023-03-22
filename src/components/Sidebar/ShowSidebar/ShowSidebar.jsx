import React from "react";
import classes from "./ShowSidebar.module.scss";
import showIcon from "../../../assets/icon-show-sidebar.svg";

function ShowSidebar({ toggleSidebar }) {
  return (
    <button className={classes.showsidebar} onClick={toggleSidebar}>
      <img src={showIcon} alt="Show Sidebar Icon" />
    </button>
  );
}

export default ShowSidebar;
