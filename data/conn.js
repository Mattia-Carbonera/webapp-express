const mysql = require("mysql2");

// * IMPORTO LE VARIABILI D'AMBIENTE
const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_PASSWORD = process.env.DB_PASSWORD;
const db_password = process.env.DB_DB;

const connection = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_PASSWORD,
  database: db_password,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected whit MySQL");
});

module.exports = connection;
