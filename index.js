const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const session=require('express-session');


mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Yash",
  database: "test",
});

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");


app.listen(3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'secret'}))

app.get("/", function (req, res) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    port:3307
  });
  
  con.query("SELECT * FROM products", (err, result) => {
    res.render("pages/index", { result: result });
  });
});
