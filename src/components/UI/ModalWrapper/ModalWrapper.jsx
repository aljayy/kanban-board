import React, { useContext } from "react";
import classes from "./ModalWrapper.module.scss";
import ThemeCtx from "../../../context/themectx";

function ModalWrapper({ children, onClick }) {
  const { theme } = useContext(ThemeCtx);

  return (
    <div className={`${classes.modal} ${classes[theme]}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default ModalWrapper;
