import React from "react";
import classes from "./BoardConfig.module.scss";
import logolight from "../../../assets/logo-light.svg";
import ellipsis from "../../../assets/icon-vertical-ellipsis.svg";

function BoardConfig({ showSidebar }) {
  const paddingTransition = showSidebar ? classes["add-padding"] : "";

  return (
    <>
      <div className={classes["logo-container"]}>
        <img src={logolight} alt="Light Themed Logo" />
      </div>
      <div className={`${classes["board-details"]} ${paddingTransition}`}>
        <h2>Platform Launch</h2>
        <div className={classes["board-configuration"]}>
          <button>
            <p>+ Add New Task</p>
          </button>
          <div>
            <img src={ellipsis} alt="Ellipsis Icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardConfig;
