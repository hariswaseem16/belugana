import Box from "@mui/material/Box";
import React from "react";

export const StyledBox = (props) => {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row", md: "column", lg: "column" },
        alignItems: "center",
        gap: "0px 10px",
        border: " 5px solid #8599C6",
        borderRadius: "15px",
        bgcolor: "#1D65CE",
        // maxwidth: "120px",
        width: "20%",
        // border: "2px solid red",
        p: 1,
      }}
    >
      {props.children}{" "}
    </Box>
  );
};
