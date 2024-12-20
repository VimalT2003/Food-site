import { Box, Typography, Grid, Container } from "@mui/material";
import Freshness from "../components/Freshness";
import milkbg from '../images/milk-bg.jpg'
import cow01 from '../images/cow-01.jpg'
import cow02 from '../images/cow-02.jpg'
import {
  HomeOutlined,
  LocalDrinkOutlined,
  ScienceOutlined,
  ThermostatOutlined,
} from "@mui/icons-material";

const features = [
  {
    id: 1,
    title: "Milking Twice a Day",
    description:
      "We source milk from farmers on the outskirts of your city for complete freshness and purity.",
    icon: <LocalDrinkOutlined style={{ fontSize: "48px" }} />,
  },
  {
    id: 2,
    title: "100+ Tests Everyday",
    description: "We quality test all milk for adulteration every single day.",
    icon: <ScienceOutlined style={{ fontSize: "48px" }} />,
  },
  {
    id: 3,
    title: "Pasteurization & Packing at 4°C",
    description:
      "Maintaining milk at 4°C improves its shelf life and prevents harmful bacteria growth.",
    icon: <ThermostatOutlined style={{ fontSize: "48px" }} />,
  },
  {
    id: 4,
    title: "Assured 7 AM Doorstep Milk & Grocery Delivery",
    description:
      "Fresh Milk & Best quality Groceries reaches your doorstep daily morning.",
    icon: <HomeOutlined style={{ fontSize: "48px" }} />,
  },
];

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: "20vh", sm: "30vh", md: "40vh", lg: "50vh" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src={milkbg}
          alt="Fresh Milk Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Overlay Text */}
        <Box
          sx={{
            position: "absolute",
            bottom: "8%",
            width: "100%",
            textAlign: "center", // Ensure text is centered across all devices
            px: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#37474f",
              fontFamily: "sans-serif",
              fontSize: {
                xs: "1.2rem",
                sm: "1.8rem",
                md: "2.4rem",
              },
              textAlign: "center", // Center the text explicitly
            }}
          >
            WHO WE ARE?
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Center align decorative elements
              marginTop: "5px",
            }}
          >
            <Box
              sx={{
                width: { xs: "30px", sm: "50px", md: "60px" },
                height: "2.5px",
                borderRadius: "2px",
                backgroundColor: "#37474f",
                marginRight: "8px",
              }}
            />
            <Box
              sx={{
                width: { xs: "10px", sm: "16px", md: "20px" },
                height: { xs: "10px", sm: "16px", md: "20px" },
                borderRadius: "3px",
                backgroundColor: "#37474f",
                transform: "rotate(45deg)",
              }}
            />
            <Box
              sx={{
                width: { xs: "30px", sm: "50px", md: "60px" },
                height: "2.5px",
                borderRadius: "2px",
                backgroundColor: "#37474f",
                marginLeft: "8px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* First Section */}
      <Container
        maxWidth="xl"
        sx={{
          paddingX: { md: 10 },
        }}
      >
        <Box
          sx={{
            padding: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            alignItems="center"
            spacing={3}
            sx={{
              px: { xs: 2, sm: 4 },
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: {
                  sm: "center",
                  md: "flex-start",
                },
                // textAlign: { sm: "center" },
              }}
            >
              <Box
                component="img"
                src={cow01}
                alt="Cow in the field"
                sx={{
                  width: { xs: "100%", sm: "90%", md: "95%" },
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: { sm: "center" },
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#6d6d6d",
                  lineHeight: 1.6,
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "1rem" },
                }}
              >
                Welcome to FreshFields Dairy, Where tradition meets innovation
                in the heart of nature. Our journey began with a passion for
                providing families with the highest quality dairy products,
                sourced directly from our local farms. At FreshFields Dairy, we
                believe in the power of fresh, natural ingredients. Domestic
                cows are one of the most common farm animals around the world,
                and the English language has several words to describe these
                animals at various ages. A baby cow is called a calf. A female
                calf is sometimes called a heifer calf and a male a bull calf.
                after giving birth to her first calf, however, a heifer becomes
                a cow. An adult male is known as a bull. Many male cattle are
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quos dolorum cumque odio possimus quas recusandae vel
                consectetur cupiditate? hell with castrated to reduce their
                aggressive tendencies.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Spacer */}
        <Box sx={{ height: { xs: 20, md: 50 } }} />

        {/* Second Section */}
        <Box
          sx={{
            padding: { xs: 2, md: 4 },
          }}
        >
          <Grid
            container
            alignItems="center"
            spacing={3}
            sx={{
              px: { xs: 2, sm: 4 },
            }}
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#6d6d6d",
                  lineHeight: 1.6,
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "1rem" },
                }}
              >
                We take pride in our artisanal approach, combining time-honored
                techniques with modern practices to deliver products that are
                not only delicious but also nutritious.cow, in common parlance,
                a Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, quidem? domestic bovine, regardless of sex and age,
                usually of the species Bos taurus. In precise usage, the name is
                given to mature females of several large mammals, including
                cattle (bovines), moose, elephants, sea lions, and whales.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: { sm: "center", md: "center" },
              }}
            >
              <Box
                component="img"
                src={cow02}
                alt="Farmers with cows"
                sx={{
                  width: { xs: "98%", sm: "90%", md: "85%" },
                  borderRadius: "16px",
                  paddingRight: { md: "2px" },
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Spacer */}
        <Box sx={{ height: { xs: 20, md: 50 } }} />

        {/* PROCESS - TEXT */}
        <Box
          sx={{
            width: "100%",
            textAlign: "center", // Ensure text is centered across all devices
            px: { xs: 2, sm: 3 },
            marginBottom: { xs: "3vh", sm: "3.5vh", md: "5vh" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#37474f",
              fontFamily: "sans-serif",
              fontSize: {
                xs: "1.2rem",
                sm: "1.8rem",
                md: "2.4rem",
              },
              textAlign: "center", // Center the text explicitly
            }}
          >
            OUR PROCESS
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Center align decorative elements
              marginTop: "5px",
            }}
          >
            <Box
              sx={{
                width: { xs: "30px", sm: "50px", md: "60px" },
                height: "2.5px",
                borderRadius: "2px",
                backgroundColor: "#37474f",
                marginRight: "8px",
              }}
            />
            <Box
              sx={{
                width: { xs: "10px", sm: "16px", md: "20px" },
                height: { xs: "10px", sm: "16px", md: "20px" },
                borderRadius: "3px",
                backgroundColor: "#37474f",
                transform: "rotate(45deg)",
              }}
            />
            <Box
              sx={{
                width: { xs: "30px", sm: "50px", md: "60px" },
                height: "2.5px",
                borderRadius: "2px",
                backgroundColor: "#37474f",
                marginLeft: "8px",
              }}
            />
          </Box>
        </Box>

        {/* Freshness Section */}
        <Box sx={{ px: { xs: 2, md: 5 } }}>
          <Freshness features={features} />
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;
