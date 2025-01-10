// * INIZIALIZZO EXPRESS
const express = require("express");
const app = express();
const port = 3000;

// * ROTTE
app.get("/", (req, res) => {
  res.json({
    status: "express OK",
  });
});

// * METTO L'APP IN ASCOLTO
app.listen(port, () => {
  console.log("app in ascolto nella porta 3000");
});
