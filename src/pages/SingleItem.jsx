import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

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
];

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ffeb3b",
  color: "#000",
  textTransform: "capitalize",
  letterSpacing: "1px",
  fontFamily: "sans-serif",
  fontSize: "1.5rem",
  borderRadius: "2.3vh",
  padding: "0.5vh 5vh",
  ":hover": {
    backgroundColor: "#fdd835",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    padding: "1.5vh 4vh",
    borderRadius: "2vh",
  },
}));

const SingleItem = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        maxWidth: "2500px",
        marginX: "10vh",
      }}
    >
      {/* Breadcrumb */}
      <Typography variant="body2" color="gray" mb={2}>
        Home &gt; Products &gt; Milk &gt; Cow Milk
      </Typography>

      <Grid container spacing={0}>
        {/* Left Side - Images */}
        <Grid item xs={12} md={5.5} lg={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={2}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              marginY: "5vh",
            }}
          >
            {/* Small Images */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src="milk-product.jpg"
                alt="Product Thumbnail"
                sx={{ width: 120, height: 120, borderRadius: 2 }}
              />
              <Box
                component="img"
                src="milk-product.jpg"
                alt="Product Thumbnail"
                sx={{ width: 120, height: 120, borderRadius: 2 }}
              />
              <Box
                component="img"
                src="milk-product.jpg"
                alt="Product Thumbnail"
                sx={{ width: 120, height: 120, borderRadius: 2 }}
              />
            </Box>

            {/* Main Image */}
            <Grid item md={12}>
              <Box
                sx={{
                  mt: { xs: 2, md: 0 }, // Add spacing on small screens
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: { lg: "6vh" },
                }}
              >
                <Box
                  component="img"
                  src="milk-product.jpg"
                  alt="Cow Milk Product"
                  sx={{
                    width: "100%",
                    height: { xs: 200, sm: 390, md: 300, lg: 400 },
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Grid>
          </Box>
        </Grid>

        {/* Vertical Line */}
        <Grid
          item
          xs={12}
          md={0.5}
          sx={{
            display: { xs: "none", md: "block" },
            borderRight: "1.5px solid brown",
          }}
        ></Grid>

        {/* Right Side - Details */}
        <Grid item xs={12} md={4} lg={5} ml={5}>
          <Box
            sx={{
              width: "100%",
              textAlign: { xs: "center", md: "left" },
              marginY: "5vh",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Cow Milk
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", fontWeight: 400, marginLeft: "2.5px" }}
            >
              Rs 53
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", fontWeight: 400, marginLeft: "2.5px" }}
            >
              450ml
            </Typography>
          </Box>

          {/* Product Highlights */}
          <Box sx={{ marginY: "5vh" }}>
            <Stack
              direction={isMobile ? "row" : "row"}
              spacing={2}
              sx={{
                mt: 2,
                textAlign: "center",
                border: "1.7px solid burlywood",
                borderBlockColor: "brown",
                borderRadius: "30px",
                padding: 2.5,
                justifyContent: "space-around",
              }}
            >
              {products[0].features.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    borderRight:
                      !isMobile && index !== products[0].features.length - 1
                        ? "1px solid #E0C9A8"
                        : "none",
                    paddingRight:
                      !isMobile && index !== products[0].features.length - 1
                        ? 2
                        : 0,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: isMobile ? "0.55rem" : "0.7rem",
                    }}
                  >
                    {feature.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: isMobile ? "0.56rem" : "0.7rem",
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Product Description */}
          <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontWeight: "bold" }}>
              Product Description
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <StyledButton
              variant="contained"
              size="large"
              sx={{
                paddingY: { sm: "2vh" },
                paddingX: {
                  xs: "5.2vh",
                  sm: "6.5vh",
                  md: "4vh",
                  lg: "6.5vh",
                },
                fontSize: { xs: "0.8rem", lg: "1.2rem" },
              }}
            >
              Buy Now
            </StyledButton>
            <StyledButton
              variant="contained"
              size="large"
              sx={{
                paddingY: { sm: "2vh" },
                paddingX: { md: "3vh", lg: "5vh" },
                fontSize: { xs: "0.8rem", lg: "1.2rem" },
              }}
            >
              Add To Cart
            </StyledButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleItem;
