import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { mainThemes } from "./";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={mainThemes}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};
