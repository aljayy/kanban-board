import React, { useContext } from "react";
import classes from "./ActionTagInput.module.scss";
import deleteIcon from "../../assets/icon-cross.svg";
import ButtonSecondary from "./Buttons/ButtonSecondary";
import ThemeCtx from "../../context/themectx";

function ActionTagInput({ data }) {
  const { theme } = useContext(ThemeCtx);
  const labelTheme = classes[theme + "-tag-label"];
  const wrapperTheme = classes[theme + "-tag-wrapper"];

  return (
    <>
      <label className={`${classes["action-tag-label"]} ${labelTheme}`}>
        {data.label}
      </label>
      {data.tags.map((tag, index) => {
        return (
          <div
            className={`${classes["action-tag-wrapper"]} ${wrapperTheme}`}
            key={index}
          >
            <input
              type={data.type}
              defaultValue={tag.title}
              onChange={(e) => data.onChange(e.target.value, index)}
            />
            <img src={deleteIcon} alt="Delete Icon" />
          </div>
        );
      })}
      <div className={classes["action-button"]}>
        <ButtonSecondary text={data.action} />
      </div>
    </>
  );
}

export default ActionTagInput;
