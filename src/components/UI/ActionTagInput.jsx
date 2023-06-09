import React, { useContext } from "react";
import classes from "./ActionTagInput.module.scss";
import deleteIcon from "../../assets/icon-cross.svg";
import ButtonSecondary from "./Buttons/ButtonSecondary";
import ThemeCtx from "../../context/themectx";

function ActionTagInput({ data }) {
  const { theme } = useContext(ThemeCtx);
  const labelTheme = classes[theme + "-tag-label"];
  const wrapperTheme = classes[theme + "-tag-wrapper"];

  if (!data.tags) return;

  return (
    <>
      <label className={`${classes["action-tag-label"]} ${labelTheme}`}>
        {data.label}
      </label>
      {data.tags.map((tag, index) => {
        return (
          <div
            className={`${classes["action-tag-wrapper"]} ${wrapperTheme} ${
              tag.hasError ? classes.error : ""
            }`}
            key={index}
          >
            <input
              type={data.type}
              value={tag.title || tag.name}
              placeholder={"e.g. Make Coffee"}
              onChange={(e) => data.onChange(e.target.value, index)}
            />
            <p className={classes["error-message"]}>Can't be empty</p>
            <img
              src={deleteIcon}
              alt="Delete Icon"
              onClick={() => data.onDelete(index, tag.id)}
            />
          </div>
        );
      })}
      <div className={classes["action-button"]}>
        <ButtonSecondary text={data.action} onClick={data.onAction} />
      </div>
    </>
  );
}

export default ActionTagInput;
