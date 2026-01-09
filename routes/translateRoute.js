const express = require("express");
const router = express.Router();

const {
  translateError,
} = require("../controllers/translateController");

router.post("/", translateError);

module.exports = router;
