import React, { useContext } from "react";
import classes from "./ActionDesc.module.scss";
import ThemeCtx from "../../context/themectx";

function ActionDesc({ taskDesc }) {
  const { theme } = useContext(ThemeCtx);

  return (
    <>
      <label className={`${classes} ${classes[theme]}`}>Description</label>
      <textarea
        placeholder={`e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little.`}
        className={classes[`${theme}-desc`]}
        defaultValue={taskDesc.description}
        onChange={(e) => taskDesc.onChange(e.target.value)}
      />
    </>
  );
}

export default ActionDesc;
