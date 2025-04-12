import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
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

        if (
          scrollPosition + window.innerHeight >=
          documentHeight - footerHeight
        ) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
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
        padding: 2,
        backgroundColor: "#132043",
        transition: "transform 0.3s ease-in-out",
        transform: `${isSticky ? "translateY(0)" : "translateY(100%)"}`,
      }}
      id="footer"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginInline: "20px", fontSize: "1.2rem", color: "#fff" }}
        >
          Designed & Developed by A J I N K Y A
        </Typography>
        <BottomNavigation sx={{ gap: 1, backgroundColor: "transparent" }}>
          <BottomNavigationAction
            href={githubRepositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff" }}
            icon={<GitHubIcon />}
          />
          <BottomNavigationAction
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff" }}
            icon={<LinkedInIcon />}
          />
          <BottomNavigationAction
            href={vercelUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff", transform: "rotate(-90deg)" }}
            icon={<PlayArrow />}
          />
          <BottomNavigationAction
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff" }}
            icon={<YouTubeIcon />}
          />
        </BottomNavigation>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginInline: "60px", fontSize: "1.2rem", color: "#fff" }}
        >
          © 2025 • A J I N K Y A
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
