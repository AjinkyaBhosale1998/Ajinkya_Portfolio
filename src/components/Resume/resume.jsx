import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import ExperienceTimeline from "./timeline.jsx";
import { Card, useTheme } from "@mui/material";

const Resume = () => {
  const [experienceData, setExperienceData] = useState([]);
  const theme = useTheme();
  const gradient = theme.custom.primaryGradient;

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const response = await fetch("experienceData.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setExperienceData(data.experience);
      } catch (error) {
        console.error("Error fetching experience data:", error.message);
      }
    };

    fetchExperienceData();
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = process.env.PUBLIC_URL + "/AjinkyaResume.pdf";
    const a = document.createElement("a");
    a.href = resumeUrl;
    a.download = "Ajinkya Bhosale Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div id="experience">
    <Box
      sx={{
        color: "#132043",
        textAlign: "center",
        padding: "50px",
        fontSize: "700",
      }}
    >
      <Typography variant="h3"  sx={{ background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textAlign: "center",}} gutterBottom >
        Summary
      </Typography>
      <Card sx={{
        p: 2,
        mb: 2,
        // mx: 5,
        backgroundColor: "background.paper",
        borderRadius: 3,
        boxShadow: 2,
        borderLeft: `5px solid ${theme.palette.secondary.main}`,
      }}>
        <Typography variant="h6" sx={{ fontSize: "1.1rem",color: "text.secondary", textAlign: "left", m: "auto 10", }}>
        <span>🚀</span>  I'm obsessed with crafting pixel-perfect UIs, delivering scalable, high-performance web applications that align with business goals and user needs.
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1.1rem", color: "text.secondary",textAlign: "left", m: "auto 10", }}>
          <span>🚀</span> Beyond coding, I’ve actively participated in resolving production issues, addressing build failures, managing hotfixes, and tackling high-priority tasks. I’ve also guided junior developers, conducted client-side code reviews, and recently dabbed into Jenkins, Azure, and GCP for deployment and CI/CD automation.
        </Typography>
      </Card>
      <ExperienceTimeline experienceData={experienceData} />

      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        sx={{ margin: "10px", marginRight: "75px" }}
        onClick={handleDownloadResume}
      >
        Download Resume
      </Button>
    </Box>
    </div>
  );
};

export default Resume;
