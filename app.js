const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views/"));
app.use(bodyParser.urlencoded({ extended: true }));

let items = [];
app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("index", { date: day, newListItems: items });
});

app.post("/", function (req, res) {
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server running on port: 3000");
});
