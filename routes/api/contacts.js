const express = require("express");

const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

// router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeById));

// router.put("/:contactId", isValidId, ctrlWrapper(ctrl.updateById));

module.exports = router;
