import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DiscoverCards = ({ cards }) => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/products");
  };
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{
        padding: "20px",
        maxWidth: "100%", // Ensures the grid container doesn't overflow
        margin: "0 auto",
        boxSizing: "border-box",
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              //   padding: "16px",
              overflow: "hidden", // Avoids any overflow
              width: "100%", // Ensure Box doesn't exceed Grid's boundaries
              boxSizing: "border-box",
            }}
          >
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                width: "100%",
                maxHeight: "250px",
                objectFit: "cover",
                borderRadius: "18px",
                marginBottom: "16px",
              }}
            />
            <Box sx={{ width: "80%" }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ marginBottom: "8px" }}
              >
                {card.title}
              </Typography>
            </Box>
            <Box sx={{ width: "60%" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: "16px" }}
              >
                {card.description}
              </Typography>
            </Box>
            <Button
              variant="text"
              onClick={handleLearnMore}
              sx={{
                textTransform: "none",
                color: "black",
                fontWeight: 500,
              }}
              endIcon={
                <ArrowForwardIosOutlined sx={{ width: 15, height: 20 }} />
              }
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default DiscoverCards;
