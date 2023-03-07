import React from "react";

import Box from "@mui/material/Box";

const ProductCard = ({ data }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: `${data.color}`,
        position: "relative",
      }}
    >
      <img className="blurImg" src={data.imgUrl} style={{ width: "90%" }} />
      <p
        style={{
          textAlign: "center",
          position: "absolute",

          fontFamily: "Playfair Display",
          bottom: "-3.7%",
          padding: "7% 0%",
          width: "100%",
          fontWeight: "600",
          color: "white",
          fontSize: "20px",
          lineHeight: "27px",
          backdropFilter: "blur(32px)",
          backgroundColor:
            "linear-gradient(111.49deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)",
        }}
      >
        {data.title}
      </p>
    </Box>
  );
};

export default ProductCard;
