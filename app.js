// * INIZIALIZZO EXPRESS
const express = require("express");
const app = express();

// * IMPORTO LE VARIABILI D'AMBIENTE
const app_port = process.env.APP_PORT;
const app_host = process.env.APP_HOST;

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
app.listen(app_port, () => {
  console.log(`app in ascolto a http://${app_host}:${app_port}`);
});
