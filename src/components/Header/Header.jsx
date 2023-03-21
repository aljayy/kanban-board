import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import MobileBoardConfig from "./MobileBoardConfig/MobileBoardConfig";
import BoardConfig from "./BoardConfig/BoardConfig";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const viewportSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", viewportSize);

    return () => {
      window.removeEventListener("resize", viewportSize);
    };
  }, []);

  const deviceClasses = isMobile ? classes["mobile-configs"] : classes.configs;
  const configs = isMobile ? <MobileBoardConfig /> : <BoardConfig />;

  return <header className={deviceClasses}>{configs}</header>;
}

export default Header;
