const express = require("express");
const router = express.Router();

// * COLLEGO IL DB
const connection = require("../data/conn");

router.use("/", (req, res) => {
  const sqlMovie = "SELECT * FROM movies.movies";

  connection.query(sqlMovie, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(results);
  });
});

module.exports = router;
