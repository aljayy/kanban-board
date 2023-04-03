import React from "react";
import ReactDOM from "react-dom";

function OverlayPortal({ classes, onClick, children }) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes} onClick={onClick}>
          {children}
        </div>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default OverlayPortal;
