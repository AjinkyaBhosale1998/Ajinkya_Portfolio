// theme.jsx
import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#132043" },
    secondary: { main: "#132043" },
    background: { default: "#ffffff", paper: "#f9f9f9" },
    text: { primary: "#132043" },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  typography: { fontFamily: `'Poppins', sans-serif` },
  custom: {
    primaryGradient: "linear-gradient(74deg, rgb(66, 133, 244) 0px, rgb(155, 114, 203) 9%, rgb(217, 101, 112) 20%, rgb(217, 101, 112) 24%, rgb(155, 114, 203) 35%, rgb(66, 133, 244) 44%, rgb(155, 114, 203) 50%, rgb(217, 101, 112) 56%, rgb(27, 28, 29) 75%, rgb(27, 28, 29) 100%)",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ffffff" },
    secondary: { main: "#FFFFFF" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff" },
    divider: "rgba(255, 255, 255, 0.12)",
  },
  typography: { fontFamily: `'Poppins', sans-serif` },
  custom: {
    primaryGradient: "linear-gradient(74deg, rgb(66, 133, 244) 0px, rgb(155, 114, 203) 9%, rgb(217, 101, 112) 20%, rgb(217, 101, 112) 24%, rgb(155, 114, 203) 35%, rgb(66, 133, 244) 44%, rgb(155, 114, 203) 50%, rgb(217, 101, 112) 56%, rgb(146, 155, 163) 75%, rgb(66, 133, 244) 100%)",
  },
});
