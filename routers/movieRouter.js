const express = require("express");
const router = express.Router();

// * IMPORTO I CONTROLLER
const moviesController = require("../controllers/moviesController");

// * COLLEGO IL DB
const connection = require("../data/conn");

router.use("/", moviesController.index);

module.exports = router;
