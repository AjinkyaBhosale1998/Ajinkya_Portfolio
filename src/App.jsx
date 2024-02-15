// import logo from './logo.svg';
import "./App.css";
import React from "react";
import theme from "./theme.jsx";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/navbar.jsx";
import About from "./components/About/about.jsx";
import Project from "./components/Projects/project.jsx";
// import Resume from "./components/Resume/resume.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <About />
        {/* <Resume /> */}
        <Project />
        <Contact />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
