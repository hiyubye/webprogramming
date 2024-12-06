const express = require("express");
const app = express();

app.use(function (req, res, next) {
  const userAgent = req.header("user-Agent");
  const paramName = req.query.name;
  const paramId = req.query.id;

  res.status(200).send(`<h1>Welcome !</h1><hr>
    <p>User-Agent : ${userAgent}</p>
    <p>ParamName : ${paramName}</p>
    <p>ParamName : ${paramId}</p>
    `);
});

app.listen(3000);
