import { Box } from "@mui/material";
import React from "react";
import { TrendingData } from "../utils/data";
import TrendingCard from "./Cards/TrendingCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const TrendingSection = ({ title, totalCard, halfCard, mobileCard }) => {
  const matchesXL = useMediaQuery("(min-width:1500px)");
  const matchesLG = useMediaQuery("(min-width:1200px)");
  const matchesMD = useMediaQuery("(min-width:900px)");
  const matchesSM = useMediaQuery("(min-width:700px)");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{ width: "100%", marginTop: "6%", border: "0px solid red" }}
    >
      <div className="fancy" style={{ marginBottom: "0%", width: "100%" }}>
        <span
          style={{
            width: "100%",
            fontSize: matchesXL
              ? "36px"
              : matchesLG
              ? "30px"
              : matchesMD
              ? "25px"
              : matchesSM
              ? "20px"
              : "18px",
            fontFamily: "Playfair Display",
          }}
        >
          {title}
        </span>
      </div>
      <Grid
        container
        columnGap={matchesLG ? "1%" : matchesMD ? "8%" : "5%"}
        sx={{ marginTop: "5%", width: "100%", border: "0px solid red" }}
      >
        {TrendingData.slice(
          0,
          matchesLG ? totalCard : matchesSM ? halfCard : mobileCard
        ).map((val, key) => {
          return (
            <Grid
              xs={
                matchesXL
                  ? 2.9
                  : matchesLG
                  ? 2.9
                  : matchesMD
                  ? 3.35
                  : matchesSM
                  ? 3.56
                  : 5.7
              }
              sx={{}}
              key={key}
            >
              <TrendingCard data={val} />
            </Grid>
          );
        })}
      </Grid>
      <button
        className="button"
        style={{
          fontFamily: "Montserrat",
          backgroundColor: "#770015",
          fontWeight: "500",
          fontSize: matchesSM ? "16px" : "14px",
          lineHeight: "20px",
          color: "white",
          padding: matchesSM ? "14px 54px 14px 54px" : "12px 40px",
          marginTop: "0%",
        }}
      >
        VIEW ALL
      </button>
    </Box>
  );
};

export default TrendingSection;
