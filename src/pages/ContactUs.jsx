import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  FormLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  backgroundColor: "#fff",
  boxShadow: "none",
  height: "35%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const ContactLink = styled("a")(({ theme }) => ({
  color: "black",
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "none",
  },
}));

export default function ContactUs() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f0e6",
        marginTop: "10vh",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid container spacing={20} justifyContent="center">
          <Grid item xs={12} md={5} lg={4}>
            <StyledPaper
              sx={{
                marginTop: "15vh",
                textAlign: { sm: "center", md: "left" },
                // marginBottom: { xs: "2vh" },
                height: { xs: "50%" },
              }}
            >
              <Box>
                <Typography variant="h6">LETS GET</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { md: "0.9rem", lg: "1rem" } }}
                >
                  Contact Us And Get Dairy Products List
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { md: "0.9rem", lg: "1rem" } }}
                >
                  We are available between 10AM-6PM,
                  <br />
                  Feel free to contact.
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontSize: { md: "0.9rem", lg: "1rem" } }}
                >
                  For Overseas Enquiry
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontSize: { md: "0.9rem", lg: "1rem" } }}
                >
                  Toll Free No :{" "}
                  <ContactLink href="tel:1800120477">1800 120 4777</ContactLink>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { md: "0.9rem", lg: "1rem" } }}
                >
                  E-Mail id :{" "}
                  <ContactLink href="mailto:info@doodhbhiaurshudhibhi.com">
                    info@doodhbhiaurshudhibhi.com
                  </ContactLink>
                </Typography>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6} textAlign="center">
            <Box sx={{ mb: 4 }}>
              <Box sx={{ marginBottom: "5vh" }}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "3rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Contact us
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ textAlign: { xs: "center", md: "left" } }}
                >
                  We'd Love to Hear From You, Get In Touch With Us!
                </Typography>
              </Box>

              <Box component="form" sx={{}} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormLabel
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        padding: "6px 2px",
                        color: "black",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Full name
                    </FormLabel>
                    <TextField
                      fullWidth
                      name="fullName"
                      placeholder="Jane"
                      variant="outlined"
                      sx={{
                        backgroundColor: "white",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                          height: "40px",
                          "& input": {
                            padding: "8px", // Adjust the padding inside the input
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "0.8rem", // Adjust the label font size
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormLabel
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        padding: "6px 2px",
                        color: "black",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Mobile number
                    </FormLabel>
                    <TextField
                      fullWidth
                      name="mobileNumber"
                      variant="outlined"
                      sx={{
                        backgroundColor: "white",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                          height: "40px",
                          "& input": {
                            padding: "8px", // Adjust the padding inside the input
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "0.8rem", // Adjust the label font size
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        padding: "6px 2px",
                        color: "black",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Email Address
                    </FormLabel>
                    <TextField
                      fullWidth
                      name="email"
                      placeholder="email@janesfakedomain.net"
                      variant="outlined"
                      sx={{
                        backgroundColor: "white",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                          height: "40px",
                          "& input": {
                            padding: "8px", // Adjust the padding inside the input
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "0.8rem", // Adjust the label font size
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        padding: "6px 2px",
                        color: "black",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Your message
                    </FormLabel>
                    <TextField
                      fullWidth
                      name="message"
                      multiline
                      rows={4}
                      placeholder="Enter your question or message"
                      variant="outlined"
                      sx={{
                        backgroundColor: "white",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 2,
                        py: 1.5,
                        backgroundColor: "black",
                        "&:hover": {
                          backgroundColor: "#333",
                        },
                        borderRadius: 1,
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* end here */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
