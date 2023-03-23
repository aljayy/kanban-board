import React, { useState } from "react";

const ThemeCtx = React.createContext({
  theme: String,
  toggleTheme: () => {},
});

export const ThemeCtxProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev = prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
};

export default ThemeCtx;
