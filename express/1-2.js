const express = require("express");
const app = express();

app.get("/home", function (req, res) {
  res.send(" Home route");
});

app.get("/about", function (req, res) {
  res.send(" about route");
});

app.get("/contact", function (req, res) {
  res.send(" contact route");
});

app.get("/", function (req, res) {
  res.send("root route");
});

app.use("/*", (req, res) => {
  res.status(404).send("NOT FOUND!!!!!!!!");
});
app.listen(4001);
