const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRoutes");
const TodoRouter = require("./TodoRoutes");
const chatRoutes = require("./chatRoutes");

//http://localhost:8000/api
const { Authorize } = require("../Middlewares/AuthMiddleware");

// Routes
router.use("/user", UserRouter); //login-POST //signup-POST (name, password)
router.use("/todo", Authorize, TodoRouter); //DietProgress-PUT // DietData-GET similar for exercise
router.use("/chat", chatRoutes); // Chat routes for the Gemini-powered chatbot

router.get("/home", (req, res) => {
    res.send("Welcome to CalmHaven API");
});

module.exports = router;