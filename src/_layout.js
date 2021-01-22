import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

import React from "react";
import { useThemeState } from "./context/theme";

export const light = {
  palette: {
    type: "light",
  },
};

export const dark = {
  palette: {
    type: "dark",
  },
};

export default function Layout({ children }) {
  const { theme } = useThemeState();

  const lightTheme = createMuiTheme(light);
  const darkTheme = createMuiTheme(dark);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box marginTop={2}>{children}</Box>
      </Container>
    </ThemeProvider>
  );
}
