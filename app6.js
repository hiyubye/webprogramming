const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.redirect("http://www.hansung.ac.kr");
});

app.listen(3000);
