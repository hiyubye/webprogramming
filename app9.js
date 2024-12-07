const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const router = express.Router();
router.route("/process/login").post(function (req, res) {
  console.log("/process/login 처리");

  const paramId = req.body.id || req.query.id;
  const paramPassword = req.body.password || req.query.password;

  res.status(200).send(
    `<h1>서버에서 응답한 결과</h1>
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param paramPassword : ${paramPassword}</p></div>`
  );
});
app.use("/", router);

app.listen(4000);
