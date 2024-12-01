const express =require("express");
const router = express.Router();
const {LoginController , SignupController} = require("../Controllers/UserControllers")
//http://localhost:8000/api/User

router.post("/Login" , LoginController);
router.post("/Signup" , SignupController); 


module.exports = router;