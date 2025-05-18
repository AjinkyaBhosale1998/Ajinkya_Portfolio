import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import StyledAvatar from "./StyledAvatar";

function Navbar({ isDarkMode, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const blogUrl = "https://dev-blog-puce.vercel.app/";

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  const navItems = [
    { label: "About", action: () => scrollToSection("about") },
    { label: "Experience", action: () => scrollToSection("experience") },
    { label: "Projects", action: () => scrollToSection("projects") },
    {
      label: "Blogs",
      action: () => window.open(blogUrl, "_blank", "noopener,noreferrer"),
    },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <StyledAvatar alt="profile photo" src="./profile.jpg" />
          <Typography variant="h6" sx={{ marginLeft: 2, flexGrow: 1 }}>
            A J I N K Y A
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List sx={{ width: 200 }}>
                  {navItems.map((item, index) => (
                    <ListItem button key={index} onClick={item.action}>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                  <Divider sx={{ my: 1 }} />
                  <ListItem>
                    <Tooltip
                      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                      <IconButton onClick={toggleTheme} color="inherit">
                        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                      </IconButton>
                    </Tooltip>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Toolbar
              sx={{
                marginLeft: "auto",
                display: "flex",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  sx={{ fontSize: "0.9rem" }}
                  onClick={item.action}
                >
                  {item.label}
                </Button>
              ))}
              <Divider
                orientation="vertical"
                variant="middle"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  height: "25px",
                }}
              />
              <Tooltip
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                <IconButton onClick={toggleTheme} color="inherit">
                  {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Tooltip>
            </Toolbar>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
