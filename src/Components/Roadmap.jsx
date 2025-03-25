"use client";

import { useRef, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import { bgvedio } from "../images";

const Roadmap = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => {
        videoElement.play();
      };

      videoElement.addEventListener("ended", handleVideoEnd);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={bgvedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // padding: "2rem",
        }}
      >
        {/* Main Heading */}
        <Typography
          sx={{
            color: "white",
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            fontSize: { xs: "0.9rem", sm: "2.2rem", md: "1.5rem" },
          }}
        >
          DIFFERENCES BETWEEN BELUGANA AND OTHER PRESALES AND ROADMAP
        </Typography>

        {/* Main Content Box */}
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(15px)",
            borderRadius: "20px",
            padding: "1rem",
            marginBottom: "2rem",
            width: "100%",
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
            },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
              fontWeight: "bold",
              fontSize: { xs: "0.8rem", sm: "1.1rem", md: "1.1rem" },
              textAlign: "center",
              lineHeight: 1.5,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            THE EXISTING ISSUE WITH PRESALE MEME COINS IS THAT THEIR TOKEN
            PRICES TEND TO DROP BELOW THE PRICES AT WHICH YOU PURCHASED THEM
            DURING THE PRESALE AFTER LISTING ON DEX. BELUGANA WILL DO EVERYTHING
            POSSIBLE TO ENSURE THAT THE TOKEN PRICE DOES NOT FALL BELOW WHAT YOU
            PAID DURING THE PRESALE. ADDITIONALLY, OUR TOKEN PRICE IS FIXED,
            PROVIDING ALL INVESTORS WITH A FAIR OPPORTUNITY. ADDITIONALLY, THE
            CLAIM BUTTON SHOULD BE AVAILABLE FOR THE BUYER TO CLICK IMMEDIATELY
            AFTER PURCHASE. BELUGANA HAS CURRENTLY COMPLETED LISTING
            NEGOTIATIONS WITH ONE TIER 1 CEX. HOWEVER, DUE TO NDA RESTRICTIONS,
            WE CANNOT DISCLOSE SPECIFIC DETAILS, SO PLEASE REFER TO THE
            EXCHANGES LISTED ON THE BELUGANA WEBSITE. THE PRESALE WILL END
            WITHOUT PRIOR NOTICE. THE END OF THE PRESALE INDICATES THAT
            FUNDRAISING HAS BEEN COMPLETED, AND THE ANNOUNCEMENT FOR THE TIER 1
            CEX LISTING IS JUST AROUND THE CORNER!
          </Typography>
        </Box>

        {/* Disclaimer */}
        <Typography
          sx={{
            color: "white",
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            fontWeight: "bold",
            fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" },
            textAlign: "center",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          BELUGANA ADVISES YOU NOT TO SELL ON DEX, BUT THE RESPONSIBILITY FOR
          YOUR INVESTMENT LIES ENTIRELY WITH YOU, AND BELUGANA ASSUMES NO
          LIABILITY
        </Typography>
      </Container>
    </Box>
  );
};

export default Roadmap;
