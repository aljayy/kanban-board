import React from "react";

function OverlayPortal({ classes, onClick, children }) {
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

export default OverlayPortal;
