const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const { createClient } = require("redis");

const app = express();

// Create client
const client = createClient();
client
  .connect()
  .then(() => {
    console.log("Redis Server Connected...");
  })
  .catch((err) => {
    console.error("Redis Connection Error: ", err);
  });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setup middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Handle routers
app.get("/", async (req, res) => {
  const title = "Task List";
  try {
    const tasks = await client.lRange("tasks", 0, -1);
    res.render("index", {
      title: title,
      tasks: tasks,
    });
  } catch (err) {
    console.error("Error retrieving task: ", err);
    res.status(500).send("Server Error");
  }
});

const PORT = 6380;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
