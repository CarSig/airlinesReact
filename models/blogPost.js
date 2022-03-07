const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
  a1Lat: Number,
  a1Lon: Number,
  a1EU: Boolean,
  a2Lat: Number,
  a2Lon: Number,
  a2EU: Boolean,
  additionalInfo: String,
  airlineName: String,
  airlineContacted: Boolean,
  airlinePayoutGiven: String,
  airlinePayoutAmount: Number,
  arrivalAirport: String,
  arrivalTime: String,
  checkedInOnTime: String,
  cancelledWeeksBefore: Number,
  departureAirport: String,
  departureTime: String,
  flightNumber: String,
  personAddress: String,
  personCity: String,
  personEmail: String,
  personLastName: String,
  personName: String,
  personPhone: String,
  personPostcode: Number,
  problemChoice: String,
  reason: String,
  replacementFlightOffered: String,
  realArrivalTime: String,
  realDepartureTime: String,
  isAirlineEU: String,
  howManyTravellers: Number,
  claimDeniedExplanation: String,
  compensationAmount: Number,
});

// Model
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;
