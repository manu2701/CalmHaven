const express =require("express");
const router = express.Router();
const {DietDataController,DietProgressController , ExerciseDataController , ExerciseProgressController} = require("../Controllers/TodoControllers")

//http://localhost:8000/api/Todo

router.get("/DietData",DietDataController);
router.put("/DietProgress",DietProgressController);

router.get("/ExerciseData",ExerciseDataController);
router.put("/ExerciseProgress",ExerciseProgressController);
module.exports = router;