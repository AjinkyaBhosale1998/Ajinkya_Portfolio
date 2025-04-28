// App.jsx
import React, { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Project from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const activeTheme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <About />
      <Project />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
