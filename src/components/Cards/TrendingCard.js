import "../../App.css";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import cart from "../../images/cart.png";
import heart from "../../images/heart.png";
import setting from "../../images/setting.png";

const TrendingCard = ({ data }) => {
  const matchesXL = useMediaQuery("(min-width:1500px)");
  const matchesLG = useMediaQuery("(min-width:1200px)");
  const matchesMD = useMediaQuery("(min-width:900px)");
  const matchesXS = useMediaQuery("(min-width:450px)");

  const [cardHover, setCardHover] = useState(false);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{
        height: matchesXL
          ? "600px"
          : matchesLG
          ? "540px"
          : matchesMD
          ? "540px"
          : matchesXS
          ? "500px"
          : "400px",
        marginBottom: matchesXS ? "20%" : "0%",
        border: "0px solid red",
      }}
    >
      <div
        className="tredImg"
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
        style={{
          backgroundImage: `url(${data.imgUrl})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: matchesXL ? "80%" : matchesLG ? "70%" : "65%",
        }}
      >
        {cardHover && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "rgba(0,0,0,0.7)",
              height: "100%",
              margin: "0",
              padding: "0",
              backdropFilter: "blur(5px)",
            }}
          >
            <img src={cart} style={{}} />
            <img src={heart} style={{ margin: "0 9%" }} />
            <img src={setting} style={{}} />
          </Box>
        )}
      </div>

      <Typography
        sx={{
          fontWeight: "400",
          width: matchesLG
            ? "50%"
            : matchesMD
            ? "55%"
            : matchesXS
            ? "70%"
            : "90%",
          fontSize: "14px",
          lineHeight: "17px",
          textAlign: "center",
          marginTop: "2.5%",
          fontFamily: "Montserrat",
        }}
      >
        {data.title}
      </Typography>
      <p
        style={{
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "18px",
          fontFamily: "Montserrat",
        }}
      >
        ₹{data.price}
      </p>
      {matchesXS && (
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography
            sx={{
              padding: "10px",
              fontWeight: "500",
              border: "1px solid #E6E6E6",
              fontSize: "14px",
              fontFamily: "Montserrat",
              lineHeight: "17px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            S
          </Typography>
          <Typography
            sx={{
              padding: "10px",
              fontWeight: "500",
              border: "1px solid #E6E6E6",
              fontSize: "14px",
              fontFamily: "Montserrat",
              lineHeight: "17px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            M
          </Typography>
          <Typography
            sx={{
              padding: "10px",
              fontWeight: "500",
              border: "1px solid #E6E6E6",
              fontSize: "14px",
              fontFamily: "Montserrat",
              lineHeight: "17px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            L
          </Typography>
          <Typography
            sx={{
              padding: "10px",
              fontWeight: "500",
              border: "1px solid #E6E6E6",
              fontSize: "14px",
              fontFamily: "Montserrat",
              lineHeight: "17px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            XL
          </Typography>
          <Typography
            sx={{
              padding: "10px",
              fontWeight: "500",
              border: "1px solid #E6E6E6",
              fontSize: "14px",
              fontFamily: "Montserrat",
              lineHeight: "17px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            XXL
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TrendingCard;
