import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleViewProducts = () => {
    navigate("/products");
  };

  //   test commit message
  // another test change

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "65vh",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        padding: 3,
      }}
    >
      <ShoppingCartIcon
        sx={{
          fontSize: 100,
          color: "grey",
          marginBottom: 2,
        }}
      />
      <Typography
        variant="h3"
        sx={{
          marginBottom: 1,
          color: "black",
          fontWeight: "bold",
          fontSize: "3rem",
        }}
      >
        cart is empty
      </Typography>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 6,
          color: "grey",
          fontWeight: "bold",
          fontSize: "1.28rem",
          fontFamily: "monospace",
        }}
      >
        Add some item to the cart
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleViewProducts}
        sx={{
          padding: "10px 35px",
          color: "black",
          letterSpacing: "-0.1vh",
          fontSize: "12px",
          textTransform: "none",
          backgroundColor: "#ffef50",
          "&:hover": {
            backgroundColor: "#fff179",
          },
        }}
      >
        View All Products
      </Button>
    </Box>
  );
};

export default EmptyCart;
