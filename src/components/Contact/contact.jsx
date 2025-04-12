import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./contact.css";

const Contact = () => {
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
    <Box
      className="contact-container"
      sx={{ textAlign: "center", padding: "50px" }}
    >
      <Typography variant="h2" gutterBottom>
        Contact Me
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
          sx={{ marginBottom: "20px" }}
        />
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          <Button type="submit" variant="contained" size="large" style={{ bgcolor: "#132043" }}>
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default Contact;
