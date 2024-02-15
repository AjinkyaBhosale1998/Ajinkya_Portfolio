// About.js
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Popover from "./popover.jsx";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
// import ReusableCardStepper from "./cardHobbies.jsx";
import "./about.css";
import Divider from "@mui/material/Divider";
import SkillMasonry from "./skill.jsx";
import Resume from "../../components/Resume/resume.jsx";

const About = () => {
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
    <Box padding="80px">
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ color: "#132043", fontWeight: "bold" }}
          >
            Hi, I'm 👋🏻 <span className="frontend">Front-End</span>{" "}
            <span className="react">React</span>{" "}
            <span className="developer">Developer</span>
          </Typography>
          <Typography variant="h6" gutterBottom>
            With 2+ years of experience, I am a skilled Front-End Web Developer
            specializing in React, Angular, JavaScript/TypeScript, HTML, and
            CSS.
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 3 }}>
            My focus is on crafting pixel-perfect UIs and creating reusable,
            scalable components. I'm passionate about clean, efficient code and
            have hands-on experience in React.
          </Typography>
          <Typography className="cool" variant="h3" sx={{ marginTop: 2 }}>
            Let's build cool things!
          </Typography>
          <Toolbar sx={{ gap: 1, marginTop: 2, padding: "0 !important" }}>
            <Button
              component="a"
              href={githubRepositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "& .MuiButton-root": {
                  color: "#132043",
                },
              }}
            >
              <GitHubIcon />
            </Button>
            <Button
              component="a"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                "& .MuiButton-root": {
                  color: "#132043",
                },
              }}
            >
              <LinkedInIcon />
            </Button>

            <Popover />
          </Toolbar>
        </Grid>
        <Grid item xs={4}>
          <img
            src="myprofile1.jpg"
            alt="My Profile"
            style={{ width: "100%", boxShadow: "5 15px 20px rgba(0, 0, 0, 1)" }}
          />
        </Grid>
      </Grid>

      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{
          width: "100%",
          marginInline: "0px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          marginTop: 5,
        }}
      />

      <Resume />

      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{
          width: "100%",
          marginInline: "0px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          marginTop: 1,
          marginBottom: 5,
        }}
      />
      <Typography
        variant="h3"
        sx={{
          color: "#132043",
          marginBottom: 2,
          marginTop: 3,
          textAlign: "center",
        }}
      >
        Skills
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {skills.map((category) => (
          <div
            key={category.title}
            style={{ margin: "16px", textAlign: "center" }}
          >
            <Typography variant="h4" gutterBottom>
              {category.title}
            </Typography>
            <SkillMasonry skills={category.skills} />
          </div>
        ))}
      </Box>

      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{
          width: "100%",
          marginInline: "0px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          marginTop: 5,
        }}
      />
    </Box>
  );
};

export default About;
