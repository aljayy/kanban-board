import React, { useContext } from "react";
import classes from "./ActionInput.module.scss";
import ThemeCtx from "../../context/themectx";

function ActionInput({ input }) {
  const { theme } = useContext(ThemeCtx);
  const labelTheme = classes[theme + "-label"];
  const inputTheme = classes[theme + "-input"];

  return (
    <>
      <label
        className={`${classes["action-input-label"]} ${labelTheme}`}
        for={input.id}
      >
        {input.label}
      </label>
      <input
        className={`${classes["action-input"]} ${inputTheme}`}
        placeholder={input.placeholder}
        type={input.type}
        id={input.id}
        name={input.id}
      />
    </>
  );
}

export default ActionInput;
