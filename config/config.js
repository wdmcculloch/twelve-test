const clientConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
};

//local connection config
// const clientConfig = {
//   host: "localhost",
//   database: "emissions",
//   port: "Update",
// };

module.exports = clientConfig;
