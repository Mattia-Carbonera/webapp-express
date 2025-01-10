// * COLLEGO IL DB
const connection = require("../data/conn");

// * IMPORTO LE VARIABILI D'AMBIENTE
const app_port = process.env.APP_PORT;
const app_host = process.env.APP_HOST;

// * INDEX
function index(req, res) {
  const sqlMovies = "SELECT * FROM movies.movies";

  connection.query(sqlMovies, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(createMoviesImagePath(results));
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
    res.json(createMoviesImagePath(results));
  });
}

const createMoviesImagePath = (movies) => {
  return movies.map((movie) => ({
    ...movie,
    image: `http://${app_host}:${app_port}/${movie.image}`,
  }));
};

module.exports = { index, show };
