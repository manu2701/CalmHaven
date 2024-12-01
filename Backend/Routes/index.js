const express =require("express");
const router = express.Router();
const UserRouter = require("./UserRoutes");
const TodoRouter = require("./TodoRoutes");

//http://localhost:8000/api

const {Authorize} = require("../Middlewares/AuthMiddleware")

router.use("/User", UserRouter);//login-POSTx //signup-POST (name , password)//x
router.use("/Todo" , Authorize ,  TodoRouter);//DietProgress-PUT // DietData-GETx similar for exercise

router.get("/home" , (req,res)=>{
    res.send("Welcome Home");
})

module.exports = router; 