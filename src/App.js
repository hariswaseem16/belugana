import { Box } from "@mui/material";
import React from "react";
import Home from "./Components/Home";
import Belunomics from "./Components/Belunomics";
import Claim from "./Components/Claim";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Box>
      <Home />
      <Belunomics />
      <Claim />
      <Footer />
    </Box>
  );
};

export default App;
