const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");


router.get("/", mainController.getIndex);
router.put("/", mainController.getPostsOnPage);
router.get("/:slug", mainController.getPost);

module.exports = router;