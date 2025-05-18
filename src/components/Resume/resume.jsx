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
          textAlign: "center",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }} gutterBottom >
          Summary
        </Typography>
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            mb: 2,
            backgroundColor: "background.paper",
            borderRadius: 3,
            boxShadow: 2,
            borderLeft: `5px solid ${theme.palette.secondary.main}`,
            // mx: { xs: 1, sm: 2, md: 0 }, // Reduce margin on mobile/tablet
            width: {
              xs: "100%",
              sm: "90%", 
              md: "auto",
            },
            textAlign: "left",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
              color: "text.secondary",
              mb: 1,
            }}
          >
            <span>🚀</span> I'm obsessed with crafting pixel-perfect UIs, delivering scalable, high-performance web applications that align with business goals and user needs.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
              color: "text.secondary",
            }}
          >
            <span>🚀</span> Beyond coding, I’ve actively participated in resolving production issues, addressing build failures, managing hotfixes, and tackling high-priority tasks. I’ve also guided junior developers, conducted client-side code reviews, and recently dabbed into Jenkins, Azure, and GCP for deployment and CI/CD automation.
          </Typography>
        </Card>

        <Box sx={{ overflowX: "auto", maxWidth: "100%" }}>
  <ExperienceTimeline experienceData={experienceData} />
</Box>


        <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    mt: 5,
    mr: { xs: 0, md: "75px" }
  }}
>
  <Button
    variant="contained"
    startIcon={<DownloadIcon />}
    onClick={handleDownloadResume}
  >
    Download Resume
  </Button>
</Box>
      </Box>
    </div>
  );
};

export default Resume;
