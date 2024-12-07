const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

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
