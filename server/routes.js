const client = require("../db/index.js");

module.exports = {
  sectorNames: (req, res) => {
    client
      .query("select distinct sector from us_historic_emissions")
      .then((r) => {
        let data = [];
        r.rows.forEach((item) => {
          data.push(item.sector);
        });
        res.status(200).send(data);
      })
      .catch((err) => console.error(err.stack));
  },
  gasNames: (req, res) => {
    client
      .query("select distinct gas from us_historic_emissions")
      .then((r) => {
        let data = [];
        r.rows.forEach((item) => {
          data.push(item.gas);
        });
        res.status(200).send(data);
      })
      .catch((err) => console.error(err.stack));
  },
  year: (req, res) => {
    let year = req.query.year;
    client
      .query(`select "${year}", gas, unit, sector from us_historic_emissions`)
      .then((r) => {
        res.json(r.rows);
      })
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(500);
      });
  },
  sector: (req, res) => {
    let sector = req.query.sector;
    client
      .query(
        `select * from us_historic_emissions where sector = '${req.query.sector}'`
      )
      .then((r) => {
        res.json(r.rows);
      })
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(500);
      });
  },
  gas: (req, res) => {
    client
      .query(
        `select * from us_historic_emissions where gas = '${req.query.gas}'`
      )
      .then((r) => {
        res.json(r.rows);
      })
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(500);
      });
  },
};
