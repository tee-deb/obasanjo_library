const express = require("express");
const { loginAdmin, currentAdmin } = require("../controllers/adminControllers");

const router = express.Router();

router.post("/login", loginAdmin);

router.get("/current", currentAdmin);

module.exports = router;