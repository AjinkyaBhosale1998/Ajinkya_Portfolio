import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./contact.css";
import { useTheme } from "@emotion/react";

const Contact = () => {
  const theme = useTheme();
  const gradient = theme.custom.primaryGradient;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div id="contact">
    <Box
      className="contact-container"
      sx={{ textAlign: "center", padding: "50px" }}
    >
      <Typography variant="h3" gutterBottom 
      sx={{ background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textAlign: "center", }}>
        Contact
      </Typography>

      <form onSubmit={handleSubmit} className="contact-form">
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          sx={{ marginBottom: "20px" }}
        />

        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          sx={{ marginBottom: "20px" }}
        />

        <TextField
          id="message"
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
          sx={{ marginBottom: "30px" }}
        />
        <div style={{ display: "flex", justifyContent: "center",margin:"1rem" }}>
          <Button type="submit" variant="contained" size="large" style={{ marginBottom:"5rem" }}>
            Submit
          </Button>
        </div>
      </form>
    </Box>
    </div>
  );
};

export default Contact;
