const express = require("express");

const ctrl = require("../../controllers/auth");

const { ctrlWrapper } = require("../../helpers");
const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/signup", ctrlWrapper(ctrl.signup));

router.post("/login", ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

// router.patch("/", authenticate, ctrlWrapper(ctrl.updateSubscription));

router.patch("/avatars", authenticate, ctrlWrapper(ctrl.updateAvatar));

module.exports = router;
