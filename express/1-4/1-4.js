const express = require("express");
const path = require("path");
const app = express();

app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "1-4home.html"));
});

app.get("/picture", function (req, res) {
  res.sendFile(path.join(__dirname, "1-4picture.html"));
});
app.get("/picture1", function (req, res) {
  res.sendFile(path.join(__dirname, "picture.jpg"));
});

app.listen(5006);
