import React, { useContext, useState } from "react";
import classes from "./MobileBoardConfig.module.scss";
import cross from "../../../assets/icon-add-task-mobile.svg";
import ellipsis from "../../../assets/icon-vertical-ellipsis.svg";
import logo from "../../../assets/logo-mobile.svg";
import path from "../../../assets/icon-chevron-down.svg";
import MobileMenuModal from "./MobileMenuModal";
import ThemeCtx from "../../../context/themectx";

function MobileHeader() {
  const [viewMenu, setViewMenu] = useState(false);
  const { theme } = useContext(ThemeCtx);

  function toggleMenu() {
    setViewMenu((prev) => !prev);
  }

  return (
    <>
      <div className={classes["board-title"]}>
        <img
          src={logo}
          alt={"Mobile logo"}
          className={classes["mobile-logo"]}
        />
        <h2
          className={`${classes["mobile-board-title"]} ${classes[theme]}`}
          onClick={toggleMenu}
        >
          Platform Launch
        </h2>
        <img
          src={path}
          alt={"Chevron icon"}
          className={`${classes.path} ${viewMenu ? classes.rotate : ""}`}
          onClick={toggleMenu}
        />
      </div>
      <div className={classes["board-actions"]}>
        <button className={classes["add-task"]} disabled={true}>
          <img src={cross} alt={"Add task icon"} />
        </button>
        <img src={ellipsis} alt={"Ellipsis icon"} />
      </div>
      <MobileMenuModal viewMenu={viewMenu} toggleMenu={toggleMenu} />
    </>
  );
}

export default MobileHeader;
