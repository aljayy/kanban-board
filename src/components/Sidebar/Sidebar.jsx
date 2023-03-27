import React, { useContext } from "react";
import classes from "./Sidebar.module.scss";
import hide from "../../assets/icon-hide-sidebar.svg";
import AllBoards from "../Header/AllBoards/AllBoards";
import ThemeToggler from "../Header/ThemeToggler/ThemeToggler";
import ShowSidebar from "./ShowSidebar/ShowSidebar";
import ThemeCtx from "../../context/themectx";

function Sidebar({ showSidebar, toggleSidebar }) {
  const positionTransition = showSidebar ? classes.show : "";
  const { theme } = useContext(ThemeCtx);

  return (
    <>
      <div
        className={`${classes.sidebar} ${positionTransition} ${classes[theme]}`}
      >
        <div>
          <div className={`${classes["sb-logo-container"]} `} />
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
