require("dotenv").config();
const con = require(__dirname + "/config/database.js");
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  let day = date.getDate();
  let sql = `SELECT * FROM todos`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.render("index", { date: day, newListItems: result });
  });
});

app.post("/", function (req, res) {
  item = req.body.newItem;
  let sql = `INSERT INTO todos (item) VALUES ("${item}")`;
  if (item !== null) {
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("item inserted");
    });
  }
  res.redirect("/");
});

app.put("/", function (req, res) {
  itemid = req.body.id;
  itemchecked = req.body.checked;
  console.log(itemchecked);
  let sql = `UPDATE todos SET checked="${itemchecked}" WHERE id="${itemid}";`;
  console.log(sql);
  if (itemid !== null) {
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("item updated");
    });
  }
});

app.listen(process.env.APP_PORT, function () {
  console.log("Server running on port: " + process.env.APP_PORT);
});
