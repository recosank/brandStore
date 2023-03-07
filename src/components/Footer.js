import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import fb from "../images/fb.png";
import tw from "../images/tw.png";
import pin from "../images/pin.png";
import ln from "../images/ln.png";
import ig from "../images/ig.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const matchesLG = useMediaQuery("(min-width:1200px)");
  const matchesMD = useMediaQuery("(min-width:1000px)");
  const matchesXS = useMediaQuery("(min-width:450px)");

  return (
    <Grid
      container
      columnGap="3%"
      rowGap="13%"
      sx={{
        height: "300px",
        padding: "3% 0 0 7%",
      }}
    >
      <Grid xs={matchesLG ? 4 : 9}>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "28px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries....
        </Typography>
        <Box display="flex" columnGap="2%" sx={{ marginTop: "2%" }}>
          <img src={fb} />
          <img src={pin} />
          <img src={tw} />
          <img src={ig} />
          <img src={ln} />
        </Box>
      </Grid>
      <Grid xs={matchesLG ? 2 : 3.7}>
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: matchesXS ? "18px" : "14px",
            lineHeight: matchesXS ? "24px" : "18px",
            color: "#770015",
            marginBottom: "7%",
          }}
        >
          ONLINE SHOPPING
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Men’s T-Shirts
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Women’s Wear
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Winter Collections
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Hooded T-Shirts
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Streetwear Collections
        </Typography>
      </Grid>
      <Grid xs={matchesLG ? 2 : 3.7}>
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: matchesXS ? "18px" : "14px",
            lineHeight: matchesXS ? "24px" : "18px",
            color: "#770015",
            marginBottom: "7%",
          }}
        >
          CUSTOMER POLICIES
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Terms & Conditions
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Shipping & Returns Policy
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Cancellation & Refund Policy
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Contact Us
        </Typography>
      </Grid>
      <Grid xs={matchesLG ? 2 : 3.7}>
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: matchesXS ? "18px" : "14px",
            lineHeight: matchesXS ? "24px" : "18px",
            color: "#770015",
            marginBottom: "7%",
          }}
        >
          ONLINE SHOPPING
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Men’s T-Shirts
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Women’s Wear
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Winter Collections
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Hooded T-Shirts
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: matchesXS ? "34px" : "25px",
          }}
        >
          Streetwear Collections
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
