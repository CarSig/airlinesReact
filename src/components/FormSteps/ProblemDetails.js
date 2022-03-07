import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

import InputAdornment from "@mui/material/InputAdornment";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

// <pre>checked in on time : {values.checkedInOnTime}</pre>
// <pre>replacement flight : {values.replacementFlightOffered}</pre>

const ProblemDetails = ({ values, handleChange, formErrors, classes }) => {
  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom color="primary" align="center">
        Problem Details
      </Typography>
      {(values.problemChoice === "cancellation" || values.problemChoice === "delay") && (
        <div>
          <InputLabel id="demo-simple-select-label">What was reason for {values.problemChoice}</InputLabel>
          <Select
            sx={classes.input}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="Other/Unknown"
            label="Age"
            fullWidth
            onChange={handleChange("reason")}
          >
            <MenuItem value="Other/Unknown">Other/Unknown</MenuItem>
            <MenuItem value="Technical Problems">Technical Problems</MenuItem>
            <MenuItem value="weather">Weather</MenuItem>
            <MenuItem value="strike">Strike</MenuItem>
            <MenuItem value="medical">Medical Emergency</MenuItem>
            <MenuItem value="terrorism">Terorrism</MenuItem>
          </Select>
        </div>
      )}
      {values.problemChoice === "cancellation" && (
        <TextField label="Here you can enter additional information (optional)." variant="outlined" fullWidth multiline rows={4} sx={classes.input}></TextField>
      )}
      <br />

      {values.problemChoice === "cancellation" && (
        <FormControl>
          <FormLabel>When did you learn about it?</FormLabel>
          <RadioGroup sx={classes.input} onChange={handleChange("cancelledWeeksBefore")} value={values.cancelledWeeksBefore}>
            <FormControlLabel control={<Radio />} value={1} label="Maximum 1 week before"></FormControlLabel>
            <FormControlLabel control={<Radio />} value={2} label="Maximum 2 weeks before"></FormControlLabel>
            <FormControlLabel control={<Radio />} value={3} label="More than 2 weeks before"></FormControlLabel>
          </RadioGroup>
          <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
            {formErrors.cancelledWeeksBefore}
          </Typography>
        </FormControl>
      )}

      <br />
      <div></div>
      {values.problemChoice === "cancellation" && (values.cancelledWeeksBefore === "1" || values.cancelledWeeksBefore === "2") && (
        <div>
          <FormControl>
            <FormLabel>Were you offered a replacement flight?</FormLabel>
            <RadioGroup sx={classes.input} onChange={handleChange("replacementFlightOffered")} value={values.replacementFlightOffered}>
              <FormControlLabel control={<Radio />} value={true} label="Yes"></FormControlLabel>
              <FormControlLabel control={<Radio />} value={false} label="No"></FormControlLabel>
            </RadioGroup>
          </FormControl>
          <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
            {formErrors.replacementFlightOffered}
          </Typography>
        </div>
      )}
      {values.problemChoice === "cancellation" && values.replacementFlightOffered === "true" && values.cancelledWeeksBefore !== "3" && (
        <FormControl>
          <TextField
            label="Departure Time"
            type="datetime-local"
            variant="outlined"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightTakeoffIcon />
                </InputAdornment>
              ),
            }}
            sx={classes.input}
            onChange={handleChange("realDepartureTime")}
            value={values.realDepartureTime}
            error={!!formErrors.realDepartureTime}
          ></TextField>
          <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
            {formErrors.realDepartureTime}
          </Typography>
        </FormControl>
      )}
      {((values.problemChoice === "cancellation" && values.replacementFlightOffered === "true" && values.cancelledWeeksBefore !== "3") ||
        values.problemChoice === "delay") && (
        <FormControl>
          <TextField
            label="New arrival time"
            type="datetime-local"
            variant="outlined"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightLandIcon />
                </InputAdornment>
              ),
            }}
            sx={classes.input}
            onChange={handleChange("realArrivalTime")}
            value={values.realArrivalTime}
            error={!!formErrors.realDepartureTime}
          ></TextField>
          <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
            {formErrors.realDepartureTime}
          </Typography>
        </FormControl>
      )}
      <br />

      {values.problemChoice === "denied" && (
        <FormControl>
          <FormLabel>Were you on time at the check-in desk and at the gate/boarding gate?</FormLabel>
          <RadioGroup sx={classes.input} onChange={handleChange("checkedInOnTime")} value={values.checkedInOnTime}>
            <FormControlLabel control={<Radio />} value="yes" label="Yes"></FormControlLabel>
            <FormControlLabel control={<Radio />} value="no" label="No"></FormControlLabel>
          </RadioGroup>
          <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
            {formErrors.checkedInOnTime}
          </Typography>
        </FormControl>
      )}
      <br />
    </div>
  );
};

export default ProblemDetails;
