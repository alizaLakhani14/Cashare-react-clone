import React from "react";
import Select from "react-select";
import "./MultipleSelect.css";

const MultipleSelect = ({options, value}) => {
  return (
    <div>
      <Select
        defaultValue={value || options}
        isMulti
        name="colors"
        className="basic-multi-select"
        classNamePrefix="select"
        options={options}
      ></Select>
    </div>
  );
};

export default MultipleSelect;
