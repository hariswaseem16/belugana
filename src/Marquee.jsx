import React from "react";
import { Box } from "@mui/material";
import { image1, image2, image3, image4, image5 } from "./images";

const Marquee = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: "100%",
        backgroundColor: "#8599C6", // Optional background
        padding: "20px 0",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          gap: "30px", // Space between images
          animation: "marquee 30s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
          },
        }}
      >
        <img src={image1} alt="img1" style={{ height: "70px" }} />
        <img src={image2} alt="img2" style={{ height: "70px" }} />
        <img src={image3} alt="img3" style={{ height: "70px" }} />
        <img src={image4} alt="img4" style={{ height: "70px" }} />
        <img src={image5} alt="img5" style={{ height: "70px" }} />
      </Box>
    </Box>
  );
};

export default Marquee;
