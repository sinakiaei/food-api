const express = require("express");
const router = express.Router();
const recommendations = require("../controllers/recommendations");
const initalValues = require("../controllers/initial-values");

router.get("/api/recommendations", recommendations.get);
router.get("/api/initial-values", initalValues.get);

module.exports = router;
