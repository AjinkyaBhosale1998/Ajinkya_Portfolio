import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SkillMasonry = ({ skills }) => {
  return (
    <Grid item xs={12} md={4}>
      <Box sx={{ width: 400, minHeight: 100 }}>
        <Masonry columns={3} spacing={2}>
          {skills.map((skill, index) => (
            <Item
              key={index}
              sx={{ height: skill.value, justifyContent: "center" }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div>{skill.name}</div>
            </Item>
          ))}
        </Masonry>
      </Box>
    </Grid>
  );
};

export default SkillMasonry;
