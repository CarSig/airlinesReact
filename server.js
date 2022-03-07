// import npm packages

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

// database link

const MONGDB_URI =
  "mongodb+srv://lovro:fairintheair@fita.y5xxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//connection to database
mongoose.connect(MONGDB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//message to confirm connection to db has been made
mongoose.connection.on("connected", () => console.log("Mongoose is connected"));

//making all request as json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//HTTP request logger
app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
