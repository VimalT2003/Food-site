import React from "react";
import { Box } from "@mui/material";
import DiscoverCards from "./DiscoverCards";

function CenteredDiscoverCards({ cards }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        boxSizing: "border-box",
        padding: {
          xs: "0 16px",
          sm: "0 24px",
          md: "0 32px",
          lg: "0 40px",
          xl: "0 48px",
        },
        marginBottom: "8vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1480px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: {
              xs: "calc(100% + 28px)", // Compensate for the outer padding on extra small screens
              sm: "calc(100% + 48px)", // Compensate for the outer padding on small screens
              md: "100%", // No compensation needed for medium and larger screens
            },
            marginLeft: {
              xs: "-16px", // Pull content to the left on extra small screens
              sm: "-24px", // Pull content to the left on small screens
              md: "0", // No adjustment needed for medium and larger screens
            },
          }}
        >
          <DiscoverCards cards={cards} />
        </Box>
      </Box>
    </Box>
  );
}

export default CenteredDiscoverCards;
