const express = require("express");

const ctrl = require("../../controllers/auth");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));

module.exports = router;
