import { createTheme } from "@mui/material";
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    success: {
      main: "#00C48C",
      contrastText: "#000",
    },
    text: {
      primary: "#233B53",
      secondary: "#7e99b4",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 60,
    },
  },
  typography: {
    fontFamily: "'Mingzat', sans-serif",
  },
});
