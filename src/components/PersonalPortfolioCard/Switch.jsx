import React, { useState } from "react";
import "./Switch.css";

const Switch = () => {
  const [isChecked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(true);
  };
  return (
    <div className="switch-container">
      <input type="checkbox"/>
      <label className="off">Off</label>
      <label className="on">On</label>
    </div>
  );
};

export default Switch;
