function errorHandler(err, req, res, next) {
  res.status(err.code ?? 500);
  res.json({
    status: "KO",
    error: err.message,
  });
}

module.exports = errorHandler;
