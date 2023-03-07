import React from "react";

import returns from "../images/returns.png";
import quality from "../images/quality.png";
import safty from "../images/safty.png";
import help from "../images/help.png";
import halfright from "../images/halfright.png";
import halfleft from "../images/halfleft.png";

import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

const HelpSection = () => {
  const matchesLG = useMediaQuery("(min-width:1200px)");
  const matchesMD = useMediaQuery("(min-width:1500px)");
  const matchesSM = useMediaQuery("(min-width:700px)");

  return (
    <div
      style={{
        backgroundColor: "#F5F4F2",
        marginTop: "3%",
        position: "relative",
      }}
    >
      <img
        src={halfright}
        style={{
          display: matchesSM ? "block" : "none",
          position: "absolute",
          right: "0",
          top: matchesLG ? "-90px" : "-30%",
          width: "6%",
        }}
      />
      <img
        src={halfleft}
        style={{
          display: matchesSM ? "block" : "none",
          position: "absolute",
          top: matchesLG ? "150px" : "120px",
          width: "6%",
        }}
      />
      <Container maxWidth="xl">
        <Grid container columnGap="6%" sx={{ padding: "3.5% 0%" }}>
          <Grid xs={1.9} sx={{ textAlign: "center" }}>
            <img src={returns} style={{ width: "40%" }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                marginTop: "20px",
                fontWeight: "500",
                fontSize: matchesMD ? "16px" : "14px",
                lineHeight: "20px",
              }}
            >
              7 Days Return
            </Typography>
          </Grid>
          <Divider
            xs={1}
            orientation="vertical"
            sx={{
              height: "110px",
              backgroundColor: "#FFC7D1",
              marginTop: "4px",
            }}
          />
          <Grid xs={1.9} sx={{ textAlign: "center" }}>
            <img src={quality} style={{ width: "30%" }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                marginTop: "20px",
                fontWeight: "500",
                fontSize: matchesMD ? "16px" : "14px",
                lineHeight: "20px",
              }}
            >
              Quality Products
            </Typography>
          </Grid>
          <Divider
            xs={1}
            orientation="vertical"
            sx={{
              height: "110px",
              backgroundColor: "#FFC7D1",
              marginTop: "4px",
            }}
          />
          <Grid xs={1.9} sx={{ textAlign: "center" }}>
            <img src={safty} style={{ width: "50%" }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                marginTop: "20px",
                fontWeight: "500",
                fontSize: matchesMD ? "16px" : "14px",
                lineHeight: "20px",
              }}
            >
              Safe Payment
            </Typography>
          </Grid>
          <Divider
            xs={1}
            orientation="vertical"
            sx={{
              height: "110px",
              backgroundColor: "#FFC7D1",
              marginTop: "4px",
            }}
          />
          <Grid xs={1.5} sx={{ textAlign: "center" }}>
            <img src={help} style={{ width: "50%" }} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                marginTop: "20px",
                fontWeight: "500",
                fontSize: matchesMD ? "16px" : "14px",
                lineHeight: "20px",
              }}
            >
              24x7 Helpline
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HelpSection;
