const express = require('express');
const router = express.Router();
const chatController = require('../Controllers/chatController');

// Chat endpoint
router.post('/chat', chatController.chat);

module.exports = router;
