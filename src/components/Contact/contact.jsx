import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
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
    <Box id="contact" sx={{ bgcolor: "background.default", py: { xs: 5, sm: 7, md: 9 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            background: gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            mb: 4,
          }}
        >
          Contact
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={9} md={7}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={9} md={7}>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={9} md={7}>
              <TextField
                id="message"
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} textAlign="center">
              <Button type="submit" variant="contained" size="large" sx={{ mt: 2, mb: 18 }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
