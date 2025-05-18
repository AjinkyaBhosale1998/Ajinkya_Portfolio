import React, { useMemo, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Project from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const activeTheme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Box sx={{ overflowX: "hidden", maxWidth: "100vw" }}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <About />
        <Project />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
