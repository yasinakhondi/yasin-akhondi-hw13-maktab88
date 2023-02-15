const express = require("express");
const app = express();

app.get("/root", function (req, res) {
  res.send("Hello world");
});

app.listen(5005);
