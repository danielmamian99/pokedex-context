import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const mainThemes = createTheme({
  palette: {
    primary: {
      main: "#2979ff",
    },
    secondary: {
      light: "#f6685e",
      main: "#f44336",
    },
    warning: {
      main: "#ffea00",
    },
    error: {
      main: red.A400,
    },
  },
});
