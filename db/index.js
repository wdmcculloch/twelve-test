const clientConfig = require("../config/config.js");
const { Client } = require("pg");

const client = new Client(clientConfig);

client
  .connect()
  .then((res) => console.log("connected to emissions db"))
  .catch((err) => console.error("connection error", err.stack));

module.exports = client;
