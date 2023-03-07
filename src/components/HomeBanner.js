import React from "react";
import { Box } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

const HomeBanner = ({ imgUrl }) => {
  return (
    <Box>
      <img
        src={imgUrl}
        alt="brand discount image"
        style={{
          width: "100%",
          objectFit: "contain",
          objectPosition: "top",
        }}
      />
    </Box>
  );
};

export default HomeBanner;
