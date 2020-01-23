import React from "react";
import "./InputSlider.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 530
  }
});

function valuetext(value) {
  return `${value}°C`;
}

const InputSlider = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 300]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      {/* <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography> */}
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={props.min}
        max={props.max}
        valueLabelDisplay="on"
        // marks={[
        //   { value: 0, label: "0" },
        //   { value: 4, label: "4" },
        //   { value: 8, label: "8" },
        //   { value: 11, label: "11" },
        //   { value: 15, label: "15+" }
        // ]}
        marks={props.marks}
        step={props.step}
      />
    </div>
  );
};

export default InputSlider;
