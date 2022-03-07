import axios from "axios";

const url = "url goes here";
const apiHost = "api host goes here";
const apiKey = "api key goes here";

export const getData = async (query, airportHook) => {
  var options = {
    method: "GET",
    url: url,
    params: { q: `${query}`, limit: "5" },
    headers: {
      "x-rapidapi-host": apiHost,
      "x-rapidapi-key": apiKey,
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (query.length > 4) {
    const data = await axios.request(options);

    airportHook(data);
  }
};

function fetchAirportInfo(airportHook) {
  const data = getData();
  airportHook(data);
  const airport = data.data.items[0];
  if (data.data.items.length === 1 && (values.a1Lat === "" || (values.a1Lat === "x" && airport.name === values.departureAirport))) {
    setValues({
      ...values,

      a1Lat: airport.location.lat,
      a1Lon: airport.location.lon,
      a1EU: values.euStates.some((state) => state.countryCode === airport.countryCode),
    });
  }

  if (data.data.items.length === 1 && airport.name !== values.departureAirport && values.a1Lat !== "" && values.a1Lat !== "x") {
    setValues({
      ...values,

      a1Lat: "x",
      a1Lon: "x",
      a1EU: "x",
    });
  }

  // same code for arrival airport
  if (data.data.items.length === 1 && (values.a2Lat === "" || (values.a2Lat === "x" && airport.name === values.arrivalAirport))) {
    console.log(airport);
    setValues({
      ...values,

      a2Lat: airport.location.lat,
      a2Lon: airport.location.lon,
      a2EU: values.euStates.some((state) => state.countryCode === airport.countryCode),
    });
  }

  if (data.data.items.length === 1 && airport.name !== values.arrivalAirport && values.a2Lat !== "" && values.a2Lat !== "x") {
    setValues({
      ...values,

      a2Lat: "x",
      a2Lon: "x",
      a2EU: "x",
    });
  }
}

async function getData(query) {
  const options = {
    method: "GET",
    url: "limk goes here",
    params: { q: `${query}`, limit: "5" },
    headers: {
      "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
      "x-rapidapi-key": "api key goes here",
    },
  };

  if (query.length > 4) {
    //condtion to reduce number of api calls
    const data = await axios.request(options);

    return data;
  }
  return;
}
