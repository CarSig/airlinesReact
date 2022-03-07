import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//icons
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import CancelIcon from "@mui/icons-material/Cancel";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const ProblemChoice = ({ step, prevStep, nextStep, values, handleChange, setValues, getData, classes }) => {
  useEffect(() => {
    setValues({
      ...values,
      flightDistance: values.getFlightDistance(),
      claimAgeDays: values.getClaimAgeDays(),
    });
  }, []);

  const chooseProblem = (e) => {
    setValues({ ...values, problemChoice: e.target.value });

    nextStep();
  };

  const getDateString = (formInput) => {
    const date = new Date(formInput);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const addZeroIfOneDigit = (unit) => (unit < 10 ? "0" + unit : unit);

    return `${addZeroIfOneDigit(day)}-${addZeroIfOneDigit(month)}-${year} at ${addZeroIfOneDigit(hour)}:${addZeroIfOneDigit(minute)}`;
  };

  return (
    <div>
      <div>
        <Typography variant="body1" gutterBottom>
          Departure airport: {values.departureAirport}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Departure time:{getDateString(values.departureTime)}
        </Typography>
        <br></br>

        <Typography variant="body1" gutterBottom>
          Arrival airport:{values.arrivalAirport}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Arrival time:{getDateString(values.arrivalTime)}
        </Typography>

        <br></br>
        <Typography variant="body1" gutterBottom>
          Airline : {values.airlineName || "unknown or airline with no headquarters in EU"}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Flight Distance: {values.flightDistance} km
        </Typography>
      </div>

      <Button sx={classes.choice} variant="contained" color="primary" startIcon={<CancelIcon />} fullWidth value="cancellation" onClick={chooseProblem}>
        Cancellation
      </Button>
      <Button sx={classes.choice} variant="contained" color="primary" startIcon={<WatchLaterIcon />} fullWidth value="delay" onClick={chooseProblem}>
        Flight Delay
      </Button>
      <Button sx={classes.choice} variant="contained" color="primary" startIcon={<DoNotDisturbIcon />} fullWidth onClick={chooseProblem} value="denied">
        Denied Check-In
      </Button>
    </div>
  );
};

export default ProblemChoice;
