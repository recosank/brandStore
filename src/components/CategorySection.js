import React from "react";

import { categoryData } from "../utils/data";
import CategoryCard from "./Cards/CategoryCard";
import baggy from "../images/baggy.png";
import winter from "../images/winter.png";
import women from "../images/women.png";
import deal from "../images/deal.png";
import trendy from "../images/trendy.png";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

const CategorySection = () => {
  const matchesXL = useMediaQuery("(min-width:1500px)");
  const matchesMD = useMediaQuery("(min-width:900px)");
  const matchesSM = useMediaQuery("(min-width:700px)");
  const matchesXS = useMediaQuery("(min-width:490px)");

  return (
    <Box sx={{ marginTop: "7%", border: "0px solid red", width: "100%" }}>
      <Grid
        container
        justifyContent="space-between"
        rowGap={4}
        alignItems="center"
        sx={{ padding: matchesSM ? "0" : "0% 7%" }}
      >
        {categoryData.map((val, key) => {
          return (
            <Grid xs={matchesXL ? 1.9 : matchesSM ? 3.5 : 5} key={key}>
              <CategoryCard data={val} />
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        columnGap={matchesSM ? 2.5 : 1}
        rowGap={2}
        sx={{ marginTop: "7%", width: "100%" }}
      >
        <Grid
          xs={matchesXL ? 5.91 : matchesMD ? 5.85 : matchesSM ? 5.8 : 12}
          sx={{}}
        >
          <img src={baggy} style={{ width: "100%" }} />
        </Grid>
        <Grid
          xs={
            matchesXL
              ? 5.91
              : matchesMD
              ? 5.85
              : matchesSM
              ? 5.8
              : matchesXS
              ? 5.9
              : 5.85
          }
          sx={{}}
        >
          <img src={winter} style={{ width: "100%" }} />
        </Grid>
        <Grid
          xs={
            matchesXL
              ? 3.9
              : matchesMD
              ? 3.81
              : matchesSM
              ? 3.7
              : matchesXS
              ? 5.9
              : 5.85
          }
          sx={{}}
        >
          <img src={women} style={{ width: "100%", textAlign: "end" }} />
        </Grid>
        <Grid
          xs={
            matchesXL
              ? 3.85
              : matchesMD
              ? 3.81
              : matchesSM
              ? 3.7
              : matchesXS
              ? 5.9
              : 5.85
          }
          sx={{}}
        >
          <img src={deal} style={{ width: "100%" }} />
        </Grid>
        <Grid
          xs={
            matchesXL
              ? 3.9
              : matchesMD
              ? 3.81
              : matchesSM
              ? 3.8
              : matchesXS
              ? 5.9
              : 5.85
          }
          sx={{}}
        >
          <img src={trendy} style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategorySection;
