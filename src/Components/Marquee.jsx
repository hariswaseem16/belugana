import React from "react";
import Marquee from "react-fast-marquee";
import Box from "@mui/material/Box";

import { image1, image2, image3, image4, image5 } from "../images";

// Partner logos array
const partnerLogos = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
  { img: image5 },
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
  { img: image5 },
];

const MarqueeUi = () => {
  return (
    <Box sx={{ backgroundColor: "transparent", width: "100%" }}>
      <Box
        sx={{
          background: "#8599C6",
        }}
      >
        <Marquee>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              height: "150px",
            }}
          >
            {partnerLogos.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginRight: { xs: "20px", md: "48px" },
                }}
              >
                <Box sx={{ width: "200px", height: "50px", mb: 5 }}>
                  <img
                    src={item.img}
                    alt="partner logo"
                    style={{
                      width: "100%",
                      height: "90px ",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Marquee>
      </Box>
    </Box>
  );
};

export default MarqueeUi;
