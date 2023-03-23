import React, { useContext, useState } from "react";
import classes from "./BoardConfig.module.scss";
import logolight from "../../../assets/logo-light.svg";
import ellipsis from "../../../assets/icon-vertical-ellipsis.svg";
import Sidebar from "../../Sidebar/Sidebar";
import ThemeCtx from "../../../context/themectx";

function BoardConfig() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { theme } = useContext(ThemeCtx);

  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  const paddingTransition = showSidebar ? classes["add-padding"] : "";

  return (
    <>
      <div className={classes["logo-container"]}>
        <img src={logolight} alt="Light Themed Logo" />
      </div>
      <div className={`${classes["board-details"]} ${paddingTransition}`}>
        <h2 className={classes[theme]}>Platform Launch</h2>
        <div className={classes["board-configuration"]}>
          <button>
            <p>+ Add New Task</p>
          </button>
          <div>
            <img src={ellipsis} alt="Ellipsis Icon" />
          </div>
        </div>
      </div>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default BoardConfig;
