const client = require("../db/index.js");

module.exports = {
  getAllSectorNames: (req, res) => {
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
  getAllGasNames: (req, res) => {
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
  getDataForOneYear: (req, res) => {
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
  getDataForOneSector: (req, res) => {
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
  getDataForOneGas: (req, res) => {
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
  getGraphDataAllParams: (req, res) => {
    let data = req.query;
    let range = data.range.filter(num => num >= Number(data.start) && num <= Number(data.end));
    range = `"${range.join('", "')}"`;
    client
      .query(
        `select ${range} from us_historic_emissions where gas = '${data.gas}' and sector = '${data.sector}'`
      )
      .then((r) => {
        let format = [];
        for(let key in r.rows[0]) {
          format.push({
            year: key,
            value: Number(r.rows[0][key])
          })
        }
        res.send(format)
      })
      .catch((err) => {
        console.error(err.stack);
        res.sendStatus(500);
      });
  },
};


// select "2018","2017","2016","2015", gas, sector from us_historic_emissions where sector = 'Agriculture' and gas = 'CH4';
