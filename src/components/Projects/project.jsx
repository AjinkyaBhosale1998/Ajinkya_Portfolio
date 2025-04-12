import React, { useState, useEffect } from "react";
import ImgMediaCard from "./card.jsx";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box, Card, Grid } from "@mui/material";
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Project = () => {
  const [projects, setProjects] = useState([]);

  const interests = [
    { icon: <EmojiPeopleIcon sx={{ fontSize: 30, color: "#132043" }} />, label: "Dancing" },
    { icon: <SportsCricketIcon sx={{ fontSize: 30, color: "#132043" }} />, label: "Cricket" },
    { icon: <SportsGymnasticsIcon sx={{ fontSize: 30, color: "#132043" }} />, label: "Calisthenics" },
    { icon: <LiveTvIcon sx={{ fontSize: 30, color: "#132043" }} />, label: "Anime" }
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
      <div style={{ textAlign: "center" }}>
        <div>
          <Typography variant="h3" gutterBottom sx={{ color: "#132043" }}>
            My Recent Projects
          </Typography>
          <Card sx={{
            p: 2,
            mb: 2,
            mx: 14,
            backgroundColor: "#f9f9f9",
            borderRadius: 3,
            boxShadow: 2,
            borderLeft: "5px solid #4995E6",
          }}>
            <Typography sx={{ textAlign: "left", color: "#4A4A4A", fontSize: "1.15rem", lineHeight: 1.4, fontWeight: 600, }}>
              🚀 I take pride in crafting clean, efficient, and scalable code across both front-end and back-end technologies. Whether it's building responsive UIs with React or setting up robust APIs and integrations,  I strive to deliver maintainable solutions that perform.
            </Typography>
            <br></br>
            <Typography sx={{ textAlign: "left", color: "#4A4A4A", fontSize: "1.15rem", lineHeight: 1.4, fontWeight: 600, }}>
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
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            marginTop: 5,
          }}
        />

        <div>
          <Typography
            variant="h3"
            sx={{
              color: "#132043",
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
              color: "#132043",
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
                    backgroundColor: "#f9f9f9",
                    borderRadius: 3,
                    boxShadow: 2,
                    borderLeft: "5px solid #4995E6",
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
                        // mt: 1,
                        p: 1,
                        // fontSize: "1.2rem",
                        fontWeight: 500,
                        color: "#132043",
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
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            marginTop: 5,
          }}
        />
      </div>
    </>
  );
};

export default Project;
