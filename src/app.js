const express = require("express");
const app = express(); //instanciar o express no app
const router = require("./routes/gamesRouter");

app.use(express.json()); //parciar o resultado em json, facilitar pra quando for enviar a resposta pro front end
app.use("/", router); // rota centralizadora


module.exports = app

