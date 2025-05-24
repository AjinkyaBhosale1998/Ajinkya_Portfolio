import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Typography from "@mui/material/Typography";
import PlayArrow from "@mui/icons-material/PlayArrow";

const Footer = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const documentHeight = document.body.clientHeight;
      const footer = document.getElementById("footer");

      if (footer) {
        const footerHeight = footer.clientHeight;
        setIsSticky(scrollPosition + window.innerHeight >= documentHeight - footerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const githubRepositoryUrl = "https://github.com/AjinkyaBhosale1998";
  const linkedInUrl = "https://www.linkedin.com/in/ajinkya-bhosale-b8b2b0204/";
  const vercelUrl = "https://vercel.com/ajinkya-bhosales-projects";

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        py: { xs: 3, sm: 4 },
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "background.paper",
        transition: "transform 0.3s ease-in-out",
        transform: `${isSticky ? "translateY(0)" : "translateY(100%)"}`,
        boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
        zIndex: 10,
      }}
      id="footer"
    >
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", color: "text.primary" }}
          >
            Designed & Developed by A J I N K Y A
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4} textAlign="center">
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 8,
    }}
  >
    <Box component="a" href={githubRepositoryUrl} target="_blank" rel="noopener noreferrer" sx={{ color: "text.primary" }}>
      <GitHubIcon />
    </Box>
    <Box component="a" href={linkedInUrl} target="_blank" rel="noopener noreferrer" sx={{ color: "text.primary" }}>
      <LinkedInIcon />
    </Box>
    <Box component="a" href={vercelUrl} target="_blank" rel="noopener noreferrer" sx={{ color: "text.primary", transform: "rotate(-90deg)" }}>
      <PlayArrow />
    </Box>
    <Box component="a" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" sx={{ color: "text.primary" }}>
      <YouTubeIcon />
    </Box>
  </Box>
</Grid>


        <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "right" }}>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", color: "text.primary" }}
          >
            © 2025 • A J I N K Y A
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
