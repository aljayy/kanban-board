import React, { useContext } from "react";
import classes from "./ActionInput.module.scss";
import ThemeCtx from "../../context/themectx";

function ActionInput({ input }) {
  const { theme } = useContext(ThemeCtx);
  const labelTheme = classes[theme + "-label"];
  const inputTheme = classes[theme + "-input"];

  if (input === undefined) return;

  const errorClass = input.error
    ? classes["show-error"]
    : classes["hide-error"];

  const inputError = input.error ? classes["input-error"] : "";

  return (
    <>
      <label
        className={`${classes["action-input-label"]} ${labelTheme}`}
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <input
        className={`${classes["action-input"]} ${inputTheme} ${inputError}`}
        placeholder={input.placeholder}
        defaultValue={input.value}
        type={input.type}
        id={input.id}
        name={input.id}
        onChange={(e) => input.onChange(e.target.value)}
      />
      <p className={errorClass}>Can't be empty</p>
    </>
  );
}

export default ActionInput;
