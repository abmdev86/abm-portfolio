import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#373737",
    },
    secondary: {
      main: "#ffad05",
    },
    background: {
      default: "#559cad",
      paper: "#f7fff6",
    },
    text: {
      primary: "rgba(18,17,17,0.87)",
    },
    error: {
      main: "#d32f2f",
    },
    info: {
      main: "#38405f",
    },
  },
  typography: {
    fontFamily: "Kanit",
    subtitle1: {
      fontFamily: "Oswald",
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
});
