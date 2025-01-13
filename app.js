// * INIZIALIZZO EXPRESS
const express = require("express");
const app = express();
const cors = require("cors");

// * IMPORTO LE VARIABILI D'AMBIENTE
const app_port = process.env.APP_PORT;
const app_host = process.env.APP_HOST;

// * CORS CONFIG
var corsOption = {
  origin: process.env.URL_FRONTEND_APP,
  optionSuccessStatus: 200,
};

app.use(express.static("public"));
app.use(express.json());
app.use(cors(corsOption));

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
