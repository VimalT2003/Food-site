import React from "react";
import { Typography, Grid, Card, CardContent, Paper, Box } from "@mui/material";

const Freshness = ({ features }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "#fffff",
        padding: "3rem",
        textAlign: "center",
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        We are bringing Natural & Fresh back
      </Typography>
      <Typography variant="body1" gutterBottom>
        Better everyday health begins with the basics. We ensure everything in
        your kitchen has been thoroughly tested for purity and freshness.
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "1rem" }}
      >
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                padding: "1rem",
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              <CardContent>
                {feature.icon}
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    marginTop: "1rem",
                    fontSize: "0.8rem",
                  }}
                >
                  {feature.title}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                    {feature.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Freshness;
