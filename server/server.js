const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dbConfig = require("./conf/database.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Database Connected");
  })
  .catch(err => {
    console.log(err)
    console.log("Error, exiting");
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Ok, test"
  });
});

require("./app/routes/event.routes.js")(app);

const port = 4000;
app.listen(port, () => {
  console.log(`Server luistert op poort ${port}`);
});
