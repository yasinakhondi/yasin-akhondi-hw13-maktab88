const express = require("express");
const path = require("path");
const app = express();

app.get("/page-1", function (req, res) {
  res.sendFile(path.join(__dirname, "page-1.html"));
});

app.get("/page-2", function (req, res) {
  res.sendFile(path.join(__dirname, "page-2.html"));
});

app.get("/page-3", function (req, res) {
  res.sendFile(path.join(__dirname, "page-3.html"));
});

app.get("/page-4", function (req, res) {
  res.sendFile(path.join(__dirname, "page-4.html"));
});

app.get("/page-5", function (req, res) {
  res.sendFile(path.join(__dirname, "page-5.html"));
});

app.listen(4000);
