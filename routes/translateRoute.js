const express = require("express");
const router = express.Router();
const {translateError} = require("../controller/translateController");  
router.post("/", translateError);

module.exports = router;
