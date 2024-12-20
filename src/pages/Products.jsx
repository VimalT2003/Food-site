import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  styled,
  Grid,
  Typography,
} from "@mui/material";
import ProductCard from "../components/ProductCard";

// Styled container for the menu
const MenuContainer = styled(Box)(({ theme }) => ({
  borderRadius: 16,
  padding: theme.spacing(2),
  border: "2px solid black",
  width: "100%",
  maxWidth: 300,
  margin: "0 auto",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",

  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%", // Adjust width for mobile
    padding: theme.spacing(1), // Reduce padding for smaller screens
  },
}));

// Styled list to remove default padding
const StyledList = styled(List)({
  padding: 0,
});

// Styled list items
const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: "12px 0px",
  borderBottom: "1px solid #D2B48C",
  textAlign: "center",

  "&:last-child": {
    borderBottom: "none",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}));

// Styled text with italic font
const StyledListItemText = styled(ListItemText)({
  "& .MuiListItemText-primary": {
    fontSize: "1rem",
    fontStyle: "italic",
    fontWeight: 600,
    color: "#333",
  },
});

// Dummy data
const dairyProducts = ["Milk", "Cream", "Yogurt", "Cheese", "Kefir"];

const products = [
  {
    id: 1,
    name: "Cow Milk",
    price: 53,
    quantity: "1/2l",
    image: "milk-product.jpg",
    features: [
      { label: "No Added Powder", desc: "Thick and creamy" },
      { label: "No added thickener", desc: "Creamy & Tasty" },
      { label: "Chemical Free", desc: "100% Pure" },
    ],
  },
  {
    id: 2,
    name: "Cow Milk",
    price: 56,
    quantity: "1/2l",
    image: "cow-01.jpg",
    features: [
      { label: "No Added Powder", desc: "Thick and creamy" },
      { label: "No added thickener", desc: "Creamy & Tasty" },
      { label: "Chemical Free", desc: "100% Pure" },
    ],
  },
  {
    id: 3,
    name: "Buffalo milk",
    price: 53,
    quantity: "1/2l",
    image: "cow-01.jpg",
    features: [
      { label: "No Added Powder", desc: "Thick and creamy" },
      { label: "No added thickener", desc: "Creamy & Tasty" },
      { label: "Chemical Free", desc: "100% Pure" },
    ],
  },
  {
    id: 4,
    name: "Buffalo Milk",
    price: 53,
    quantity: "1/2l",
    image: "cow-01.jpg",
    features: [
      { label: "No Added Powder", desc: "Thick and creamy" },
      { label: "No added thickener", desc: "Creamy & Tasty" },
      { label: "Chemical Free", desc: "100% Pure" },
    ],
  },
  {
    id: 5,
    name: "Cow Milk",
    price: 56,
    quantity: "1/2l",
    image: "curd.jpg",
    features: [
      { label: "No Added Powder", desc: "Thick and creamy" },
      { label: "No added thickener", desc: "Creamy & Tasty" },
      { label: "Chemical Free", desc: "100% Pure" },
    ],
  },
  {
    id: 6,
    name: "Buffalo milk",
    price: 53,
    quantity: "1/2l",
    image: "butter.jpg",
    features: [
      { label: "No Added Powder", desc: "Thick and creamy" },
      { label: "No added thickener", desc: "Creamy & Tasty" },
      { label: "Chemical Free", desc: "100% Pure" },
    ],
  },
];

export default function Products() {
  const [activeItem, setActiveItem] = useState("Yogurt");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          p: { xs: 2, md: 4 },
          justifyContent: "center",
          marginBottom: "5vh",
        }}
      >
        {/* Menu Container */}
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "500px", lg: "800px" },
            margin: "5vh auto",
            zIndex: 1,
          }}
        >
          <MenuContainer>
            <StyledList>
              {dairyProducts.map((product) => (
                <StyledListItem
                  key={product}
                  onClick={() => setActiveItem(product)}
                  selected={product === activeItem}
                >
                  <StyledListItemText primary={product} />
                </StyledListItem>
              ))}
            </StyledList>
          </MenuContainer>
        </Box>

        {/* Product Cards */}
        <Box sx={{ bgcolor: "#f5f0e6", flexGrow: 1, p: { xs: 1, md: 2 } }}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} key={product.id}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={`₹${product.price}`}
                  quantity={product.quantity}
                  features={product.features}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* SECTION-2 */}
      <Box
        sx={{
          px: { xs: 2, sm: 4 },
          py: 4,
          bgcolor: "#F9F5E5",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={4}
          sx={{
            maxWidth: "1200px",
          }}
        >
          {/* Left Section
          <Grid item xs={12} sm={5}>
            <Box textAlign={{ xs: "center", sm: "left" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                  color: "black",
                }}
              >
                Free <span style={{ fontWeight: "600" }}>membership</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", fontWeight: 400, color: "black" }}
              >
                On Your signup
              </Typography>
            </Box>
          </Grid> */}

          {/* Right Section */}
          <Grid
            item
            xs={12}
            sm={7}
            md={6}
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{
              bgcolor: "white",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              py: 2,
              marginTop: { xs: "5vh" },
            }}
          >
            {/* QR Code */}
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box textAlign="center">
                <img
                  src="dys-qr.png" // Replace with your QR code image
                  alt="QR Code"
                  style={{ width: "100%", maxWidth: "150px" }}
                />
                <Typography
                  variant="caption"
                  sx={{ display: "block", mt: 1, color: "#555" }}
                >
                  SCAN TO DOWNLOAD
                </Typography>
              </Box>
            </Grid>

            {/* Separator */}
            <Grid
              item
              xs={12}
              sm={1}
              md={1}
              sx={{
                textAlign: "center",
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "1px",
                    bgcolor: "lightgray",
                    mb: 1,
                  }}
                />
                <Typography variant="body2" sx={{ color: "#777" }}>
                  Or
                </Typography>
              </Box>
            </Grid>

            {/* App Store and Google Play */}
            <Grid
              item
              xs={12}
              sm={8}
              container
              flexDirection="column"
              spacing={2}
            >
              {/* App Store Badge */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" }, // Center on xs, left on sm
                  width: "100%",
                }}
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  style={{
                    width: "100%",
                    maxWidth: "180px",
                    display: "block",
                  }}
                />
              </Grid>

              {/* Google Play Badge */}
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" }, // Center on xs, left on sm
                  width: "100%",
                  mb: { sm: 4, md: 4 },
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  style={{
                    width: "100%",
                    maxWidth: "180px",
                    display: "block",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
