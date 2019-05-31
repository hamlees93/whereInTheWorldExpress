const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");

// Show all users
router.get("/", UserController.index);

// Show a specific user
router.get("/:id", UserController.show);

module.exports = router;