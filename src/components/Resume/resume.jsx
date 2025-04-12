import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import ExperienceTimeline from "./timeline.jsx";
import { Card } from "@mui/material";

const Resume = () => {
  const [experienceData, setExperienceData] = useState([]);

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
    <Box
      sx={{
        color: "#132043",
        textAlign: "center",
        padding: "50px",
        fontSize: "700",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Summary
      </Typography>
      {/* <Typography variant="h6">
        With 2.2 years of experience, I am a skilled Front-End Web Developer
        specializing in React JS, Angular, JavaScript/TypeScript, HTML, and CSS.
      </Typography>*/}
      <Card sx={{
        p: 2,
        mb: 2,
        mx: 13,
        backgroundColor: "#f9f9f9",
        borderRadius: 3,
        boxShadow: 2,
        borderLeft: "5px solid #4995E6",
      }}>
        <Typography variant="h6" sx={{ textAlign: "left", m: "auto 10", }}>
          🚀  I'm obsessed with crafting pixel-perfect UIs, delivering scalable, high-performance web applications that align with business goals and user needs.
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "left", m: "auto 10", }}>
          🚀 Beyond coding, I’ve actively participated in resolving production issues, addressing build failures, managing hotfixes, and tackling high-priority tasks. I’ve also guided junior developers, conducted client-side code reviews, and recently dabbed into Jenkins, Azure, and GCP for deployment and CI/CD automation.
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
  );
};

export default Resume;
