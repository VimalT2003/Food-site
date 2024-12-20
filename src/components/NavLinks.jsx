import React, { useState } from "react";
import {
  Link,
  Menu,
  MenuItem,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link as RouteLink, useNavigate, useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const dairyProducts = ["Milk", "Cream", "Yogurt", "Cheese", "Sour Cream"];

const NavLinks = ({
  linkText,
  isMobileSidebar,
  closeSidebar,
  scrollToContact,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const [open, setOpen] = useState(false);

  const handleMenuOpen = (event) => {
    if (isMobileSidebar) {
      setOpen(!open);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = (product) => {
    setAnchorEl(null);
    if (product) {
      navigate(`/products`);
      if (isMobileSidebar && closeSidebar) {
        closeSidebar();
      }
    }
  };

  const formattedText =
    linkText.toLowerCase() === "home"
      ? "/"
      : `/${linkText.toLowerCase().replace(/\s+/g, "-")}`;

  const isActive = location.pathname === formattedText;

  const handleClick = (event) => {
    if (linkText === "Contact" && scrollToContact) {
      event.preventDefault();
      scrollToContact();
      if (isMobileSidebar && closeSidebar) {
        closeSidebar();
      }
    } else if (isMobileSidebar && closeSidebar) {
      closeSidebar();
    }
  };

  if (isMobileSidebar) {
    return (
      <Box>
        {linkText.toLowerCase() === "products" ? (
          <>
            <ListItemButton onClick={handleMenuOpen}>
              <ListItemText primary={linkText} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {dairyProducts.map((product) => (
                  <ListItemButton
                    key={product}
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate(`/products`);
                      if (closeSidebar) {
                        closeSidebar();
                      }
                    }}
                  >
                    <ListItemText primary={product} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </>
        ) : (
          <ListItemButton
            component={linkText === "Contact" ? "button" : RouteLink}
            to={formattedText}
            selected={isActive}
            onClick={handleClick}
          >
            <ListItemText primary={linkText} />
          </ListItemButton>
        )}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { sm: 1, md: 2 },
      }}
    >
      {linkText.toLowerCase() === "products" ? (
        <>
          <Link
            onClick={handleMenuOpen}
            sx={{
              textDecoration: "none",
              fontSize: isSmall ? "0.8rem" : "0.9rem",
              color: "black",
              fontFamily: "sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 0.2,
              cursor: "pointer",
              position: "relative",
              "&::after": {
                content: isActive ? '""' : "none",
                position: "absolute",
                left: 0,
                bottom: -2,
                width: "100%",
                height: "2px",
                backgroundColor: "black",
              },
            }}
          >
            {linkText}
            <KeyboardArrowDownIcon
              sx={{
                fontSize: isSmall ? "1rem" : "1.2rem",
                marginBottom: "2px",
              }}
            />
          </Link>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleMenuClose()}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={{
              mt: 1,
              "& .MuiMenu-paper": {
                backgroundColor: "transparent",
                boxShadow: "none",
                minWidth: isSmall ? "180px" : "270px",
                marginTop: "1.5vh",
                marginLeft: isSmall ? "4vh" : "8vh",
              },
              "& .MuiMenu-list": {
                padding: 0,
              },
            }}
          >
            {dairyProducts.map((product) => (
              <MenuItem
                key={product}
                onClick={() => handleMenuClose(product)}
                disableRipple
                sx={{
                  backgroundColor: "#EDE0C6 !important",
                  borderRadius: "20px",
                  margin: "5px 10px",
                  padding: isSmall ? "8px 12px" : "12px 20px",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#E0E0E0 !important",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#EDE0C6 !important",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "#EDE0C6 !important",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 200,
                    fontSize: isSmall ? "1rem" : "1.5rem",
                  }}
                >
                  {product}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <Link
          component={linkText === "Contact" ? "button" : RouteLink}
          to={formattedText}
          onClick={handleClick}
          sx={{
            textDecoration: "none",
            color: "black",
            fontFamily: "sans-serif",
            fontSize: isSmall ? "0.8rem" : "0.9rem",
            position: "relative",
            "&::after": {
              content: isActive ? '""' : "none",
              position: "absolute",
              left: 0,
              bottom: -2,
              width: "100%",
              height: "2px",
              backgroundColor: "black",
            },
            "&:hover::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: -2,
              width: "100%",
              height: "2px",
              backgroundColor: "black",
            },
          }}
        >
          {linkText}
        </Link>
      )}
    </Box>
  );
};

export default NavLinks;
