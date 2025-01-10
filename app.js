// * INIZIALIZZO EXPRESS
const express = require("express");
const app = express();

const host = "localhost";
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

// * RICHIEDO I MIDDLEWARE
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

// * IMPORTO IL ROUTER
const moviesRouter = require("./routers/movieRouter");

// * ROTTE
app.use("/db", moviesRouter);

// * GESTICO I MIDDLWARE DEGLI ERRORI
app.use(errorHandler);
app.use(notFound);

// * METTO L'APP IN ASCOLTO
app.listen(3000, () => {
  console.log(`app in ascolto a http://${host}:${port}`);
});
