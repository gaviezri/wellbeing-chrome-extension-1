import { createTheme} from "@mui/material";

export const theme = createTheme({
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
