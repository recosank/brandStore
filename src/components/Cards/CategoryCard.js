import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const CategoryCard = ({ data }) => {
  const matchesSM = useMediaQuery("(min-width:700px)");
  const matchesXS = useMediaQuery("(min-width:450px)");

  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{}}>
      <Avatar
        className="prodCard"
        src={data.imgUrl}
        sx={{
          backgroundColor: `${data.color}`,
          width: "100%",
          height: "100%",
        }}
      />
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: matchesSM ? "16px" : matchesXS ? "14px" : "11px",
          lineHeight: "21px",
          marginTop: "20px",
          fontFamily: "Playfair Display",
        }}
      >
        {data.title}
      </Typography>
    </Box>
  );
};

export default CategoryCard;
