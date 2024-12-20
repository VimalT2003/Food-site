import { Box, Typography, Grid, Button } from "@mui/material";
import ProductCategory from "../components/ProductCategories";
import ContactUs from "./ContactUs";
import ProductTypes from "../components/ProductTypes";
import { useImperativeHandle } from "react";
import Testimonials from "../components/Testimonials";
import dairybg from '../images/dairy-bg.jpg'
import milkcookie from '../images/milk-cookie.jpg'
import milkcake from '../images/milk-cake.jpg'
import pancake from '../images/pancake.jpg'
import cakepeice from '../images/cake-peice.jpg'
import berries from '../images/berries.jpg'
import salad from '../images/salad.jpg'
import discover1 from '../images/discover-1.jpg'
import discoverrice from '../images/discover-rice.jpg'
import discoverhoney from '../images/discover-honey.jpg'
import milkbg from '../images/milk-bg.jpg'
import curd from '../images/curd.jpg'
import paneer from '../images/paneer.jpg'
import lassi from '../images/lassi.jpg'
import butter from '../images/butter.jpg'
import sweets from '../images/sweets.jpg'
import {
  HomeOutlined,
  LocalDrinkOutlined,
  ScienceOutlined,
  ThermostatOutlined,
} from "@mui/icons-material";
import Freshness from "../components/Freshness";
import CenteredDiscoverCards from "../components/CenteredDiscoveredCards";
import { forwardRef, useRef } from "react";

const cards = [
  {
    image: discover1,
    title: "Indulge in the Creamiest and Most Delicious Dairy Delights",
    description:
      "From farm to table, our dairy products are made with love and care.",
  },
  {
    image: discoverrice,
    title: "Indulge in the Creamiest and Most Delicious Dairy Delights",
    description:
      "From farm to table, our dairy products are made with love and care.",
  },
  {
    image: discoverhoney,
    title: "Indulge in the Creamiest and Most Delicious Dairy Delights",
    description:
      "From farm to table, our dairy products are made with love and care.",
  },
];

const items = [
  { bgImage: milkbg, title: "UTH Milk" },
  { bgImage: curd, title: "Curd" },
  { bgImage: paneer, title: "Paneer" },
  { bgImage: lassi, title: "Lassi" },
  { bgImage: butter, title: "Butter" },
  { bgImage: sweets, title: "Sweets" },
];

// Testimonials
const dummyTestimonials = [
  {
    id: 1,
    text: "I recently tried placing my orders through the Country Delight app. The app is easy to use and place orders! I'm loving it...Its great to have these kind of app these days, we should invent more to make records",
    platform: "facebook",
    name: "Raju Ratsoji",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    text: "This app made my life so much easier! The delivery system is seamless, and the user interface is very friendly. Highly recommended. Its great to have these kind of app these days, we should invent more to make records",
    platform: "twitter",
    name: "Sneha Kapoor",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    text: "I enjoy how simple and effective the Country Delight app is. It has transformed how I order products online. Great job! Its great to have these kind of app these days, we should invent more to make records",
    platform: "instagram",
    name: "Rahul Mehta",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

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

const Home = forwardRef((props, ref) => {
  const contactRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToContact: () => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1420px",
          height: {
            xs: "300px",
            sm: "400px",
            md: "500px",
          },
          margin: "10vh auto",
          overflow: "hidden",
          padding: { xs: "0 8px", sm: "0 16px", md: "0 32px" },
          boxSizing: "border-box",
        }}
      >
        <img
          src={dairybg}
          alt="Home Dairy"
          style={{
            width: "100%", // Fixes potential overflow
            height: "100%",
            objectFit: "cover",
            borderRadius: "4vh",
          }}
        />
      </Box>

      {/* Explore Categories Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1420px",
          margin: "10vh auto",
          padding: { xs: "0 8px", sm: "0 16px", md: "0 32px" },
          boxSizing: "border-box",
          marginBottom: "15vh",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: "3.5vh",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Explore Categories
        </Typography>
        <Grid container sx={{ maxWidth: "90%", margin: "0 auto" }} spacing={1}>
          <Grid item xs={6} sm={4} md={4} lg={2}>
            <ProductCategory image={milkcookie} name="Milk & Cookies" />
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2}>
            <ProductCategory image={milkcake} name="Milk Cake" />
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2}>
            <ProductCategory image={pancake} name="Pancakes" />
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2}>
            <ProductCategory image={cakepeice} name="Cake Piece" />
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2}>
            <ProductCategory image={berries} name="Berries" />
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={2}>
            <ProductCategory image={salad} name="Salad" />
          </Grid>
        </Grid>
      </Box>

      {/* Discover Section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Discover Title */}
        <Box
          sx={{
            width: { xs: "90%", sm: "80%", md: "90%" },
            marginBottom: { xs: 0, sm: 0, md: "3vh" },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 550,
              fontFamily: "sans-serif",
              fontSize: {
                xs: "1.6rem",
                sm: "1.6rem",
                md: "2rem",
                lg: "2.5rem",
              },
              whiteSpace: { md: "pre-line" },
            }}
          >
            Discover the Finest Dairy Products {"\n"} for a Healthy Lifestyle
          </Typography>
        </Box>
      </Box>

      {/* Discovered Dairy Products */}
      <Box sx={{ marginRight: "3.5vh" }}>
        <CenteredDiscoverCards cards={cards} />
      </Box>

      {/* GOODNESS-TITLE */}
      <Box
        sx={{
          width: "100%",
          marginBottom: { xs: 0, sm: 0, md: "3vh" },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 550,
            fontFamily: "sans-serif",
            fontSize: {
              xs: "1.6rem",
              sm: "1.6rem",
              md: "2rem",
              lg: "2.5rem",
            },
            whiteSpace: { md: "pre-line" },
          }}
        >
          Our Goodness
        </Typography>
        <Typography
          // color="text.secondary"
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "0.8rem",
              md: "1.1rem",
              lg: "1.5rem",
            },
            color: "#424242",
          }}
        >
          Comes in many types!
        </Typography>
      </Box>

      {/* Type-cards */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "10vh" }}
      >
        <ProductTypes items={items} />
      </Box>

      {/* DISCOVER-PART-#2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          gap: { xs: 2, md: 0 },
          backgroundColor: "white",
          padding: { xs: "4vh 4vh", md: "8vh 16vh" },
          marginBottom: "10vh",
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontFamily: "sans-serif",
              fontSize: {
                xs: "1.6rem",
                sm: "1.8rem",
                md: "2rem",
                lg: "2.5rem",
              },
              lineHeight: 1.3,
            }}
          >
            Discover the Freshness{"\n"} of Our Dairy Products
          </Typography>
        </Box>

        {/* Right Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "",
              paddinRight: "20vh",
              marginBottom: 2,
              fontSize: { xs: "0.9rem", md: "1rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Indulge in the creamy goodness of our dairy products,{"\n"} made
            with the finest ingredients and a commitment to quality.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {/* <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                textTransform: "capitalize",
                color: "#fff",
                "&:hover": { backgroundColor: "#333" },
                borderRadius: 0,
                padding: "2vh 4vh",
                fontSize: "0.6rem",
                fontFamily: "sans-serif",
                letterSpacing: "1px",
              }}
            >
              Shop Now
            </Button> */}
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#000",
                textTransform: "capitalize",
                color: "#fff",
                "&:hover": { borderColor: "#333", backgroundColor: "#333" },
                borderRadius: 0,
                padding: "2vh 3.5vh",
                fontSize: "0.6rem",
                fontFamily: "sans-serif",
                letterSpacing: "1px",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>

      {/* TESTIMONIALS */}
      <Box
        sx={{
          width: "100%",
          marginY: "15vh",
          marginBottom: 8,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 550,
            fontFamily: "sans-serif",
            fontSize: {
              xs: "1.6rem",
              sm: "1.6rem",
              md: "2rem",
              lg: "2.5rem",
            },
            letterSpacing: "1px",
          }}
        >
          Testimonial
        </Typography>
      </Box>

      {/* TESTIMONIAL CARDS */}
      <Box sx={{ marginBottom: "10vh" }}>
        <Testimonials testimonials={dummyTestimonials} />
      </Box>

      {/* FEATURES */}
      <Box sx={{ px: { xs: 2, md: 5 } }}>
        <Freshness features={features} />
      </Box>

      {/* FINAL-CONTACT-FORM */}
      <Box ref={contactRef} id="contact">
        <ContactUs />
      </Box>
    </>
  );
});

export default Home;
