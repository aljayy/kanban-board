import React, { useContext } from "react";
import classes from "./BoardConfig.module.scss";
import ellipsis from "../../../assets/icon-vertical-ellipsis.svg";
import Sidebar from "../../Sidebar/Sidebar";
import BoardCtx from "../../../context/boardctx";
import ThemeCtx from "../../../context/themectx";

function BoardConfig() {
  const { theme } = useContext(ThemeCtx);
  const { activeBoard, showSidebar } = useContext(BoardCtx);

  const paddingTransition = showSidebar ? classes["add-padding"] : "";

  return (
    <>
      <div
        className={`${classes["logo-container"]} ${classes["logo-" + theme]}`}
      >
        <div className={classes.logo} />
      </div>
      <div className={`${classes["board-details"]} ${paddingTransition}`}>
        <h2 className={classes[theme]}>{activeBoard.name}</h2>
        <div className={classes["board-configuration"]}>
          <button>
            <p>+ Add New Task</p>
          </button>
          <div>
            <img src={ellipsis} alt="Ellipsis Icon" />
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default BoardConfig;
