import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        mark: {
          backgroundColor: "#368ce2",
        },
        markLabel: {
          color: "#368ce2",
        },
      },
    },
  },
});

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
            setIntervalLength(newValue);
            resetTime(newValue);
          }}
          style={{ marginLeft: "20px", marginRight: "20px" }}
        />
      </ThemeProvider>
    </>
  );
};

export default CustomSlider;
