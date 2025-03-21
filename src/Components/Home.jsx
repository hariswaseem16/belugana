"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Box,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Presale from "./Presale";
import { bg, dolphin } from "../images";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = ["HOME", "BELUNOMICS", "HOW TO BUY", "FAQ'S"];

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "#000",
        color: "white",
        padding: "20px 0",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", padding: "0 20px" }}
      >
        <IconButton sx={{ color: "white" }} onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          marginBottom: "20px",
        }}
      >
        <Box
          component="img"
          src={dolphin} // Replace with actual dolphin image URL
          alt="Belugana Logo"
          sx={{ height: "40px", marginRight: "10px" }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
          }}
        >
          BELUGANA
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

      <List>
        {navItems.map((item) => (
          <ListItem button key={item} sx={{ padding: "15px 20px" }}>
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                fontFamily: '"Comic Sans MS", cursive, sans-serif',
                fontWeight: "bold",
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

      <Box
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Box sx={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <IconButton sx={{ color: "white" }}>
            <TelegramIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <TwitterIcon />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
          }}
        >
          CONNECT WALLET
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#000",
        overflow: "hidden",
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
      }}
    >
      {/* Background Image - Underwater Scene */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bg})`, // Replace with actual bg URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Navigation Bar - Hidden on mobile */}
      {!isMobile && (
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "black",
            boxShadow: "none",
            zIndex: 1000, // Increased zIndex to avoid overlap issues
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "8px 0",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap", // Allows wrapping on smaller screens
              paddingX: "20px",
              bgcolor: "#000",
            }}
          >
            {/* Left Side: Logo & Brand Name */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={dolphin}
                alt="Belugana Logo"
                sx={{ height: "50px", marginRight: "10px" }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: '"Comic Sans MS", cursive, sans-serif',
                }}
              >
                BELUGANA
              </Typography>
            </Box>

            {/* Center: Navigation Links */}
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap", // Makes links wrap if needed
                justifyContent: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    fontSize: "18px",
                    transition: "color 0.3s ease-in-out",
                    "&:hover": {
                      color: "#00C2FF", // Light blue hover effect
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Right Side: Social Icons & Wallet Button */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <IconButton
                sx={{ color: "white", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00C2FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                <TelegramIcon />
              </IconButton>
              <IconButton
                sx={{ color: "white", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00C2FF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                <TwitterIcon />
              </IconButton>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: '"Comic Sans MS", cursive, sans-serif',
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#00C2FF",
                    color: "white",
                  },
                }}
              >
                CONNECT WALLET
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      )}

      {/* Mobile Header with Menu Icon */}
      {isMobile && (
        <AppBar
          position="static"
          sx={{
            backgroundColor: "black",
            boxShadow: "none",
            zIndex: 1,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 20px",
              bgcolor: "#000",
            }}
          >
            {/* Logo and Label */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={dolphin}
                alt="Belugana Logo"
                sx={{
                  height: "40px",
                  marginRight: "10px",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: '"Comic Sans MS", cursive, sans-serif',
                }}
              >
                BELUGANA
              </Typography>
            </Box>

            {/* Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Side Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          paddingTop: { xs: "20px", md: "30px" },
          paddingBottom: { xs: "30px", md: "50px" },
          paddingLeft: { xs: "15px", md: "50px" },
          paddingRight: { xs: "15px", md: "50px" },
          display: "flex",
          minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 84px)" },
        }}
      >
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {/* Left Side Content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              position: "relative",
              zIndex: 2,
              marginBottom: { xs: "30px", md: 0 },
              mt: 10,
            }}
          >
            {/* Coming Soon Button */}
            <Box
              sx={{
                backgroundColor: "rgba(59, 89, 152, 0.7)",
                borderRadius: "10px",
                padding: "8px 20px",
                marginBottom: "15px",
                display: "inline-block",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "16px", md: "18px" },
                  fontFamily: '"Comic Sans MS", cursive, sans-serif',
                }}
              >
                COMING SOON
              </Typography>
            </Box>

            {/* SolidProof Badge */}
            <Box
              sx={{
                backgroundColor: "rgba(59, 89, 152, 0.7)",
                borderRadius: "10px",
                padding: "8px 20px",
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                marginBottom: "30px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "16px", md: "18px" },
                  fontFamily: '"Arial", sans-serif',
                }}
              >
                SOLID<span style={{ fontWeight: "normal" }}>Proof</span>
              </Typography>
            </Box>

            {/* Beluga Whale Image - Center positioned */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                position: { xs: "static", md: "absolute" },
                top: "50%",
                left: "50%",
                transform: { xs: "none", md: "translate(-50%, -40%)" },
                zIndex: 2,
              }}
            >
              <Box
                component="img"
                src={dolphin} // Replace with actual dolphin image URL
                alt="Beluga Whale"
                sx={{
                  maxWidth: { xs: "60%", sm: "50%", md: "70%" },
                  height: "auto",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Presale Card */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              zIndex: 3,
              mt: 10,
            }}
          >
            <Presale />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
