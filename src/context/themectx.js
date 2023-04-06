import React, { useState, useEffect } from "react";
import classes from "../App.module.scss";

const ThemeCtx = React.createContext({
  theme: String,
  toggleTheme: () => {},
});

export const ThemeCtxProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev = prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.classList.add(classes[theme]);

    return () => {
      document.documentElement.classList.remove(classes[theme]);
    };
  }, [theme]);

  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
};

export default ThemeCtx;
