import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Popover from "./popover.jsx";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import "./about.css";
import Divider from "@mui/material/Divider";
import SkillMasonry from "./skill.jsx";
import Resume from "../../components/Resume/resume.jsx";
import { useTheme } from "@emotion/react";

const About = () => {
  const theme = useTheme();
  const gradient = theme.custom.primaryGradient;
  const isDarkMode = theme.palette.mode === "dark";

  useEffect(() => {
    const preloadImages = () => {
      const images = ["profiledarkmode.png", "myprofile1.jpg"];
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, []);

  const githubRepositoryUrl = "https://github.com/AjinkyaBhosale1998";

  const linkedInUrl = "https://www.linkedin.com/in/ajinkya-bhosale-b8b2b0204/";

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("skillData.json");
        const data = await response.json();
        setSkills(data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="about">
      <Box sx={{
        px: { xs: 2, sm: 4, md: 8 },
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 6, sm: 8, md: 10 },
      }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem", lg: "3rem" },
              }}
            >
              <span className="frontend">Hey! I'm Ajinkya 👋🏻 & </span>
              <span className="react">I'm Front-End React Developer</span>
            </Typography>

            <Typography
              variant="h6"
              gutterBottom
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "0.9rem", sm: "1rem", lg: "1.1rem" },
              }}
            >
              Skilled Front-End React Developer with 3.5+ years of experience in modern web technologies to deliver pixel-perfect UIs and
              build robust web applications using React, JavaScript ES6+, TypeScript, Redux, GraphQL, Postgresql, HTML, CSS & Git. Creating responsive,
              high-performance solutions. I thrive in team environments and am dedicated to delivering top-quality solutions that meet both client and user expectations.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                marginTop: 3,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "0.9rem", sm: "1rem", lg: "1.1rem" },
              }}
            >
              I've worked with clients such as FIS Global (Banking Domain) & Cisco (High-Tech Domain).
            </Typography>

            <Typography
              className="cool"
              variant="h3"
              sx={{
                marginTop: 2,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
              }}
            >
              Let's build cool things! 🚀
            </Typography>

            <Toolbar
              sx={{
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1,
                marginTop: 2,
                padding: "0 !important",
              }}
            >
              <Button
                component="a"
                href={githubRepositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </Button>
              <Button
                component="a"
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Button>

              <Popover />
            </Toolbar>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <img
              src={isDarkMode ? "profiledarkmode.png" : "myprofile1.jpg"}
              alt="My Profile"
              style={{
                width: "100%",
              }}
            />
          </Grid>
        </Grid>



        <Divider
          orientation="horizontal"
          variant="middle"
          sx={{
            width: "100%",
            marginInline: "0px",
            backgroundColor: "divider",
            marginTop: 5,
          }}
        />

        {/* <div className="section-container"> */}
        <Resume />
        {/* </div> */}

        <Divider
          orientation="horizontal"
          variant="middle"
          sx={{
            width: "100%",
            marginInline: "0px",
            backgroundColor: "divider",
            marginTop: 1,
            marginBottom: 5,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            marginBottom: 5,
            marginTop: 3,
          }}
        >
          Professional Skillset
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {skills.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.title}>
              <Box sx={{ m: 2, textAlign: "center" }} >
                <Box>
                  <Typography variant="h4" gutterBottom>
                    {category.title}
                  </Typography>
                  <SkillMasonry skills={category.skills} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider
          orientation="horizontal"
          variant="middle"
          sx={{
            width: "100%",
            marginInline: "0px",
            backgroundColor: "divider",
            marginTop: 5,
          }}
        />
      </Box>
    </div>
  );
};

export default About;
