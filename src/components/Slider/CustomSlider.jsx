import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";

const CustomSlider = ({
  title,
  initValue,
  intervalLengthKey,
  hrs = false,
  setIntervalLength,
  resetTime,
  value,
  ...props
}) => {
  const [sliderValue, setSliderValue] = useState(localStorage.getItem(intervalLengthKey));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Slider
          valueLabelDisplay="auto"
          size="small"
          aria-label={title}
          value={sliderValue}
          {...props}
          onChange={(e, newValue) => {
            localStorage.setItem(intervalLengthKey, newValue);
            setSliderValue(newValue);
          }}
        />
      </ThemeProvider>
    </>
  );
};

export default CustomSlider;
