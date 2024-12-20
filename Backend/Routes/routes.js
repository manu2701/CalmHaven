const express = require('express');
const router = express.Router();
const { register, login } = require('../Controllers/authController');
const { generateTodosForWeek, getTodos, updateTodo } = require('../Controllers/todoController');
const { chat } = require('../Controllers/chatController');
const { authenticateToken } = require('../Middleware/authMiddleware');

// Auth routes
router.post('/auth/register', register);
router.post('/auth/login', login);

// Todo routes (all protected)
router.post('/todos/generate', authenticateToken, generateTodosForWeek);
router.get('/todos', authenticateToken, getTodos);
router.patch('/todos/:id', authenticateToken, updateTodo);

// Chat route
router.post('/chat', chat);

module.exports = router;
