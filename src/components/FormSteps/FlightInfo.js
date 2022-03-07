import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import axios from "axios";

const url = "https://aerodatabox.p.rapidapi.com/airports/search/term";
const apiHost = "aerodatabox.p.rapidapi.com";

const FlightInfo = ({ values, handleChange, setValues, formErrors, classes }) => {
  const [fetchedDepartureAirport, setfetchedDepartureAirport] = useState([]);
  const [fetchedArrivalAirport, setfetchedArrivalAirport] = useState([]);
  const [isMyInputFocused, setIsMyInputFocused] = useState([false, false]);

  // TODO: next 2 hooks are almost identical, only they update different values. refactor later

  useEffect(() => {
    getData(values.arrivalAirport, setfetchedArrivalAirport);
    if (setfetchedArrivalAirport.data) {
      if (setfetchedArrivalAirport.data.items.length === 1) {
      }

      const airport = setfetchedArrivalAirport.data.items[0] || null;

      if (airport) {
        setValues({
          ...values,

          a2Lat: airport.location.lat,
          a2Lon: airport.location.lon,
          a2EU: values.euStates.some((state) => state.countryCode === airport.countryCode),
        });
      }
    }
  }, [values.arrivalAirport]);

  useEffect(() => {
    getData(values.departureAirport, setfetchedDepartureAirport);
    if (fetchedDepartureAirport.data) {
      if (fetchedDepartureAirport.data.items.length === 1) {
      }

      const airport = fetchedDepartureAirport.data.items[0] || null;

      if (airport) {
        setValues({
          ...values,

          a1Lat: airport.location.lat,
          a1Lon: airport.location.lon,
          a1EU: values.euStates.some((state) => state.countryCode === airport.countryCode),
        });
      }
    }
  }, [values.departureAirport]);

  useEffect(() => {
    if (values.flightNumber.length === 2) {
      setValues({
        ...values,
        isAirlineEU: !!values.getAirline(),
        airlineName: values.getAirline(),
      });
    }
  }, [values.flightNumber]);

  const updateDepartureAirport = (item) => {
    setValues({
      ...values,

      departureAirport: item.name,
      a1Lat: item.location.lat,
      a1Lon: item.location.lon,
      a1EU: values.euStates.some((state) => state.countryCode === item.countryCode),
    });
  };
  const updateArrivalAirport = (item) => {
    setValues({
      ...values,
      arrivalAirport: item.name,
      a2Lat: item.location.lat,
      a2Lon: item.location.lon,
      a2EU: values.euStates.some((state) => state.countryCode === item.countryCode),
    });
  };

  const getData = async (query, airportHook) => {
    var options = {
      method: "GET",
      url: url,
      params: { q: `${query}`, limit: "5" },
      headers: {
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": "!!!!!!!!!!!!!!!!!!!----Here comes api key----not sharing mine sry :)!!!!",
        "Access-Control-Allow-Origin": "*",
      },
    };
    if (query.length > 4) {
      const data = await axios.request(options);
      airportHook(await data);
    }
  };

  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom color="primary" align="center">
        FlightInfo
      </Typography>
      <TextField
        label="Flight Number"
        variant="outlined"
        fullWidth
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AirplaneTicketIcon />
            </InputAdornment>
          ),
        }}
        sx={classes.input}
        value={values.flightNumber}
        onChange={handleChange("flightNumber")}
        error={!!formErrors.flightNumber}
      ></TextField>

      <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
        {formErrors.flightNumber}
      </Typography>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div onFocus={() => setIsMyInputFocused([true, false])}>
        <TextField
          label="Departure Airport"
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
          value={values.departureAirport}
          onChange={handleChange("departureAirport")}
          error={!!formErrors.departureAirport}
        ></TextField>
        <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
          {formErrors.departureAirport}
        </Typography>

        {fetchedDepartureAirport.data && isMyInputFocused[0] && (
          <div className="fetched">
            <ul>
              {fetchedDepartureAirport.data.items.map((airport) => (
                <TextField
                  sx={{ width: "450px", marginLeft: "30px" }}
                  readOnly
                  value={`${airport.name}    ${airport.countryCode}`}
                  key={airport.iata}
                  style={{ listStyleType: "none" }}
                  onClick={(e) => {
                    updateDepartureAirport(airport);
                    setIsMyInputFocused([false, false]);
                  }}
                />
              ))}
            </ul>
            <br />
          </div>
        )}
      </div>
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
        value={values.departureTime}
        onChange={handleChange("departureTime")}
        error={!!formErrors.departureTime}
      ></TextField>
      <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
        {formErrors.departureTime}
      </Typography>
      <br></br>
      <br></br>
      <br></br>
      <div onFocus={() => setIsMyInputFocused([false, true])}>
        <TextField
          label="Arrival Airport"
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
          value={values.arrivalAirport}
          onChange={handleChange("arrivalAirport")}
          error={!!formErrors.arrivalAirport}
        ></TextField>
        <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
          {formErrors.arrivalAirport}
        </Typography>

        {fetchedArrivalAirport.data && isMyInputFocused[1] && (
          <div className="fetched">
            <ul>
              {fetchedArrivalAirport.data.items.map((airport) => (
                <TextField
                  sx={{ width: "450px", marginLeft: "38px" }}
                  readOnly
                  value={`${airport.name}    ${airport.countryCode}`}
                  key={airport.iata}
                  style={{ listStyleType: "none" }}
                  onClick={(e) => {
                    updateArrivalAirport(airport);
                    setIsMyInputFocused([false, false]);
                  }}
                />
              ))}
            </ul>
            <br></br>
          </div>
        )}
      </div>
      <TextField
        label="Arrival Time"
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
        value={values.arrivalTime}
        onChange={handleChange("arrivalTime")}
        error={!!formErrors.arrivalTime}
      ></TextField>
      <Typography sx={classes.errorMsg} variant="p" gutterBottom color="error" align="center">
        {formErrors.arrivalTime}
      </Typography>
    </div>
  );
};

export default FlightInfo;
