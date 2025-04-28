import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { Card, useTheme } from "@mui/material";

const ExperienceTimeline = ({ experienceData }) => {
  const theme = useTheme();
  return (
    <Card sx={{
      p: 2,
      mb: 2,
      // mx: 13,
      backgroundColor: "background.paper",
      borderRadius: 3,
      boxShadow: 2,
      borderLeft: `5px solid ${theme.palette.secondary.main}`,
    }}>
      <Timeline
        sx={{ marginRight: "75px" }}
      >
        {experienceData &&
          experienceData.map((experience, index) => (
            <TimelineItem key={index} position="right">
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body3"
                color="text.primary"
                dangerouslySetInnerHTML={{
                  __html: experience.date.replace(/\n/g, "<br/>"),
                }}
              />
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2, color: "text.primary" }}>
                <Typography variant="h5"  fontWeight="bold" component="span" sx={{ fontSize: "1.2rem" }}>
                  {experience.role}
                </Typography>

                <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                  dangerouslySetInnerHTML={{
                    __html: experience.description.replace(/\n/g, "<br/>"),
                  }}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </Card>
  );
};

export default ExperienceTimeline;
