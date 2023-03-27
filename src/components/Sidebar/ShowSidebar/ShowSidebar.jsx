import React, { useContext } from "react";
import classes from "./ShowSidebar.module.scss";
import showIcon from "../../../assets/icon-show-sidebar.svg";
import BoardCtx from "../../../context/boardctx";

function ShowSidebar() {
  const { toggleSidebar } = useContext(BoardCtx);

  return (
    <button className={classes.showsidebar} onClick={toggleSidebar}>
      <img src={showIcon} alt="Show Sidebar Icon" />
    </button>
  );
}

export default ShowSidebar;
