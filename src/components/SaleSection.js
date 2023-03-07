import React from "react";

import { Box } from "@mui/material";
import SaleCard from "./Cards/SaleCard";
import diamond from "../images/diamond.png";
import sale from "../images/sale.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const SaleSection = () => {
  const matchesXS = useMediaQuery("(min-width:450px)");

  return (
    <Box
      display="flex"
      flexDirection={matchesXS ? "row" : "column"}
      columnGap={4}
      sx={{ marginTop: "4%" }}
    >
      <SaleCard color="#CCCEA7" imgUrl={diamond} />
      <SaleCard color="#D6BEBE" imgUrl={sale} />
    </Box>
  );
};

export default SaleSection;
