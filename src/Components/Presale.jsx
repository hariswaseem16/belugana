"use client";

import { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  TextField,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { dolphin, eth } from "../images";
import Countdowntimmer from "./Countdowntimmer";

const Presale = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // Set the countdown target date (e.g., 147 days, 18 hours, 52 minutes, 39 seconds from now)
  // const calculateTargetDate = () => {
  //   const now = new Date();
  //   const targetDate = new Date(now);
  //   targetDate.setDate(now.getDate() + 147);
  //   targetDate.setHours(now.getHours() + 18);
  //   targetDate.setMinutes(now.getMinutes() + 52);
  //   targetDate.setSeconds(now.getSeconds() + 39);
  //   return targetDate;
  // };

  // // State to store the target date and remaining time
  // const [targetDate] = useState(calculateTargetDate());
  // const [timeRemaining, setTimeRemaining] = useState({
  //   days: 147,
  //   hours: 18,
  //   minutes: 52,
  //   seconds: 39,
  // });

  // // Function to calculate the remaining time
  // const calculateTimeRemaining = () => {
  //   const now = new Date();
  //   const difference = targetDate.getTime() - now.getTime();

  //   // If the countdown is over
  //   if (difference <= 0) {
  //     return {
  //       days: 0,
  //       hours: 0,
  //       minutes: 0,
  //       seconds: 0,
  //     };
  //   }

  //   // Calculate remaining time
  //   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor(
  //     (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //   return {
  //     days,
  //     hours,
  //     minutes,
  //     seconds,
  //   };
  // };

  // // Update the countdown every second
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeRemaining(calculateTimeRemaining());
  //   }, 1000);

  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(timer);
  // }, [targetDate]);

  // Placeholder images for demo purposes

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 102, 204, 0.7)",
        borderRadius: { xs: "10px", sm: "15px" },
        padding: { xs: "15px", sm: "20px", md: "30px" },
        color: "white",
        textAlign: "center",
        width: "100%",
        maxWidth: { xs: "100%", sm: "550px" },
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        mx: "auto",
      }}
    >
      {/* Ocean Names */}
      <Box sx={{ mb: { xs: 1, sm: 2 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            mb: 1,
            position: "relative",
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Typography
            component="span"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              display: "inline-block",
              marginRight: { xs: 0, sm: "15px" },
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
              position: "relative",
            }}
          >
            ARCTIC
            <Typography
              component="span"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-25deg)",
                color: "#8FE388",
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              COMPLETED
            </Typography>
          </Typography>
          <Typography
            component="span"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              display: "inline-block",
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
              position: "relative",
            }}
          >
            ATLANTIC
            <Typography
              component="span"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-25deg)",
                color: "#8FE388",
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              COMPLETED
            </Typography>
          </Typography>
        </Box>

        {/* New Line with ANTARCTIC, PACIFIC, and INDIAN */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: { xs: "wrap", sm: "nowrap" }, // Wrap on extra-small screens, but keep one line on small and up
            gap: { xs: "5px", sm: "10px", md: "15px" },
          }}
        >
          {["ANTARCTIC", "PACIFIC", "INDIAN"].map((text) => (
            <Typography
              key={text}
              component="span"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
                color: "#fff",
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Goal Text */}
      <Typography
        variant="body1"
        sx={{
          mb: { xs: 1, sm: 2 },
          fontSize: { xs: "12px", sm: "14px" },
          fontWeight: "bold",
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
        }}
      >
        THE ULTIMATE GOAL IS TO SECURE THE TOP FIVE BEST NESTS
      </Typography>

      {/* Presale Started */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: { xs: 2, sm: 3 },
          fontSize: { xs: "20px", sm: "24px", md: "28px" },
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
        }}
      >
        PRESALE TIME HAS STARTED
      </Typography>

      {/* Countdown Timer */}
      {/* <Grid
        container
        spacing={{ xs: 1, sm: 2 }}
        sx={{
          mb: { xs: 2, sm: 3, md: 4 },
          justifyContent: "center",
          width: "100%",
          mx: "auto",
        }}
      >
        <Grid item xs={3} sm="auto">
          <Box
            sx={{
              backgroundColor: "rgba(51, 102, 204, 0.8)",
              borderRadius: "10px",
              padding: { xs: "6px", sm: "10px" },
              width: { xs: "100%", sm: "70px" },
              textAlign: "center",
              border: "4px solid #88A4FE",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
              }}
            >
              {timeRemaining.days}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
              }}
            >
              Days
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} sm="auto">
          <Box
            sx={{
              backgroundColor: "rgba(51, 102, 204, 0.8)",
              borderRadius: "10px",
              padding: { xs: "6px", sm: "10px" },
              width: { xs: "100%", sm: "70px" },
              textAlign: "center",
              border: "4px solid #88A4FE",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
              }}
            >
              {String(timeRemaining.hours).padStart(2, "0")}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
              }}
            >
              Hours
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} sm="auto">
          <Box
            sx={{
              backgroundColor: "rgba(51, 102, 204, 0.8)",
              borderRadius: "10px",
              padding: { xs: "6px", sm: "10px" },
              width: { xs: "100%", sm: "70px" },
              textAlign: "center",
              border: "4px solid #88A4FE",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
              }}
            >
              {String(timeRemaining.minutes).padStart(2, "0")}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
              }}
            >
              Min
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} sm="auto">
          <Box
            sx={{
              backgroundColor: "rgba(51, 102, 204, 0.8)",
              borderRadius: "10px",
              padding: { xs: "6px", sm: "10px" },
              width: { xs: "100%", sm: "70px" },
              textAlign: "center",
              border: "4px solid #88A4FE",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
              }}
            >
              {String(timeRemaining.seconds).padStart(2, "0")}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
              }}
            >
              Sec
            </Typography>
          </Box>
        </Grid>
      </Grid> */}

      <Countdowntimmer />

      {/* Token Rate */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            height: "2px",
            width: { xs: "40px", sm: "60px", md: "80px" },
            backgroundColor: "white",
            mr: { xs: 1, sm: 2 },
          }}
        />
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "bold",
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
          }}
        >
          1 $BELU = 0.0000001 ETH
        </Typography>
        <Box
          sx={{
            height: "2px",
            width: { xs: "40px", sm: "60px", md: "80px" },
            backgroundColor: "white",
            ml: { xs: 1, sm: 2 },
          }}
        />
      </Box>

      {/* ETH and Claim Buttons */}
      <Grid container spacing={{ xs: 1, sm: 2 }} sx={{ mb: { xs: 2, sm: 3 } }}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              fontWeight: "bold",
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            <Box
              component="img"
              src={eth}
              alt="ETH"
              sx={{
                height: { xs: "16px", sm: "20px" },
                mr: 0.5,
              }}
            />
            ETH
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              fontWeight: "bold",
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            CLAIM
          </Button>
        </Grid>
      </Grid>

      {/* ETH Balance */}
      <Typography
        variant="body1"
        sx={{
          mb: { xs: 1, sm: 2 },
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: "bold",
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
        }}
      >
        ETH BALANCE :0.00000
      </Typography>

      {/* Contract Address */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          mb: 1,
          fontSize: { xs: "14px", sm: "16px" },
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
        }}
      >
        CONTRACT ADDRESS
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 1,
          fontSize: { xs: "12px", sm: "14px" },
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
          fontWeight: "bold",
          wordBreak: "break-all",
        }}
      >
        0x2501957D4EAADDD8166500E0BF5F63CD091DFC50
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: { xs: 2, sm: 3 },
          fontSize: { xs: "10px", sm: "12px" },
          fontStyle: "italic",
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
          fontWeight: "bold",
        }}
      >
        (DO NOT SEND FUNDS TO THIS ADDRESS.)
      </Typography>

      {/* Payment Fields */}
      <Grid container spacing={1} sx={{ mb: { xs: 2, sm: 3 } }}>
        <Grid item xs={4} sx={{ textAlign: "left" }}>
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              fontSize: { xs: "10px", sm: "12px", md: "14px" },
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
              fontWeight: "bold",
            }}
          >
            PAY WITH ETH
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              fontSize: { xs: "10px", sm: "12px", md: "14px" },
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
              fontWeight: "bold",
            }}
          >
            MAX
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Typography
            variant="body2"
            sx={{
              mb: 1,
              fontSize: { xs: "10px", sm: "12px", md: "14px" },
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
              fontWeight: "bold",
            }}
          >
            $BELU YOU RECEIVE
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component="img"
                    src={eth}
                    alt="eth"
                    sx={{ height: { xs: "20px", sm: "30px" } }}
                  />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: "rgba(0, 102, 204, 0.5)",
                border: "3px solid #fff",
                borderRadius: "5px",
                height: { xs: "36px", sm: "40px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
                fontSize: { xs: "12px", sm: "14px" },
                "& .MuiOutlinedInput-input": {
                  padding: { xs: "8px 10px", sm: "10px 14px" },
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box
                    component="img"
                    src={dolphin}
                    alt="BELU"
                    sx={{ height: { xs: "16px", sm: "20px" } }}
                  />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: "rgba(0, 102, 204, 0.4)",
                border: "3px solid #fff",

                borderRadius: "5px",
                height: { xs: "36px", sm: "40px" },
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
                fontSize: { xs: "12px", sm: "14px" },
                "& .MuiOutlinedInput-input": {
                  padding: { xs: "8px 10px", sm: "10px 14px" },
                },
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Connect Wallet Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "10px",
          fontWeight: "bold",
          py: { xs: 1, sm: 1.5 },
          fontSize: { xs: "14px", sm: "16px" },
          fontFamily: '"Comic Sans MS", cursive, sans-serif',
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          },
        }}
      >
        CONNECT WALLET
      </Button>
    </Box>
  );
};

export default Presale;
