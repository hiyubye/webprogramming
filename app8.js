const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const static = require("serve-static");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  const paramId = req.body.id || req.query.id;
  const paramPassword = req.body.password || req.query.password;

  res.status(200).send(
    `<h1>서버에서 응답한 결과</h1>
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param paramPassword : ${paramPassword}</p></div>`
  );
});

app.listen(4000);
