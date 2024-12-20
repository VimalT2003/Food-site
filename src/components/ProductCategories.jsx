import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const ProductCategory = ({ image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2, // Reduced the gap from 1.5 to 1
        // padding: 2,
        textAlign: "center",
      }}
    >
      <Avatar
        src={image}
        alt="Loading"
        sx={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          fontWeight: 500,
        }}
      >
        Product Name
      </Typography>
    </Box>
  );
};

export default ProductCategory;
