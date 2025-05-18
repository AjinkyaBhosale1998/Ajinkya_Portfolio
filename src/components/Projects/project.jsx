import React, { useState, useEffect } from "react";
import ImgMediaCard from "./card.jsx";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box, Card, Grid, useTheme } from "@mui/material";
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const theme = useTheme();
  const gradient = theme.custom.primaryGradient;

  const interests = [
    { icon: <EmojiPeopleIcon sx={{ fontSize: 30, color: "primary" }} />, label: "Dancing" },
    { icon: <SportsCricketIcon sx={{ fontSize: 30, color: "primary" }} />, label: "Cricket" },
    { icon: <SportsGymnasticsIcon sx={{ fontSize: 30, color: "primary" }} />, label: "Calisthenics" },
    { icon: <LiveTvIcon sx={{ fontSize: 30, color: "primary" }} />, label: "Anime" }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("projectData.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, []);

  const renderCards = () => {
    return projects.map((project, index) => (
      <ImgMediaCard
        key={index}
        title={project.title}
        image={project.image}
        description={project.description}
        githubLink={project.githubLink}
        demoLink={project.demoLink}
      />
    ));
  };

  return (
    <>
      <div id="projects" style={{ textAlign: "center" }}>
        <div>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
            }}
          >
            My Recent Projects
          </Typography>
          <Card sx={{
            p: { xs: 2, sm: 3 },
            mb: 2,
            mx: { xs: 3, sm: 3, md: 5, lg: 7 },
            backgroundColor: "background.paper",
            borderRadius: 3,
            boxShadow: 2,
            borderLeft: `5px solid ${theme.palette.secondary.main}`,
          }}>
            <Typography sx={{ textAlign: "left", color: "text.secondary", fontSize: "1rem", lineHeight: 1.4, fontWeight: 500, }}>
              🚀 I take pride in crafting clean, efficient, and scalable code across both front-end and back-end technologies. Whether it's building responsive UIs with React or setting up robust APIs and integrations,  I strive to deliver maintainable solutions that perform.
            </Typography>
            <br></br>
            <Typography sx={{ textAlign: "left", color: "text.secondary", fontSize: "1rem", lineHeight: 1.4, fontWeight: 500 }}>
              📂 Below, you’ll find a selection of live project samples—deployed via Vercel and openly available on GitHub. These showcase my hands-on experience with modern tools and frameworks, and I’d love the opportunity to bring this same passion and technical depth to your team.
            </Typography>
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {renderCards()}
        </div>

        <Divider
          orientation="horizontal"
          variant="middle"
          sx={{
            width: "90%",
            marginInline: "auto",
            backgroundColor: "divider",
            marginTop: 5,
          }}
        />

        <div>
          <Typography
            variant="h3"
            sx={{
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: 2,
              marginTop: 3,
              textAlign: "center",
            }}
          >
            Interests
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "text.secondary",
              marginBottom: 2,
              marginTop: 2,
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Exploring Gen AI & Apart from coding, some other activities that I love to do!
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {interests.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    p: 3,
                    mb: 1,
                    mx: 5,
                    backgroundColor: "background.paper",
                    borderRadius: 3,
                    boxShadow: 2,
                    borderLeft: `5px solid ${theme.palette.secondary.main}`,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover .hover-content": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    className="hover-content"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    <Box sx={{ fontSize: 40 }}>{item.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        p: 1,
                        fontWeight: 500,
                        color: "text.primary",
                        textAlign: "center",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

        </div>
        <Divider
          orientation="horizontal"
          variant="middle"
          sx={{
            width: "90%",
            marginInline: "auto",
            backgroundColor: "divider",
            marginTop: 5,
          }}
        />
      </div>
    </>
  );
};

export default Project;
