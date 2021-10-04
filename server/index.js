const express = require("express");
const bodyParser = require("body-parser");
const { sectorNames, gasNames, year, sector, gas } = require("./routes.js");
const app = express();
const client = require("../db/index.js");
const port = 3000;
console.log(year);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/sectorNames", sectorNames);
app.get("/gasNames", gasNames);
app.get("/year", year);
app.get("/sector", sector);
app.get("/gas", gas);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
