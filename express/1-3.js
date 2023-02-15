const express = require("express");
const users = require("./user-data.json");
const app = express();

app.get("/get-all-users", function (req, res) {
  res.send(users);
});

app.get("/admins", function (req, res) {
  res.send(users.filter((user) => user.role === "admin"));
});

app.listen(5004);
