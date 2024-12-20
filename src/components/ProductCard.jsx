import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// Custom styled components
const StyledCard = styled(Card)(({ theme }) => ({
  border: "2.5px solid brown",
  borderRadius: 32,
  overflow: "hidden",
  maxWidth: 600,
  margin: "16px ",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
}));

const ProductImageContainer = styled(Box)(({ theme }) => ({
  width: "200px", // Fixed width
  height: "200px", // Fixed height
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "180px",
  },
}));

const ProductImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
});

export default function ProductCard({
  image,
  name,
  price,
  quantity,
  features,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledCard>
      <CardContent>
        {/* Product Image & Details */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 2,
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* Product Image */}
          <ProductImageContainer>
            <ProductImage src={image} alt={name} />
          </ProductImageContainer>

          {/* Product Details */}
          <Box sx={{ mt: isMobile ? 2 : 4, marginTop: { md: "8vh" } }}>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontSize: isMobile ? "0.7rem" : "0.9rem",
                fontWeight: 600,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                fontSize: isMobile ? "0.6rem" : "0.8rem",
              }}
            >
              {price}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: isMobile ? "0.6rem" : "0.8rem",
                color: "#333",
              }}
            >
              Quantity: {quantity}
            </Typography>
          </Box>
        </Box>

        {/* Features Section */}
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          sx={{
            mt: 2,
            textAlign: "center",
            border: "1.7px solid burlywood",
            borderBlockColor: "brown",
            borderRadius: "30px",
            padding: 2,
            justifyContent: "space-around",
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                borderRight:
                  !isMobile && index !== features.length - 1
                    ? "1px solid #E0C9A8"
                    : "none",
                paddingRight:
                  !isMobile && index !== features.length - 1 ? 2 : 0,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: isMobile ? "0.6rem" : "0.7rem",
                  fontWeight: 600,
                  color: "#4A4A4A",
                }}
              >
                {feature.label}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: isMobile ? "0.6rem" : "0.7rem",
                  color: "#6C6C6C",
                }}
              >
                {feature.desc}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </StyledCard>
  );
}
