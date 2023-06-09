import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Sidebar.module.scss";
import hide from "../../assets/icon-hide-sidebar.svg";
import AllBoards from "../Header/AllBoards/AllBoards";
import BoardCtx from "../../context/boardctx";
import ShowSidebar from "./ShowSidebar/ShowSidebar";
import ThemeToggler from "../Header/ThemeToggler/ThemeToggler";
import ThemeCtx from "../../context/themectx";
import SidebarPortal from "../UI/SidebarPortal/SidebarPortal";

function Sidebar() {
  const { showSidebar, toggleSidebar } = useContext(BoardCtx);
  const { theme } = useContext(ThemeCtx);
  const positionTransition = showSidebar ? classes.show : "";

  return (
    <>
      {ReactDOM.createPortal(
        <SidebarPortal>
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
              <li className={classes["hide-sb"]} onClick={toggleSidebar}>
                <button>
                  <img src={hide} alt="Hide Board Icon" />
                  <p>Hide Sidebar</p>
                </button>
              </li>
            </div>
          </div>
          <ShowSidebar />
        </SidebarPortal>,
        document.getElementById("sidebar-root")
      )}
    </>
  );
}

export default Sidebar;
