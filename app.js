const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setup middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Handle routers
app.get("/", (req, res) => {
  console.log('Welcome To our Redis Server');
});

const PORT = 6380;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
