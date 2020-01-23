import React from "react";
import "./Switch.css";

const Switch = () => {
  const [isChecked, setChecked] = React.useState(true);
  const handleClick = evt => {
    evt.stopPropagation();
    setChecked(!isChecked);
  };

  return (
    <div className="switch-container">
      <input
        type="checkbox"
        checked={isChecked}
        onClick={handleClick}
        className="switch"
      />
      <label className="off" onClick={handleClick}>
        Off
      </label>
      <label className="on" onClick={handleClick}>
        On
      </label>
    </div>
  );
};

export default Switch;
