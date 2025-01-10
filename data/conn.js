const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "movies",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected whit MySQL");
});

module.exports = connection;
