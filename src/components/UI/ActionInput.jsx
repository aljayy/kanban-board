import React from "react";
import classes from "./ActionInput.module.scss";

function ActionInput({ input }) {
  return (
    <>
      <label className={classes["action-input-label"]} for={input.id}>
        {input.label}
      </label>
      <input
        className={classes["action-input"]}
        placeholder={input.placeholder}
        type={input.type}
        id={input.id}
        name={input.id}
      />
    </>
  );
}

export default ActionInput;
