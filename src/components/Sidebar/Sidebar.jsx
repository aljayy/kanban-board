import React from "react";
import classes from "./Sidebar.module.scss";
import lightlogo from "../../assets/logo-light.svg";
import hide from "../../assets/icon-hide-sidebar.svg";
import AllBoards from "../Header/AllBoards/AllBoards";
import ThemeToggler from "../Header/ThemeToggler/ThemeToggler";
import ShowSidebar from "./ShowSidebar/ShowSidebar";

function Sidebar({ showSidebar, toggleSidebar }) {
  const positionTransition = showSidebar ? classes.show : "";

  return (
    <>
      <div className={`${classes.sidebar} ${positionTransition}`}>
        <div>
          <div className={classes["sb-logo-container"]}>
            <img src={lightlogo} alt="Kanban Logo" />
          </div>
          <div className={classes["sb-all-boards"]}>
            <AllBoards />
          </div>
        </div>
        <div>
          <div className={classes["theme-toggle"]}>
            <ThemeToggler />
          </div>
          <li className={classes["hide-sb"]}>
            <button onClick={toggleSidebar}>
              <img src={hide} alt="Hide Board Icon" />
              <p>Hide Sidebar</p>
            </button>
          </li>
        </div>
      </div>
      <ShowSidebar toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Sidebar;
