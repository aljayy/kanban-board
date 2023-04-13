import React, { useEffect, useState } from "react";
import styles from "./OverlayPortal.module.scss";
import ReactDOM from "react-dom";

function OverlayPortal({ classes, onClick, children }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    function handleScroll() {
      setPosition({ top: window.scrollY, left: window.scrollX });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`${classes} ${styles}`}
          onClick={onClick}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            overflow: "scroll",
          }}
        >
          {children}
        </div>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default OverlayPortal;
