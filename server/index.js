const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const client = require("../db/index.js");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/sectorAll", (req, res) => {
  client
    .query("select distinct sector from test")
    .then((r) => {
      let data = [];
      r.rows.forEach((item) => {
        data.push(item.sector);
      });
      res.json(data);
    })
    .catch((err) => console.error(err.stack));
});
app.get("/gas", (req, res) => {
  client
    .query("select distinct gas from test")
    .then((r) => {
      let data = [];
      r.rows.forEach((item) => {
        data.push(item.gas);
      });
      res.json(data);
    })
    .catch((err) => console.error(err.stack));
});
app.get("/year", (req, res) => {
  let year = req.query.year;
  let sector = req.query.sector;
  console.log(sector);

  client
    .query(`select "${year}", gas, unit, sector from test`)
    .then((r) => {
      res.json(r.rows);
    })
    .catch((err) => {
      console.error(err.stack);
      res.sendStatus(500);
    });
});
app.get("/sector", (req, res) => {
  let gas = req.query.gas;
  let sector = req.query.sector;
  client
    .query(`select * from test where sector = '${req.query.sector}' and gas='${req.query.gas}'`)
    .then((r) => {
      res.json(r.rows[0]);
    })
    .catch((err) => {
      console.error(err.stack);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
