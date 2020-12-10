const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});

app.get("/", (req, res) => {
  const after = req.query["after"];

  const url = `https://api.covid19tracker.ca/reports/province/ab?after=${after}`;

  request(url).pipe(res);
});

app.listen(port);