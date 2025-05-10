const express = require("express");
const { chatWithBot } = require("../controllers/chatController.cjs");

const router = express.Router();
router.post("/", chatWithBot);

module.exports = router;
