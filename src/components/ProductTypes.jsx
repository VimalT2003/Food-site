import React from "react";
import { Grid, Typography, Button, Card } from "@mui/material";
import { Box, styled } from "@mui/system";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)({
  borderRadius: "30px",
  overflow: "visible",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  position: "relative",
  boxSizing: "border-box",
});

const ImageContainer = styled("div")(({ bgImage }) => ({
  width: "100%", // Take full width of the parent
  height: "400px", // Fixed height, can adjust as needed
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "30px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end", // Align title at the bottom
}));

const ContentBox = styled("div")({
  padding: "16px",
  textAlign: "center",
  position: "relative",
  zIndex: 2, // Ensure it's above the image
});

const ViewAllButton = styled(Button)({
  position: "absolute",
  zIndex: 3,
  bottom: "-30px", // Adjusted for a larger button
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#d4edda",
  borderRadius: "50px",
  textTransform: "none",
  padding: "12px 12px", // Increased padding for a larger button
  fontSize: "20px",
  color: "#333",
  "&:hover": {
    backgroundColor: "#c3e6cb",
  },
  display: "flex",
  alignItems: "center",
  gap: "8px", // Space between text and icon
});

const IconWrapper = styled("div")({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ProductTypes = ({ items }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
    navigate("/products");
  };

  return (
    <Box
      sx={{
        width: { md: "90%" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={6} // Adjust spacing for responsiveness
        justifyContent="center"
        style={{ padding: "20px", width: "100%" }} // Ensure full-width layout
      >
        {items.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={8} // remember 9 while demo
            md={6}
            lg={6}
            key={index}
            sx={{ marginBottom: "8vh" }}
          >
            <StyledCard>
              <ImageContainer bgImage={item.bgImage}>
                <ContentBox>
                  <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    sx={{
                      color: "black",
                      marginBottom: "4vh",
                      padding: "4px 8px",
                      borderRadius: "8px",
                    }}
                  >
                    {item.title || "MILK"}
                  </Typography>
                </ContentBox>
              </ImageContainer>
              <ViewAllButton variant="contained" onClick={handleViewAll}>
                View All
                <IconWrapper>
                  <ArrowForwardIosOutlined fontSize="small" />
                </IconWrapper>
              </ViewAllButton>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductTypes;
