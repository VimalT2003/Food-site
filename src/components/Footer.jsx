import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        padding: { xs: 2, sm: 7 },
        paddingLeft: { sm: "10vh" },
        backgroundColor: "white",
        color: "black",
        marginTop: "12vh",
      }}
    >
      {/* Left Side: Site Name and Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: { xs: "center", sm: "start" },
          flex: 2,
          marginBottom: { xs: 0, sm: 3 },
        }}
      >
        {/* Site Name */}
        <Typography
          variant="h6"
          sx={{
            marginLeft: { xs: 0, sm: "1vh" },
            marginBottom: { xs: 0, sm: "11.5vh" },
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Site Name
        </Typography>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: { xs: "center", sm: "center" },
            marginTop: { xs: 2, sm: 2 },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Right Side: Columns and Rows of Links */}
      <Box
        sx={{
          flex: 2,
          width: "100%",
          marginTop: 1,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* Column 1 */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: 2.8 }}
            >
              Topic
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: 2.7,
                textDecoration: "none",
              }}
            >
              Page
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: 2.7,
                textDecoration: "none",
              }}
            >
              Page
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: 2.7,
                textDecoration: "none",
              }}
            >
              Page
            </Link>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                marginBottom: 2.8,
                textDecoration: "none",
              }}
            >
              Topic
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: 2.7,
                textDecoration: "none",
              }}
            >
              Page
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: 2.7,
                textDecoration: "none",
              }}
            >
              Page
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: 2.7,
                textDecoration: "none",
              }}
            >
              Page
            </Link>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                marginBottom: 2.8,
                textDecoration: "none",
              }}
            >
              Topic
            </Typography>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: 2.7,
                textDecoration: "none",
              }}
            >
              Page
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: 2.7,
                textDecoration: "none",
              }}
            >
              Page
            </Link>
            <Link
              href="#"
              variant="body2"
              color="inherit"
              sx={{
                display: "block",
                marginBottom: 2.7,
                textDecoration: "none",
              }}
            >
              Page
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
