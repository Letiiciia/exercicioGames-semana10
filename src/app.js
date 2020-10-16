const express = require("express");
const app = express(); //instanciar o express no app
const router = require("./routes/gamesRouter");

app.use(express.json());
app.use("/", router);


module.exports = app

