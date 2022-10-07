const express = require("express");

const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { isValidId, authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getById));

router.post("/", authenticate, ctrlWrapper(ctrl.add));

router.put("/:id", authenticate, isValidId, ctrlWrapper(ctrl.updateById));

router.patch(
  "/id/favorite",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeById));

module.exports = router;
