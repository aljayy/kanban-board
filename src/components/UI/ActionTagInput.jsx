import React, { useContext } from "react";
import classes from "./ActionTagInput.module.scss";
import deleteIcon from "../../assets/icon-cross.svg";
import ButtonSecondary from "./Buttons/ButtonSecondary";
import ThemeCtx from "../../context/themectx";

function ActionTagInput({ input }) {
  const { theme } = useContext(ThemeCtx);
  const labelTheme = classes[theme + "-tag-label"];
  const wrapperTheme = classes[theme + "-tag-wrapper"];

  return (
    <>
      <label className={`${classes["action-tag-label"]} ${labelTheme}`}>
        {input.label}
      </label>
      {input.columns.map((column) => {
        return (
          <div className={`${classes["action-tag-wrapper"]} ${wrapperTheme}`}>
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
