import { Container, Typography, Box } from "@mui/material";
import React from "react";
import "../App.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const SubscriptionSection = () => {
  const matchesXL = useMediaQuery("(min-width:1500px)");
  const matchesLG = useMediaQuery("(min-width:1200px)");
  const matchesMD = useMediaQuery("(min-width:1500px)");
  const matchesSM = useMediaQuery("(min-width:700px)");
  const matchesXS = useMediaQuery("(min-width:450px)");
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "300px",
        background: "linear-gradient(97.3deg, #AB001E -6.23%, #770015 105.09%)",
        position: "relative",
        marginTop: "7%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "78.38%",
          right: "-3.62%",
          top: "0%",
          bottom: "5.06%",
          background: "rgba(255, 255, 255, 0.16)",
          Width: "40%",
          height: "100%",
          transform: "rotate(-50.63deg)",
        }}
      ></div>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: "600",
            fontSize: matchesLG
              ? "36px"
              : matchesMD
              ? "30px"
              : matchesSM
              ? "28px"
              : "20px",
            lineHeight: matchesSM ? "48px" : "35px",
            textAlign: "center",
            color: "#FFFFFF",
            width: matchesSM ? "51%" : matchesXS ? "70%" : "90%",
          }}
        >
          Subscribe to get updates on exciting offers & deals
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ width: "100%", marginTop: matchesSM ? "3%" : "5%" }}
        >
          <input
            className="subInput"
            type="text"
            placeholder="Enter Your Email."
            style={{
              background: " rgba(255, 255, 255, 0.32)",
              border: "none",
              textDecoration: "none",
              width: matchesSM ? "30%" : matchesXS ? "50%" : "60%",
              padding: "1.8%",
              color: "white",
              fontSize: "17px",
            }}
          />
          <button
            style={{
              fontFamily: "Playfair Display",
              backgroundColor: "white",
              color: "#770015",
              border: "none",
              textDecoration: "none",
              padding: "0 2%",
              fontWeight: "600",
              fontSize: matchesLG ? "22px" : matchesSM ? "17px" : "15px",
              lineHeight: "29px",
              textAlign: "center",
            }}
          >
            Subscribe
          </button>
        </Box>
      </Box>
    </Container>
  );
};

export default SubscriptionSection;
