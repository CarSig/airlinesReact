const valuesData = {
  a1Lat: "",
  a1Lon: "",
  a1EU: "",
  a2Lat: "",
  a2Lon: "",
  a2EU: "",
  additionalInfo: "",
  airlineName: "",
  airlineContacted: "",
  airlinePayoutGiven: 0,
  airlinePayoutAmount: "",
  arrivalAirport: "",
  arrivalAirportCountry: "",
  arrivalTime: "",
  checkedInOnTime: "",
  cancelledWeeksBefore: "",

  departureAirport: "",
  departureAirportCountry: "",
  departureTime: "",
  flightNumber: "",

  personAddress: "",
  personCity: "",
  personEmail: "",
  personLastName: "",
  personName: "",
  personPhone: "",
  personPostcode: "",
  problemChoice: "",
  reason: "",
  replacementFlightOffered: "",
  realArrivalTime: "",
  realDepartureTime: "",
  isAirlineEU: "",
  howManyTravellers: 1,
  claimDeniedExplanation: "",
  compensationAmount: 0,
  euAirlines: [
    { name: "Austrian Airlines", iata: "OS", icao: "AUA", country: "Austria" },
    { name: "easyJet Europe", iata: "EC", icao: "EJU", country: "Austria" },
    { name: "easyJet Europe", iata: "E2", icao: "EWE", country: "Austria" },
    { name: "People's", iata: "PE", icao: "PEV", country: "Austria" },
    { name: "Air Belgium", iata: "KF", icao: "ABB", country: "Belgium" },
    { name: "Brussels Airlines", iata: "SN", icao: "BEL", country: "Belgium" },
    { name: "TUIfly Belgium", iata: "TB", icao: "JAF", country: "Belgium" },
    { name: "Bulgaria Air", iata: "FB", icao: "LZB", country: "Bulgaria" },
    { name: "Croatia Airlines", iata: "OU", icao: "CTN", country: "Croatia" },
    { name: "Cyprus Airways", iata: "CY", icao: "CYP", country: "Cyprus" },
    { name: "Tus Airways", iata: "U8", icao: "CYF", country: "Cyprus" },
    {
      name: "Czech Airlines",
      iata: "OK",
      icao: "CSA",
      country: "Czech Republic",
    },
    { name: "Smartwings", iata: "QS", icao: "TVS", country: "Czech Republic" },
    { name: "Alsie Express", iata: "6I", icao: "MMD", country: "Denmark" },
    {
      name: "Danish Air Transport",
      iata: "DX",
      icao: "DTR",
      country: "Denmark",
    },
    {
      name: "Scandinavian Airlines",
      iata: "SK",
      icao: "SAS",
      country: "Denmark",
    },
    {
      name: "Sun-Air of Scandinavia",
      iata: "EZ",
      icao: "SUS",
      country: "Denmark",
    },
    { name: "Nordica", iata: "EE", icao: "EST", country: "Estonia" },
    { name: "Finnair", iata: "AY", icao: "FIN", country: "Finland" },
    {
      name: "Nordic Regional Airlines",
      iata: "N7",
      icao: "WBA",
      country: "Finland",
    },
    { name: "Air Corsica", iata: "XK", icao: "CCM", country: "France" },
    { name: "Air France", iata: "AF", icao: "AFR", country: "France" },
    {
      name: "Air Antilles Express",
      iata: "3S",
      icao: "GUY",
      country: "France",
    },
    { name: "Air Guyane Express", iata: "3S", icao: "GUY", country: "France" },
    { name: "Chalair Aviation", iata: "CE", icao: "CLG", country: "France" },
    { name: "Finist'air", iata: "", icao: "FTR", country: "France" },
    { name: "French Bee", iata: "BF", icao: "FBU", country: "France" },
    { name: "HOP!", iata: "A5", icao: "HOP", country: "France" },
    { name: "IGavion", iata: "TE", icao: "IGA", country: "France" },
    { name: "La Compagnie", iata: "B0", icao: "DJT", country: "France" },
    { name: "St-Barth Commuter", iata: "PV", icao: "SBU", country: "France" },
    { name: "Transavia France", iata: "TOTVF", icao: "France" },
    { name: "Twinjet", iata: "T7", icao: "TJT", country: "France" },
    { name: "Condor", iata: "DE", icao: "CFG", country: "Germany" },
    { name: "Eurowings", iata: "EW", icao: "EWG", country: "Germany" },
    {
      name: "FLN Frisia Luftverkehr",
      iata: "FRS",
      icao: "",
      country: "Germany",
    },
    { name: "Lübeck Air", iata: "6I", icao: "MMD", country: "Germany" },
    { name: "Lufthansa", iata: "LH", icao: "DLH", country: "Germany" },
    { name: "Lufthansa CityLine", iata: "CL", icao: "CLH", country: "Germany" },
    {
      name: "OFD Ostfriesischer-Flug-Dienst",
      iata: "",
      icao: "",
      country: "Germany",
    },
    {
      name: "TUI fly Deutschland",
      iata: "X3",
      icao: "HLX",
      country: "Germany",
    },
    { name: "Aegean Airlines", iata: "A3", icao: "AEE", country: "Greece" },
    { name: "Bluebird Airways", iata: "BZ", icao: "BBG", country: "Greece" },
    { name: "Ellinair", iata: "EL", icao: "ELB", country: "Greece" },
    { name: "Olympic Air", iata: "OA", icao: "OAL", country: "Greece" },
    { name: "Sky Express", iata: "GQ", icao: "SEH", country: "Greece" },
    { name: "Wizz Air", iata: "W6", icao: "WZZ", country: "Hungary" },
    { name: "Aer Arann Islands", iata: "", icao: "", country: "Ireland" },
    { name: "Aer Lingus", iata: "EI", icao: "EIN", country: "Ireland" },
    { name: "CityJet", iata: "WX", icao: "BCY", country: "Ireland" },
    { name: "Ryanair", iata: "FR", icao: "RYR", country: "Ireland" },
    {
      name: "Scandinavian Airlines Ireland",
      iata: "",
      icao: "SZS",
      country: "Ireland",
    },
    { name: "Air Dolomiti", iata: "EN", icao: "DLA", country: "Italy" },
    { name: "ITA Airways", iata: "AZ", icao: "ITY", country: "Italy" },
    { name: "Neos", iata: "NO", icao: "NOS", country: "Italy" },
    { name: "Air Baltic", iata: "BT", icao: "BTI", country: "Latvia" },
    {
      name: "Avion Express NVD",
      iata: "X9",
      icao: "NVD",
      country: "Lithuania",
    },
    { name: "DAT LT", iata: "R6", icao: "DNU", country: "Lithuania" },
    { name: "GetJet Airlines", iata: "GW", icao: "GJT", country: "Lithuania" },
    { name: "Grand Cru Airlines", icao: "GCA", country: "Lithuania" },
    { name: "Heston Airlines", iata: "HN", icao: "HST", country: "Lithuania" },
    { name: "Luxair", iata: "LG", icao: "LGL", country: "Luxemburg" },
    { name: "Air Malta", iata: "KM", icao: "AMC", country: "Malta" },
    { name: "Malta Air", iata: "AL", icao: "MAY", country: "Malta" },
    { name: "AIS Airlines", iata: "IS", icao: "PNX", country: "Netherlands" },
    {
      name: "Corendon Dutch Airlines",
      iata: "CD",
      icao: "CND",
      country: "Netherlands",
    },
    { name: "KLM KL", iata: "", icao: "KLM", country: "Netherlands" },
    { name: "KLM Cityhopper", iata: "WA", icao: "KL", country: "Netherlands" },
    { name: "Transavia", iata: "HV", icao: "TRA", country: "Netherlands" },
    {
      name: "TUI Airlines Netherlands",
      iata: "OR",
      icao: "TFL",
      country: "Netherlands",
    },
    { name: "LOT Polish Airlines", iata: "LO", icao: "LOT", country: "Poland" },
    { name: "Azores Airlines", iata: "RZO", icao: "S4", country: "Portugal" },
    { name: "Orbest", iata: "OBS", icao: "6O", country: "Portugal" },
    { name: "SATA Air Açores", iata: "SAT", icao: "SP", country: "Portugal" },
    {
      name: "Sevenair Air Services",
      iata: "RVP",
      icao: "WV",
      country: "Portugal",
    },
    { name: "TAP Express", iata: "PGA", icao: "NI", country: "Portugal" },
    { name: "TAP Air Portugal", iata: "TAP", icao: "TP", country: "Portugal" },
    { name: "World2fly Portugal", icao: "3P", country: "Portugal" },
    { name: "Animawings", iata: "", icao: "AWG", country: "Romania" },
    { name: "Blue Air", iata: "0B", icao: "BLA", country: "Romania" },
    { name: "TAROM", iata: "RO", icao: "ROT", country: "Romania" },
    { name: "Aero Slovakia", iata: "", icao: "ASO", country: "Slovakia" },
    { name: "AirExplore", iata: "ED", icao: "AXE", country: "Slovakia" },
    { name: "Go2Sky", iata: "6G", icao: "RLX", country: "Slovakia" },
    {
      name: "Smartwings Slovakia",
      iata: "6D",
      icao: "TVQ",
      country: "Slovakia",
    },
    { name: "Aero4M", iata: "H4", icao: "AEH", country: "Slovenia" },
    { name: "Lipican Aer", icao: "LIP", country: "Slovenia" },
    { name: "Air Europa Express", iata: "UX", icao: "OVA", country: "Spain" },
    { name: "Air Europa", iata: "UX", icao: "AEA", country: "Spain" },
    { name: "Air Nostrum", iata: "YW", icao: "ANE", country: "Spain" },
    { name: "AlbaStar", iata: "JQ", icao: "LAV", country: "Spain" },
    { name: "Binter Canarias", iata: "NT", icao: "IBB", country: "Spain" },
    { name: "Canaryfly", iata: "PM", icao: "CNF", country: "Spain" },
    { name: "Iberia", iata: "IB", icao: "IBE", country: "Spain" },
    { name: "Iberia Express", iata: "I2", icao: "IBS", country: "Spain" },
    { name: "LEVEL", iata: "IB", icao: "IBE", country: "Spain" },
    {
      name: "Plus Ultra Líneas Aéreas",
      iata: "PU",
      icao: "PUE",
      country: "Spain",
    },
    { name: "Volotea", iata: "V7", icao: "VOE", country: "Spain" },
    { name: "Vueling", iata: "VY", icao: "VLG", country: "Spain" },
    { name: "Wamos Air", iata: "EB", icao: "PLM", country: "Spain" },
    { name: "World2fly", iata: "2W", icao: "WFL", country: "Spain" },
    { name: "Air Leap", iata: "FL", icao: "LPA", country: "Sweden" },
    { name: "Braathens Regional AirwaysDC", icao: "BRX", country: "Sweden" },
    {
      name: "Braathens Regional Aviation",
      iata: "TF",
      icao: "SCW",
      country: "Sweden",
    },
    { name: "Direktflyg", iata: "HS", icao: "HSV", country: "Sweden" },
    { name: "Jonair", iata: "JON", icao: "", country: "Sweden" },
    {
      name: "Norwegian Air Sweden",
      iata: "DY",
      icao: "NAX",
      country: "Sweden",
    },
    {
      name: "Norwegian Air Sweden",
      iata: "SK",
      icao: "SAS",
      country: "Sweden",
    },
  ],

  euStates: [
    { country: "Austria", countryCode: "AT" },
    { country: "Belgium", countryCode: "BE" },
    { country: "Bulgaria", countryCode: "BG" },
    { country: "Croatia", countryCode: "HR" },
    { country: "Cyprus", countryCode: "CY" },
    { country: "Czech Republic", countryCode: "CZ" },
    { country: "Denmark", countryCode: "DK" },
    { country: "Estonia", countryCode: "EE" },
    { country: "Finland", countryCode: "FI" },
    { country: "France", countryCode: "FR" },
    { country: "Germany", countryCode: "DE" },
    { country: "Greece", countryCode: "EL" },
    { country: "Hungary", countryCode: "HU" },
    { country: "Ireland", countryCode: "IE" },
    { country: "Italy", countryCode: "IT" },
    { country: "Latvia", countryCode: "LV" },
    { country: "Lithuania", countryCode: "LT" },
    { country: "Luxembourg", countryCode: "LU" },
    { country: "Malta", countryCode: "MT" },
    { country: "Netherlands", countryCode: "NL" },
    { country: "Poland", countryCode: "PL" },
    { country: "Portugal", countryCode: "PT" },
    { country: "Romania", countryCode: "RO" },
    { country: "Slovakia", countryCode: "SK" },
    { country: "Slovenia", countryCode: "SI" },
    { country: "Spain", countryCode: "ES" },
    { country: "Sweden", countryCode: "SE" },
  ],
  flightDistance: 0,
  getFlightDistance() {
    const lat1 = +this.a1Lat;
    const lon1 = +this.a1Lon;
    const lat2 = +this.a2Lat;
    const lon2 = +this.a2Lon;

    if (!this.a1Lat || !this.a2Lat) {
      return;
    } else {
      const degreesToRadians = (degrees) => degrees * (Math.PI / 180);
      const earthRadius = 6488; //6371 --- > TODO: not completely correct formula, changed radius to be closer to real results
      const dLat = degreesToRadians(lat2 - lat1);
      const dLon = degreesToRadians(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      this.flightDistance = Math.floor(earthRadius * b);
      return Math.floor(earthRadius * b); // Distance in km
    }
  },

  getAirline() {
    const iataCode = this.flightNumber.slice(0, 2).toUpperCase();
    const foundAirline = this.euAirlines.find((airline) => airline.iata === iataCode);

    return foundAirline ? foundAirline.name : null;
  },

  arrivalDelay() {
    const real = new Date(this.realArrivalTime).getTime();
    const scheduled = new Date(this.arrivalTime).getTime();

    return Math.abs(scheduled - real) / 3600000;
  },
  depEarly: 0,
  departureEarlier() {
    const real = new Date(this.realDepartureTime).getTime();
    const scheduled = new Date(this.departureTime).getTime();
    return Math.abs(real - scheduled) / 3600000;
  },

  getClaimAgeDays() {
    const scheduledDeparture = new Date(this.departureTime).getTime();
    const today = Date.now();
    const claimAgeDays = Math.floor((today - scheduledDeparture) / 86400000);
    return claimAgeDays;
  },
  getCompensationPerDistance() {
    const flightDistance = this.getFlightDistance();
    const compensationPerDistance = flightDistance >= 3500 ? 600 : flightDistance >= 1500 ? 400 : 200;
    return compensationPerDistance;
  },

  isEuClaim() {
    const isEuClaim = this.a1EU || (this.a2EU && this.isAirlineEU) ? true : false;

    return isEuClaim;
  },
  isClaimFresh() {
    let claimAgeDays = this.getClaimAgeDays();
    return claimAgeDays <= 1095;
  },

  getLateFlightStatus() {
    const flightDistance = this.getFlightDistance();
    const arrivalDelay = this.arrivalDelay();

    const shortFlight = flightDistance <= 1500 && arrivalDelay > 2;
    const mediumFlight = flightDistance > 1500 && flightDistance < 3500 && arrivalDelay > 3;
    const longFlight = flightDistance >= 3500 && arrivalDelay > 4;

    const getStatus = shortFlight || mediumFlight || longFlight; // look if boolean will work after refactor, was bugged before
    return getStatus;
  },

  doesCancellationApply() {
    const oneWeek = this.cancelledWeeksBefore === "1" && (this.departureEarlier() >= 1 || this.arrivalDelay() >= 2);
    const twoWeeks = this.cancelledWeeksBefore === "2" && (this.departureEarlier() >= 2 || this.arrivalDelay() >= 4);

    const doesCancellationApply = this.cancelledWeeksBefore !== "3" && (oneWeek || twoWeeks || this.replacementFlightOffered === "false") ? true : false;

    return doesCancellationApply;
  },

  getCompensationBasic() {
    const problemType = this.problemChoice;

    const isCancelValid = problemType === "cancellation" && this.doesCancellationApply();
    const isDelayValid = problemType === "delay" && this.getLateFlightStatus();
    const isDeniedValid = problemType === "denied" && this.checkedInOnTime === "yes";
    if (isCancelValid || isDelayValid || isDeniedValid) {
      return this.getCompensationPerDistance();
    } else {
      return 0;
    }
  },
  toMinutes(number) {
    return Math.floor(number * 60);
  },
  isClaimValid() {
    console.log("MONTH", this.cancelledWeeksBefore, this.cancelledWeeksBefore === "3");
    if (this.problemChoice !== "") {
      if (this.getFlightDistance() < 1500 && this.arrivalDelay() < 2 && this.problemChoice === "delay") {
        return `In case of flight up to 1500 km distance allowed delay in arrival is 120 minutes. Your flight was ${this.toMinutes(
          this.arrivalDelay()
        )} minutes late`;
      } else if (this.getFlightDistance() >= 1500 && this.getFlightDistance() < 3500 && this.arrivalDelay() < 3 && this.problemChoice === "delay") {
        return `In case of flight between 1500 and 3500 km distance allowed delay in arrival is 180 minutes. Your flight was ${this.toMinutes(
          this.arrivalDelay()
        )} minutes late`;
      } else if (this.getFlightDistance() >= 3500 && this.arrivalDelay() < 4 && this.problemChoice === "delay") {
        return `  In case of flights longer then  3500 km distance allowed delay in arrival is 240 minutes. Your flight was ${this.toMinutes(
          this.arrivalDelay()
        )} minutes late`;
      } else if (this.cancelledWeeksBefore === "1" && (this.departureEarlier() < 2 || this.arrivalDelay() < 4)) {
        return `In case of cancellation maximum 1 week before, if the alternative flight provided departs less than 120 min  earlier and arrives less than 240 min later airline is not required to offer compensation. Your alternative flight departed ${this.toMinutes(
          this.departureEarlier()
        )} and arrived ${this.toMinutes(this.arrivalDelay())} later. `;
      } else if (this.cancelledWeeksBefore === "2" && (this.departureEarlier() < 1 || this.arrivalDelay() < 2)) {
        return `In case of cancellation maximum 2 week before, if the alternative flight provided departs less than 60 min earlier and arrives less  than 120 min later airline is not required to offer compensation.Your alternative flight departed ${this.toMinutes(
          this.departureEarlier()
        )} min earlier and arrived ${this.toMinutes(this.arrivalDelay())}  min later `;
      } else if (this.cancelledWeeksBefore === "3") {
        return "There is no compensation for the flights cancelled more then 2 weeks in advance";
      } else if (this.checkedInOnTime === "no") {
        return "no compensation in case of late check in";
      }
    }
    if (!this.isEuClaim()) {
      return "Regulation (EC) 261/2004 covers only flights that fulfill at least one of following criteria:\
      1.Departure airport is located in EU member state \
      2.Arrival airport is located in EU member state AND airline has headquarters in one of EU member states ";
    } else if (!this.isClaimFresh()) {
      return "Maximum allowed time to make claim is 3 years";
    } else if (this.reason === "weather") {
      return "Bad weather is considered Extenuating Circumstance and airline is not required to offer compensation";
    } else if (this.reason === "strike") {
      return "Strike is considered Extenuating Circumstance and airline is not required to offer compensation";
    } else if (this.reason === "medical") {
      return "Medical emergecy is considered Extenuating Circumstance and airline is not required to offer compensation";
    } else if (this.reason === "terrorism") {
      return "Act of terrorism  is considered Extenuating Circumstance and airline is not required to offer compensation";
    } else {
      return "";
    }
  },
};

module.exports = { valuesData };
