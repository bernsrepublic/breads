/*// DEPENDENCIES
const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!");
});

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});*/

const express = require("express");
const breads = express.Router();

// INDEX
breads.get("/", (req, res) => {
  res.send("This is the index at /breads");
});

module.exports = breads;

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads");
});

// Breads
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);
