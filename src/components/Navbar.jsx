import React, { useState } from "react";
import krishna from '../images/krishna.jpg'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ scrollToContact }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignIn = () => {
    if (location.pathname === "/login") {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const getButtonText = () => {
    return location.pathname === "/login" ? "Sign Up" : "Login";
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={(event) => event.stopPropagation()}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2, // Space between elements
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Jaishree-krishna
      </Typography>
      <List>
        {["Home", "About us", "Products", "Contact"].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText
              primary={
                <NavLinks
                  linkText={item}
                  isMobileSidebar={true}
                  closeSidebar={handleDrawerToggle}
                  scrollToContact={
                    item === "Contact" ? scrollToContact : undefined
                  }
                />
              }
              sx={{ textAlign: "center" }}
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={() => {
          handleSignIn();
          handleDrawerToggle();
        }}
        sx={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          padding: "8px 20px",
          fontSize: "14px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
      >
        {getButtonText()}
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          handleContact();
          handleDrawerToggle(); // Close sidebar after clicking
        }}
        sx={{
          backgroundColor: "#ffef50",
          color: "black",
          borderRadius: "5px",
          boxShadow: "0px 2px 5px rgba(255, 252, 252, 0.2)",
          padding: { sm: "6px 12px", md: "8px 20px" },
          fontSize: { sm: "12px", md: "14px" },
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#333",
            color: "white ",
          },
        }}
      >
        Enquire Now
      </Button>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", margin: 0 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img
              src={krishna}
              alt="Logo"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "black",
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
              fontSize: { sm: "0.7rem", md: "1.5rem" },
            }}
          >
            Jaishree-krishna
          </Typography>
        </Box>
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              gap: { sm: 1, md: 3 },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <NavLinks linkText="Home" />
            <NavLinks linkText="About us" />
            <NavLinks linkText="Products" />
            <NavLinks linkText="Contact" scrollToContact={scrollToContact} />
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {!isMobile && (
            <>
              <Button
                variant="contained"
                onClick={handleSignIn}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "5px",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                  padding: { sm: "6px 12px", md: "8px 20px" },
                  fontSize: { sm: "12px", md: "14px" },
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                {getButtonText()}
              </Button>
              <Button
                variant="contained"
                onClick={handleContact}
                sx={{
                  backgroundColor: "#ffef50",
                  color: "black",
                  borderRadius: "5px",
                  boxShadow: "0px 2px 5px rgba(255, 255, 255, 0.2)",
                  padding: { sm: "6px 12px", md: "8px 20px" },
                  fontSize: { sm: "12px", md: "14px" },
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#333",
                    color: "white",
                  },
                }}
              >
                Enquire Now
              </Button>
            </>
          )}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "block" } }}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
