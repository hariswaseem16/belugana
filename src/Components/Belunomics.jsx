import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { seabg } from "../images";

const Belunomics = () => {
  // Token allocation data
  const tokenData = [
    {
      name: "PRESALE",
      value: 60,
      allocation: "60,000,000,000",
      color: "#6979F8",
      billion: "(60 BILLION)",
    },
    {
      name: "LIQUIDITY",
      value: 10,
      allocation: "10,000,000,000",
      color: "#A5E887",
      billion: "(10 BILLION)",
    },
    {
      name: "ECOSYSTEM",
      value: 10,
      allocation: "10,000,000,000",
      color: "#FFCF5C",
      billion: "(10 BILLION)",
    },
    {
      name: "MARKETING",
      value: 20,
      allocation: "20,000,000,000",
      color: "#FF6B6B",
      billion: "(20 BILLION)",
    },
  ];

  // Total supply
  const totalSupply = "100,000,000,000";

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        // width: "100%",
        padding: { xs: "40px 20px", md: "60px 40px" },
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${seabg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 50, 100, 0.5)",
            zIndex: 1,
          },
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: "white",
            fontWeight: "bold",
            marginBottom: "40px",
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            fontSize: { xs: "36px", md: "48px" },
          }}
        >
          BELUNOMICS
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "block" }, // Hide on extra-small screens, show on small and larger
          }}
        >
          {/* Total Supply */}
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              marginBottom: "30px",
              fontFamily: '"Comic Sans MS", cursive, sans-serif',
              fontSize: { xs: "24px", md: "32px" },
            }}
          >
            TOTAL SUPPLY : {totalSupply}
          </Typography>

          {/* Token Allocation Table */}
          <TableContainer
            component={Paper}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              marginBottom: "50px",
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "20px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                      fontFamily: '"Comic Sans MS", cursive, sans-serif',
                      width: "33%",
                    }}
                  >
                    CATEGORY
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "20px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                      fontFamily: '"Comic Sans MS", cursive, sans-serif',
                      width: "33%",
                    }}
                  >
                    PERCENTAGE
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "20px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                      fontFamily: '"Comic Sans MS", cursive, sans-serif',
                      width: "33%",
                    }}
                  >
                    ALLOCATION
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tokenData.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                      }}
                    >
                      {row.value}%
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                      }}
                    >
                      {row.allocation}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "18px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                      fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    }}
                  >
                    TOTAL
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "18px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                      fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    }}
                  >
                    100%
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "18px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                      fontFamily: '"Comic Sans MS", cursive, sans-serif',
                    }}
                  >
                    {totalSupply}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Chart and Legend */}
        <Grid container spacing={4}>
          {/* Donut Chart */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%", height: 300, position: "relative" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {tokenData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* PRESALE Text */}
              <Typography
                sx={{
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: '"Comic Sans MS", cursive, sans-serif',
                  textAlign: "center",
                }}
              >
                PRESALE
              </Typography>

              {/* Percentage Text (Dynamic) */}
              <Typography
                sx={{
                  position: "absolute",
                  top: "55%", // Adjusted to appear under PRESALE
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: '"Comic Sans MS", cursive, sans-serif',
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                {tokenData.reduce((acc, item) => acc + item.value, 0)}%
              </Typography>
            </Box>
          </Grid>

          {/* Legend */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {tokenData.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "rgba(0, 50, 100, 0.7)",
                    borderRadius: "10px",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: item.color,
                        marginRight: "15px",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      {item.value}%
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                        fontSize: "16px",
                      }}
                    >
                      {item.billion}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Belunomics;
