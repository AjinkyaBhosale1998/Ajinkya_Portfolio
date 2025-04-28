import { React } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StyledAvatar from "./StyledAvatar";
import { Divider, Tooltip } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from "@mui/material";

function Navbar({ isDarkMode, toggleTheme }) {
  const blogUrl = "https://dev-blog-puce.vercel.app/";

  // Clicking a navbar button will now scroll smoothly to the corresponding section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <StyledAvatar alt="profile photo" src="./profile.jpg" />
        <Typography variant="h5" sx={{ marginInline: "20px" }}>
          A J I N K Y A
        </Typography>

        <Toolbar
          sx={{
            marginLeft: "auto",
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button color="inherit" sx={{ fontSize: "0.9rem" }} onClick={() => scrollToSection("about")}>
            About
          </Button>
          <Button color="inherit" sx={{ fontSize: "0.9rem" }} onClick={() => scrollToSection("experience")}>
            Experience
          </Button>
          <Button color="inherit" sx={{ fontSize: "0.9rem" }} onClick={() => scrollToSection("projects")}>
            Projects
          </Button>
          <Button
            color="inherit"
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: "0.9rem" }}
          >
            Blogs
          </Button>

          <Button color="inherit" sx={{ fontSize: "0.9rem" }} onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{
              backgroundColor:"rgba(255, 255, 255, 0.12)",
              height: "25px",
              marginInline: "0px",
            }}
          />
          <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
            <IconButton onClick={toggleTheme} color="inherit">
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
