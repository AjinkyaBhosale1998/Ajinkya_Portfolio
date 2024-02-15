import React, { useState, useEffect } from "react";
import ImgMediaCard from "./card.jsx";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Project = () => {
  const [projects, setProjects] = useState([]);

  const interests = [
    "🕺 Dancing |🏏 Cricket | 🤸🏻 Calisthenics  | 🦊 Anime ",
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
          <Typography variant="h5" sx={{ color: "#132043" }}>
            Here are a few projects I've worked on recently.
          </Typography>
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
            }}
          >
          Exploring Gen AI & Apart from coding, some other activities that I love to do!
          </Typography>
          {interests.map((interest, index) => (
            <Typography
              key={index}
              variant="body3"
              sx={{
                color: "#132043",
                marginBottom: 2,
                marginTop: 2,
                textAlign: "center",
              }}
            >
              {interest}
            </Typography>
          ))}
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
