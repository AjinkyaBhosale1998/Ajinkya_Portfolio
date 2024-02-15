import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ReusableCardStepper = ({ cardData }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {cardData.map((card, index) => (
        <Card
          key={index}
          style={{
            width: "20%",
            margin: "0 25px",
            opacity: 1,
            alignItems: "center",
          }}
        >
          <img
            src={card.imageUrl}
            alt={`${card.title}`}
            style={{ width: "100%", height: "auto", alignItems: "center" }}
          />
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              {card.title}
            </Typography>
            <Typography variant="body1">{card.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ReusableCardStepper;
