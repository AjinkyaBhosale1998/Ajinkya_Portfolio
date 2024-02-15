import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";
import StyledAvatar from "./StyledAvatar";

function Navbar() {
  const blogUrl = "https://dev-blog-puce.vercel.app/";

  return (
    <AppBar position="static">
      <Toolbar>
        <StyledAvatar alt="profile photo" src="./profile.jpg" />
        <Typography variant="h5" sx={{ marginInline: "20px" }}>
          A J I N K Y A
        </Typography>

        <Toolbar
          sx={{
            marginLeft: "auto",
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button color="inherit" sx={{ fontSize: "0.9rem" }}>
            About
          </Button>
          <Button color="inherit" sx={{ fontSize: "0.9rem" }}>
            Experience
          </Button>
          <Button color="inherit" sx={{ fontSize: "0.9rem" }}>
            Projects
          </Button>
          <Button
            color="inherit"
            href={blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: "0.9rem" }}
          >
            Blogs
          </Button>

          <Button color="inherit" sx={{ fontSize: "0.9rem" }}>
            Contact
          </Button>
        </Toolbar>

        {/* <Divider
          orientation="vertical"
          variant="middle"
          sx={{
            backgroundColor: "gray",
            height: "25px",
            marginInline: "0px",
          }}
        /> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
