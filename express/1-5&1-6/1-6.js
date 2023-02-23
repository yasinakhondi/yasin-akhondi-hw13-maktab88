const express = require("express");
const path = require("path");
const app = express();

app.get("/:page", (req, res) => {
  console.log(req.params.page);
  res.sendFile(`${__dirname}/${req.params.page}.html`);
});

// app.get(
//   ["/page-1", "/page-2", "/page-3", "/page-4", "/page-5"].forEach((path) => {
//     try {
//       app.get(path, function (req, res) {
//         if (path == "/page-1") {
//           res.sendFile(`${__dirname}/page-1.html`);
//         }
//         if (path == "/page-2") {
//           res.sendFile(`${__dirname}/page-2.html`);
//         }
//         if (path == "/page-3") {
//           res.sendFile(`${__dirname}/page-3.html`);
//         }
//         if (path == "/page-4") {
//           res.sendFile(`${__dirname}/page-4.html`);
//         }
//         if (path == "/page-5") {
//           res.sendFile(`${__dirname}/page-5.html`);
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   })
// );
app.listen(7002);
