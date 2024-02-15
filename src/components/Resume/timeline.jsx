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

const ExperienceTimeline = ({ experienceData }) => {
  return (
    <Timeline sx={{ marginRight: "75px" }}>
      {experienceData &&
        experienceData.map((experience, index) => (
          <TimelineItem key={index} position="right">
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body3"
              color="#132043"
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
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h5" fontWeight="bold" component="span">
                {experience.role}
              </Typography>

              <Typography
                dangerouslySetInnerHTML={{
                  __html: experience.description.replace(/\n/g, "<br/>"),
                }}
              />
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
};

export default ExperienceTimeline;
