import React from "react";
export const Switch = (props) => {
  return (
    <div
      className="container container--switch flex"
      onChange={props.toggleTheme}
      checked={props.checked}
    >
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
