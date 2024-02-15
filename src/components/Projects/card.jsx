import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";

const ImgMediaCard = ({ title, image, description, githubLink, demoLink }) => {
  return (
    <Box sx={{ padding: "50px 25px" }}>
      <Card
        sx={{
          maxWidth: 400,
          boxShadow: "0 10px 20px rgba(19, 32, 67, 0.5)",
          color: "#132043",
        }}
      >
        <CardMedia
          component="img"
          alt="project image"
          height="180"
          image={image}
        />
        <CardContent sx={{ padding: "16px", display: "flex", flexDirection: "column", minHeight: "180px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#132043", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body3"
            color="text.hint"
            sx={{ textAlign: "left" }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: "bold" }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            startIcon={<SendIcon />}
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: "bold" }}
          >
            Demo
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ImgMediaCard;
