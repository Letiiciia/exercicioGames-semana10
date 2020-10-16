const express = require("express");
const router = express.Router(); // instanciar
const controller = require("../controller/gamesController");
const cors = require("cors");


router.put("/games/:id",cors(), controller.atualizaNamePorId);



module.exports = router