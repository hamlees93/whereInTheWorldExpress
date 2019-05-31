const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post_controller");

// Show all users
router.get("/", PostController.index);

// Create a new post
// Can only create if you're authenticated
router.post("/", PostController.create);

// Show a specific post
router.get("/:id", PostController.show);

// Get the edit form for a specific post
router.get("/:id/edit", PostController.edit);

// Send through the editted form
router.patch("/:id", PostController.update);
router.put("/:id", PostController.update);

module.exports = router;