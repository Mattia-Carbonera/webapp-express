function notFound(req, res, next) {
  res.status(404);
  res.json({
    status: "KO",
    error: "Film not found",
  });
}

module.exports = notFound;
