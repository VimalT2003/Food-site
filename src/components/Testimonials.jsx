import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Link,
} from "@mui/material";

const TestimonialComponent = ({ testimonials }) => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      {testimonials.map((testimonial) => (
        <Grid item key={testimonial.id}>
          <Card
            sx={{
              maxWidth: 360,
              margin: "1rem",
              borderRadius: "25px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "1rem",
            }}
          >
            <CardContent>
              <Typography variant="body2" gutterBottom>
                {testimonial.text}
              </Typography>
              <Link
                href="#"
                sx={{ fontFamily: "sans-serif" }}
                underline="hover"
                color="primary"
                fontWeight="bold"
              >
                {testimonial.platform}
              </Link>
              <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                gap={1}
                sx={{ marginTop: "1rem" }}
              >
                <Grid item>
                  <Typography variant="body1" fontWeight="medium">
                    {testimonial.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TestimonialComponent;
