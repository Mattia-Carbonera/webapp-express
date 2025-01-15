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
    FROM movies
    INNER JOIN reviews
    ON movies.id = reviews.movie_id
    WHERE movie_id = ?`;

  connection.query(sqlMovie, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    if (!results.length)
      return res.status(404).json({ error: "Post not found" });
    res.json(createMoviesImagePath(results));
  });
}
// * STORE
function store(req, res) {
  const id = req.params.id;
  // CODE
  sql = `INSERT INTO movies.reviews (movie_id, name, vote, text) VALUES (?, 'Name', '4', 'Text')`;

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json({
      code: 200,
      status: "Review created",
    });
  });
}

// * IMAGE PATH GENERATOR
const createMoviesImagePath = (movies) => {
  return movies.map((movie) => ({
    ...movie,
    image: `http://${app_host}:${app_port}/${movie.image}`,
  }));
};

module.exports = { index, show, store };
