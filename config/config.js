//deployed connection config
const clientConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
};

// const serverConfig = {
//   url: "",
// };

// local connection config
// const clientConfig = {
//   host: "localhost",
//   database: "emissions",
//   port: ,
// };

// const serverConfig = {
//   url: "http://localhost:3000",
// };

module.exports = clientConfig;
