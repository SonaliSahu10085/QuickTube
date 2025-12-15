require('dotenv/config');
const express = require("express");
const path = require('path')
const app = express();



// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
