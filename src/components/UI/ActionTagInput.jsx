import React from "react";
import classes from "./ActionTagInput.module.scss";
import deleteIcon from "../../assets/icon-cross.svg";
import ButtonSecondary from "./Buttons/ButtonSecondary";

function ActionTagInput({ input }) {
  return (
    <>
      <label className={classes["action-tag-label"]}>{input.label}</label>
      {input.columns.map((column) => {
        return (
          <div className={classes["action-tag-wrapper"]}>
            <input type={input.type} defaultValue={column.title} />
            <img src={deleteIcon} alt="Delete Icon" />
          </div>
        );
      })}
      <div className={classes["action-button"]}>
        <ButtonSecondary text={input.action} />
      </div>
    </>
  );
}

export default ActionTagInput;
