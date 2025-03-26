import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import moment from "moment-timezone";
import { useState, useEffect } from "react";
import { StyledBox } from "./StyledBox";

// const useStyles = makeStyles((theme) => ({
//   gradientBackground: {
//     boxSizing: "border-box",
//     borderRadius: "8px",
//     px: { xs: 1, md: 0 },
//     display: "flex",
//   },
// }));

// const TextStyled = styled(Typography)(({ theme }) => ({
//   color: "#000",
//   fontFamily: "Ubuntu",
//   fontSize: "18px",
//   textAlign: "center",
//   [theme.breakpoints.down("md")]: {
//     fontSize: "17px",
//   },
// }));
// const TextStyleSmall = styled(Typography)(({ theme }) => ({
//   color: "rgb(255, 255, 255)",
//   fontFamily: "Poppins",
//   fontSize: "12px",
//   fontStyle: "normal",
//   fontWeight: 700,
//   lineHeight: "normal",
//   letterSpacing: "1.8px",
//   [theme.breakpoints.down("md")]: {
//     fontSize: "9px",
//   },
// }));
// const CountdownBox = styled(Box)(({ theme }) => ({
//   backgroundRepeat: "no-repeat",
//   overflow: "hidden",
//   verticalAlign: "middle",
//   backgroundSize: "cover",
//   boxSizing: "border-box",

//   [theme.breakpoints.up("md")]: {},
//   [theme.breakpoints.down("md")]: {},
// }));
const DownCounter = () => {
  const targetDate = moment.tz("2026-03-25T05:00:00", "Asia/Karachi");
  const [timeRemaining, setTimeRemaining] = useState(() => {
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  });

  useEffect(() => {
    function getTimeRemaining() {
      const now = moment();
      const duration = moment.duration(targetDate.diff(now));
      return {
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      };
    }

    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          textAlign: "center",
          mb: 5,
        }}
      >
        <StyledBox>
          <Typography
            variant="subtitle"
            sx={{ fontSize: { xs: "25px", sm: "36px" }, color: "#FFF" }}
          >
            {timeRemaining?.days}
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            DAYS
          </Typography>
        </StyledBox>
        <StyledBox>
          <Typography
            variant="subtitle"
            sx={{ fontSize: { xs: "25px", sm: "36px" }, color: "#FFF" }}
          >
            {timeRemaining?.hours < 10
              ? // eslint-disable-next-line no-unsafe-optional-chaining
                "0" + timeRemaining?.hours
              : timeRemaining?.hours}
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Hours
          </Typography>
        </StyledBox>
        <StyledBox>
          <Typography
            variant="subtitle"
            sx={{ fontSize: { xs: "25px", sm: "36px" }, color: "#FFF" }}
          >
            {timeRemaining?.minutes < 10
              ? // eslint-disable-next-line no-unsafe-optional-chaining
                "0" + timeRemaining?.minutes
              : timeRemaining?.minutes}
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Min
          </Typography>
        </StyledBox>
        <StyledBox>
          <Typography
            variant="subtitle"
            sx={{ fontSize: { xs: "25px", sm: "36px" }, color: "#FFF" }}
          >
            {timeRemaining?.seconds < 10
              ? // eslint-disable-next-line no-unsafe-optional-chaining
                "0" + timeRemaining?.seconds
              : timeRemaining?.seconds}
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Sec
          </Typography>
        </StyledBox>
      </Box>
    </>
  );
};

export default DownCounter;
