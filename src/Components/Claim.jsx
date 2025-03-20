"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import { claimbg } from "../images";

const Claim = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = useState(0);

  // Placeholder for the background image

  const steps = [
    "CONNECT YOUR WALLET",
    "FUND YOUR WALLET WITH CRYPTOCURRENCY",
    "PURCHASE $BELU",
  ];

  const stepContent = [
    {
      title: "HOW TO BUY $BELU",
      content:
        "USE THE WIDGET TO CONNECT YOUR METAMASK OR ANY OTHER SUPPORTED WALLET TO THE WEBSITE. YOU CAN EASILY PURCHASE $BELU TOKENS USING ETH.",
    },
    {
      title: "HOW TO BUY $BELU",
      content:
        "ENSURE YOUR WALLET HAS SUFFICIENT ETH TO PURCHASE $BELU TOKENS. YOU CAN BUY ETH FROM EXCHANGES AND TRANSFER IT TO YOUR WALLET.",
    },
    {
      title: "HOW TO BUY $BELU",
      content:
        "AFTER PURCHASING, CLICK THE CLAIM BUTTON. THEN, COPY THE TOKEN CA FROM THE WIDGET AND IMPORT THE TOKEN IN YOUR WALLET (BASE MAINNET).",
    },
  ];

  const faqItems = [
    {
      question: "WHAT IS BELUGANA?",
      answer:
        "Belugana is a community-driven cryptocurrency project built on the Base network.",
    },
    {
      question: "WHAT IS THE BELUGANA PRESALE?",
      answer:
        "The Belugana presale is an early opportunity to purchase $BELU tokens before they're available on decentralized exchanges.",
    },
    {
      question: "WHERE CAN I SEE THE TOKENS I PURCHASED?",
      answer:
        "After importing the token to your wallet, you can see your $BELU balance in your wallet's asset list.",
    },
    {
      question: "HOW CAN I COMMUNICATE WITH THE BELUGANA TEAM?",
      answer:
        "You can join our official Telegram group or Discord server to communicate with the team and community.",
    },
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Custom StepIcon component for vertical stepper
  const CustomStepIcon = ({ active, completed, icon }) => {
    return (
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: completed || active ? "#4caf50" : "#90caf9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {completed ? <CheckIcon sx={{ color: "white" }} /> : icon}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        background: `url(${claimbg})`,
        backgroundSize: "cover",
        padding: { xs: "20px 10px", sm: "40px 20px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "40px",
          fontFamily: "inherit",
          fontSize: { xs: "28px", sm: "36px", md: "48px" },
        }}
      >
        {stepContent[activeStep].title}
      </Typography>

      {/* Horizontal Stepper for larger screens */}
      {!isMobile && (
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            marginBottom: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {steps.map((label, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                zIndex: 1,
              }}
            >
              {/* Step circle with number or checkmark */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: index <= activeStep ? "#4caf50" : "#90caf9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "white",
                  cursor: index < activeStep ? "pointer" : "default",
                  transition: "background-color 0.3s ease",
                }}
                onClick={() => {
                  if (index < activeStep) {
                    setActiveStep(index);
                  }
                }}
              >
                {index < activeStep ? (
                  <CheckIcon sx={{ color: "white" }} />
                ) : (
                  index + 1
                )}
              </Box>

              {/* Step label */}
              <Typography
                sx={{
                  color: index <= activeStep ? "#4caf50" : "white",
                  fontWeight: "bold",
                  marginLeft: 1,
                  marginRight: 1,
                  transition: "color 0.3s ease",
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                }}
              >
                {label}
              </Typography>

              {/* Add connecting line between steps (except after the last step) */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    width: "20px",
                    height: "2px",
                    backgroundColor:
                      index < activeStep
                        ? "#4caf50"
                        : "rgba(255, 255, 255, 0.5)",
                    margin: "0 10px",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      )}

      {/* Vertical Stepper for mobile screens */}
      {isMobile && (
        <Box sx={{ width: "100%", maxWidth: "600px", marginBottom: "30px" }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={(props) => <CustomStepIcon {...props} />}
                  sx={{
                    "& .MuiStepLabel-label": {
                      color: index <= activeStep ? "#4caf50" : "white",
                      fontWeight: "bold",
                      fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    },
                  }}
                  onClick={() => {
                    if (index < activeStep) {
                      setActiveStep(index);
                    }
                  }}
                >
                  {label}
                </StepLabel>
                <StepContent>
                  <Typography
                    sx={{
                      fontFamily: '"Comic Sans MS", cursive, sans-serif',
                      color: "white",
                      marginBottom: 2,
                      paddingLeft: 2,
                      borderLeft: "2px solid #4caf50",
                    }}
                  >
                    {index === activeStep && stepContent[activeStep].content}
                  </Typography>
                  {index === activeStep && (
                    <Box sx={{ mb: 2, display: "flex", gap: 1 }}>
                      <Button
                        variant="contained"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "20px",
                          padding: "6px 12px",
                          fontSize: "12px",
                          fontFamily: '"Comic Sans MS", cursive, sans-serif',
                          "&:hover": {
                            backgroundColor: "#e0e0e0",
                          },
                          "&.Mui-disabled": {
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            color: "rgba(0, 0, 0, 0.3)",
                          },
                        }}
                      >
                        PREVIOUS
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        disabled={activeStep === steps.length - 1}
                        sx={{
                          backgroundColor: "white",
                          color: "black",
                          fontWeight: "bold",
                          borderRadius: "20px",
                          padding: "6px 12px",
                          fontSize: "12px",
                          fontFamily: '"Comic Sans MS", cursive, sans-serif',
                          "&:hover": {
                            backgroundColor: "#e0e0e0",
                          },
                          "&.Mui-disabled": {
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            color: "rgba(0, 0, 0, 0.3)",
                          },
                        }}
                      >
                        GOT IT
                      </Button>
                    </Box>
                  )}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      )}

      {/* Content box with white transparent blur - Only show on non-mobile */}
      {!isMobile && (
        <Paper
          elevation={3}
          sx={{
            width: "80%",
            maxWidth: "900px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            padding: { xs: "20px", sm: "30px" },
            marginBottom: "40px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontFamily: "inherit",
              fontWeight: "bold",
              lineHeight: 1.5,
              color: "#fff",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            {stepContent[activeStep].content}
          </Typography>
        </Paper>
      )}

      {/* Navigation buttons - Only show on non-mobile */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            maxWidth: "900px",
            marginBottom: "60px",
          }}
        >
          <Button
            variant="contained"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: { xs: "6px 15px", sm: "8px 20px" },
              fontFamily: "inherit",
              fontSize: { xs: "12px", sm: "14px" },
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
              "&.Mui-disabled": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            PREVIOUS STEP
          </Button>

          <Button
            variant="contained"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            sx={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: { xs: "6px 15px", sm: "8px 20px" },
              fontFamily: "inherit",
              fontSize: { xs: "12px", sm: "14px" },
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
              "&.Mui-disabled": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            GOT IT
          </Button>
        </Box>
      )}

      {/* HOW TO CLAIM $BELU Section */}
      <Box
        sx={{
          width: { xs: "90%", sm: "80%" },
          maxWidth: "900px",
          marginBottom: "40px",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: { xs: "20px", sm: "40px" },
            fontFamily: "inherit",
            fontSize: { xs: "24px", sm: "32px", md: "48px" },
          }}
        >
          HOW TO CLAIM $BELU
        </Typography>

        <Paper
          elevation={3}
          sx={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            padding: { xs: "15px", sm: "30px" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontFamily: "inherit",
              fontWeight: "bold",
              lineHeight: 1.5,
              color: "#fff",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            AFTER PURCHASING, CLICK THE CLAIM BUTTON. THEN, COPY THE TOKEN CA
            FROM THE WIDGET AND IMPORT THE TOKEN IN YOUR WALLET (BASE MAINNET).
          </Typography>
        </Paper>
      </Box>

      {/* FAQ Section - Always visible */}
      <Box
        sx={{
          width: { xs: "95%", sm: "80%" },
          maxWidth: "900px",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: { xs: "20px", sm: "40px" },
            fontFamily: "inherit",
            fontSize: { xs: "24px", sm: "32px", md: "48px" },
          }}
        >
          FAQ
        </Typography>

        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              color: "white",
              marginBottom: "10px",
              borderRadius: "5px",
              "&:before": {
                display: "none",
              },
              "&.Mui-expanded": {
                margin: "0 0 10px 0",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              sx={{
                fontFamily: "inherit",
                fontWeight: "bold",
                padding: { xs: "0 12px", sm: "0 16px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: { xs: "8px 12px 16px", sm: "8px 16px 16px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Claim;
