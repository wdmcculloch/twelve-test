const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;
const client = require("../db/index.js");
const {
  sectorNames,
  gasNames,
  year,
  sector,
  gas,
  data,
} = require("./routes.js");

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/sectorNames", sectorNames);
app.get("/gasNames", gasNames);
app.get("/year", year);
app.get("/sector", sector);
app.get("/gas", gas);
app.get("/data", data);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
