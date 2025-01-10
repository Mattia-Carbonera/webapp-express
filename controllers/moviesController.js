// * COLLEGO IL DB
const connection = require("../data/conn");

// * INDEX
function index(req, res) {
  const sqlMovies = "SELECT * FROM movies.movies";

  connection.query(sqlMovies, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(results);
  });
}

// * SHOW
function show(req, res) {
  const id = req.params.id;

  const sqlMovie = `
    SELECT *
    FROM movies.movies
    WHERE id = ?`;

  connection.query(sqlMovie, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (!results.length)
      return res.status(404).json({ error: "Post not found" });
    res.json(results);
  });
}

module.exports = { index, show };
