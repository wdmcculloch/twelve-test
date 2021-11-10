const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const client = require("../db/index.js");
const {
  getAllSectorNames,
  getAllGasNames,
  getDataForOneYear,
  getDataForOneSector,
  getDataForOneGas,
  getGraphDataAllParams,
} = require("./routes.js");

app.use(cors());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/sectorNames", getAllSectorNames);
app.get("/gasNames", getAllGasNames);
app.get("/year", getDataForOneYear);
app.get("/sector", getDataForOneSector);
app.get("/gas", getDataForOneGas);
app.get("/data", getGraphDataAllParams);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
