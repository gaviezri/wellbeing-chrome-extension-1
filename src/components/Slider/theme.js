import { createTheme} from "@mui/material";

export default createTheme({
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

