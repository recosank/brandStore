import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const SaleCard = ({ color, imgUrl }) => {
  const matchesXL = useMediaQuery("(min-width:1500px)");
  const matchesLG = useMediaQuery("(min-width:1200px)");
  const matchesMD = useMediaQuery("(min-width:900px)");
  const matchesSM = useMediaQuery("(min-width:700px)");
  const matchesXS = useMediaQuery("(min-width:450px)");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      alignContent="space-around"
      justifyContent="space-around"
      sx={{
        backgroundColor: `${color}`,
        width: matchesXS ? "49%" : "97%",
        margin: matchesXS ? "0" : "2% 1.7%",
        height: matchesXL
          ? "652px"
          : matchesLG
          ? "600px"
          : matchesSM
          ? "550px"
          : "400px",
        paddingTop: "3%",
        paddingBottom: "3%",
      }}
    >
      <img src={imgUrl} style={{ width: "30%" }} />
      <Typography
        flexGrow={0.1}
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "600",
          fontSize: matchesSM ? "36px" : "25px",
          lineHeight: "48px",
          marginTop: "16px",
        }}
      >
        Hurry Up!
      </Typography>
      <Typography
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "600",
          fontSize: matchesLG
            ? "84px"
            : matchesMD
            ? "76px"
            : matchesSM
            ? "55px"
            : "40px",
          lineHeight: "112px",
        }}
      >
        85<span style={{ fontSize: matchesSM ? "90px" : "50px" }}>%</span> OFF
      </Typography>
      <Typography
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "600",
          fontSize: matchesSM ? "36px" : "25px",
          lineHeight: "48px",
        }}
      >
        Sale
      </Typography>
      <Button
        variant="text"
        sx={{
          fontFamily: "Playfair Display",
          border: "1px solid white",
          color: "white",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "20px",
          padding: "2% 8%",
          "&:hover": {
            color: "yellow",
            border: "1px solid yellow",
          },
        }}
      >
        SHOP NOW
      </Button>
    </Box>
  );
};

export default SaleCard;
