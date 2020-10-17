const express = require("express");
const router = express.Router(); // instanciar
const controller = require("../controller/gamesController");
const cors = require("cors");


router.put("/games/:id",cors(), controller.upDateNameWithPut);
router.patch("/games/:id", cors(), controller.upDateNameWithPatch);
router.put("/games/:id", cors(), controller.upDateCompanyWithPut);
router.patch("/games/:id", cors(), controller.upDateCompanyWithPatch);



module.exports = router