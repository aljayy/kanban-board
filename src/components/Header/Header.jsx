import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.scss";
import MobileBoardConfig from "./MobileBoardConfig/MobileBoardConfig";
import BoardConfig from "./BoardConfig/BoardConfig";
import ThemeCtx from "../../context/themectx";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { theme } = useContext(ThemeCtx);

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

  return (
    <header className={`${deviceClasses} ${classes[theme]}`}>{configs}</header>
  );
}

export default Header;
