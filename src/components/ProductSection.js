import React from "react";

import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { productData } from "../utils/data";
import ProductCard from "./Cards/ProductCard";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductSection = () => {
  const matchesXL = useMediaQuery("(min-width:1500px)");
  const matchesLG = useMediaQuery("(min-width:1200px)");
  const matchesMD = useMediaQuery("(min-width:1500px)");
  const matchesSM = useMediaQuery("(min-width:700px)");
  const matchesXS = useMediaQuery("(min-width:450px)");

  return (
    <Box>
      <Grid
        container
        rowGap={3}
        columnGap={matchesSM ? "2%" : "8%"}
        sx={{ marginTop: "7%", width: "100%" }}
      >
        {productData.map((val, key) => {
          return (
            <Grid xs={matchesSM ? 3.84 : 5.5} key={key}>
              <ProductCard data={val} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductSection;
