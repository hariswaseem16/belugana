import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#506DAE",
        textAlign: "center",
        padding: "20px",
        borderRadius: "8px",
        py: 4,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
          marginBottom: "10px",
          fontSize: "30px",
        }}
      >
        DISCLAIMER
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "white",
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
          marginBottom: "10px",
          width: { xs: "90%", md: "60%" },
          mx: "auto",
          fontWeight: "bold",
        }}
      >
        Cryptocurrency trading is highly volatile and carries a certain level of
        risk. It may not be suitable for all investors. Investors should
        exercise caution as they may lose some or all of their invested capital.
      </Typography>
      <Typography
        sx={{
          fontSize: "18px",
          color: "white",
          fontWeight: "bold",
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
        }}
      >
        © 2024 Belugana — All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
