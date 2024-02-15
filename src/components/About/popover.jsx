import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function BottomEndPopper() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const popperRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popperRef.current && !popperRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        transition
        ref={popperRef}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography variant="h6" sx={{ fontSize: "2rem", mb: 0.5, p: 1 }}>
                Contact Information
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  mb: 0,
                  p: 1,
                }}
              >
                <EmailIcon
                  sx={{
                    mr: 1,
                    fontSize: "2rem",
                    "& .MuiButton-root": {
                      color: "#132043",
                    },
                  }}
                />
                bhosaleajinkya1998@gmail.com
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <PhoneIcon sx={{ mr: 1, fontSize: "2rem" }} />
                +91 88560-49947
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Button component="a" onClick={handleClick} sx={{ color: "#132043" }}>
        <EmailIcon />
      </Button>
    </Box>
  );
}
