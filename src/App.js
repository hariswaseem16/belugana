import { Box } from "@mui/material";
import React from "react";
import Home from "./Components/Home";
import Belunomics from "./Components/Belunomics";
import Claim from "./Components/Claim";
import Footer from "./Components/Footer";
import Roadmap from "./Components/Roadmap";
import Marquee from "./Marquee";

const App = () => {
  return (
    <Box>
      <Home />
      <Marquee />
      <Belunomics />
      <Roadmap />
      <Claim />
      <Footer />
    </Box>
  );
};

export default App;
