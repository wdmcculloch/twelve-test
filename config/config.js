//deployed connection config
const clientConfig = {
  connectionString: process.env.DATABASE_URL || "postgresql://localhost:5432/emissions",
  ssl: {
    rejectUnauthorized: false
  }
};

// local connection config
// const clientConfig = {
//   host: "localhost",
//   database: "emissions",
//   port: ,
// };

module.exports = clientConfig;
