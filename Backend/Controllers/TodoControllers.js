const People = require("../Models/UserModel");

const DietDataController = async(req,res)=>{
    try{
        
        const dietPlans = [
            {
              id: 0,
              name: "Diet Plan 1",
              days: [
                {
                  day: "Day 1",
                  breakfast: "Oatmeal with banana",
                  lunch: "Grilled chicken with brown rice",
                  dinner: "Baked salmon with quinoa",
                },
                {
                  day: "Day 2",
                  breakfast: "Greek yogurt with berries",
                  lunch: "Turkey and avocado wrap",
                  dinner: "Shrimp and vegetable stir-fry",
                },
                {
                  day: "Day 3",
                  breakfast: "Scrambled eggs with whole wheat toast",
                  lunch: "Chicken Caesar salad",
                  dinner: "Grilled steak with roasted vegetables",
                },
                {
                  day: "Day 4",
                  breakfast: "Avocado toast with poached eggs",
                  lunch: "Chicken and quinoa bowl",
                  dinner: "Baked chicken with sweet potato",
                },
                {
                  day: "Day 5",
                  breakfast: "Smoothie bowl with banana and almond milk",
                  lunch: "Grilled chicken with mixed greens salad",
                  dinner: "Shrimp and pasta with marinara sauce",
                },
                {
                  day: "Day 6",
                  breakfast: "Omelette with vegetables",
                  lunch: "Turkey and cheese sandwich",
                  dinner: "Grilled chicken with roasted broccoli",
                },
                {
                  day: "Day 7",
                  breakfast: "Breakfast burrito with scrambled eggs and sausage",
                  lunch: "Chicken quesadilla",
                  dinner: "Baked chicken with mashed potatoes",
                },
              ],
            },
            {
              id: 1,
              name: "Diet Plan 2",
              days: [
                {
                  day: "Day 1",
                  breakfast: "Avocado toast with scrambled eggs",
                  lunch: "Grilled chicken with mixed greens salad",
                  dinner: "Baked salmon with quinoa",
                },
                {
                  day: "Day 2",
                  breakfast: "Greek yogurt with berries",
                  lunch: "Turkey and avocado wrap",
                  dinner: "Shrimp and vegetable stir-fry",
                },
                {
                  day: "Day 3",
                  breakfast: "Smoothie bowl with banana and almond milk",
                  lunch: "Chicken Caesar salad",
                  dinner: "Grilled steak with roasted vegetables",
                },
                {
                  day: "Day 4",
                  breakfast: "Omelette with vegetables",
                  lunch: "Chicken and quinoa bowl",
                  dinner: "Baked chicken with sweet potato",
                },
                {
                  day: "Day 5",
                  breakfast: "Breakfast burrito with scrambled eggs and sausage",
                  lunch: "Turkey and cheese sandwich",
                  dinner: "Grilled chicken with roasted broccoli",
                },
                {
                  day: "Day 6",
                  breakfast: "Avocado toast with scrambled eggs",
                  lunch: "Grilled chicken with mixed greens salad",
                  dinner: "Baked salmon with quinoa",
                },
                {
                  day: "Day 7",
                  breakfast: "Greek yogurt with berries",
                  lunch: "Chicken quesadilla",
                  dinner: "Shrimp and vegetable stir-fry",
                },
              ],
            },
            {
              id: 2,
              name: "Diet Plan 3",
              days: [
                {
                  day: "Day 1",
                  breakfast: "Omelette with vegetables",
                  lunch: "Chicken and quinoa bowl",
                  dinner: "Baked chicken with sweet potato",
                },
                {
                  day: "Day 2",
                  breakfast: "Greek yogurt with berries",
                  lunch: "Turkey and avocado wrap",
                  dinner: "Grilled steak with roasted vegetables",
                },
                {
                  day: "Day 3",
                  breakfast: "Breakfast burrito with scrambled eggs and sausage",
                  lunch: "Chicken Caesar salad",
                  dinner: "Baked salmon with quinoa",
                },
                {
                  day: "Day 4",
                  breakfast: "Avocado toast with scrambled eggs",
                  lunch: "Grilled chicken with mixed greens salad",
                  dinner: "Shrimp and vegetable stir-fry",
                },
                {
                  day: "Day 5",
                  breakfast: "Turkey and cheese sandwich",
                  lunch: "Chicken quesadilla",
                  dinner: "Baked chicken with roasted broccoli",
                },
                {
                  day: "Day 6",
                  breakfast: "Omelette with vegetables",
                  lunch: "Turkey and avocado wrap",
                  dinner: "Grilled steak with roasted sweet potatoes",
                },
                {
                  day: "Day 7",
                  breakfast: "Greek yogurt with berries",
                  lunch: "Chicken Caesar salad",
                  dinner: "Baked salmon with quinoa",
                },
              ],
            },
          ];

        const user = await People.findOne({"name" : req.Bearing_User.name});
        if (!user) {
          return res.status(404).json({
              success: false,
              message: "User not found"
          })}

        const start_date = new Date(await user.created_at);
        const today = new Date();
        const weeks_passed = Math.floor((today - start_date) / (1000 * 60 * 60 *24 * 7));
        
        res.json({ msg :`displaying ${dietPlans[weeks_passed % 3].name} for week ${weeks_passed}` ,data : dietPlans[weeks_passed % 3].days});
    }catch(error){
      res.status(500).json({msg:error.message});
    }
}

const DietProgressController = async(req,res)=>{
  try{
    // req.body contains 0,1,2 for <3 , >3<7 ,7 checkboxes ticked
    const {progressBar}  = req.body;
    if (![0,1,2].includes(progressBar)) {
      return res.status(400).json({
          success: false,
          message: "Invalid progress value. Must be 0, 1, or 2"
      });
  }
    const user = await People.findOne({"name" : req.Bearing_User.name});
    if (!user) {
      return res.status(404).json({
          message: "User not found"
      });
  }
    const start_date = new Date(user.created_at);
    const today = new Date();
    const weeks_passed = Math.floor((today - start_date) / (1000 * 60 * 60 *24 * 7));
    /*const result = await People.updateOne(
      { name: "mohith" }, 
      { $set: {DietProgress:{...user.DietProgress , [weeks_passed]: progressBar }}}  
    );*/
    const result = await People.updateOne(
      { name: req.Bearing_User.name },
      { $set: { [`DietProgress.${weeks_passed}`]: progressBar } }
    )
    if (result.modifiedCount > 0) {
      res.json({msg : "updated successfully"});
    } else {
      res.json({msg : "not updated"});
    }
  }catch(err){
    res.status(500).json({message:err.message});
  }

}

const ExerciseDataController = async(req,res)=>{
  try{
      
    const ExercisePlans = [
      {
        id: 0,
        name: "Poor Sleep Quality + Low Stress Level",
        days: [
          {
            day: "Day 1",
            morning: "Cat-Cow Pose",
            evening: "Light Walking",
          },
          {
            day: "Day 2",
            morning: "Child's Pose",
            evening: "Neck and Shoulder Stretches",
          },
          {
            day: "Day 3",
            morning: "Seated Forward Fold",
            evening: "Breathing Exercises (4-7-8 Method)",
          },
          {
            day: "Day 4",
            morning: "Reclined Bound Angle Pose",
            evening: "Gentle Stretching",
          },
          {
            day: "Day 5",
            morning: "Sphinx Pose",
            evening: "Guided Meditation",
          },
          {
            day: "Day 6",
            morning: "Happy Baby Pose",
            evening: "Nature Walk",
          },
          {
            day: "Day 7",
            morning: "Legs-Up-The-Wall Pose",
            evening: "Body Scan Relaxation",
          },
        ],
      },
      {
        id: 1,
        name: "Poor Sleep Quality + Medium Stress Level",
        days: [
          {
            day: "Day 1",
            morning: "Supported Bridge Pose",
            evening: "Walking Meditation",
          },
          {
            day: "Day 2",
            morning: "Butterfly Pose",
            evening: "Progressive Muscle Relaxation",
          },
          {
            day: "Day 3",
            morning: "Supine Twist",
            evening: "Alternate Nostril Breathing",
          },
          {
            day: "Day 4",
            morning: "Corpse Pose (Shavasana)",
            evening: "Tai Chi Movements",
          },
          {
            day: "Day 5",
            morning: "Downward Dog",
            evening: "Breathing Techniques",
          },
          {
            day: "Day 6",
            morning: "Reclined Twist",
            evening: "Gratitude Journaling",
          },
          {
            day: "Day 7",
            morning: "Yoga Nidra",
            evening: "Light Stretching",
          },
        ],
      },
      {
        id: 2,
        name: "Poor Sleep Quality + High Stress Level",
        days: [
          {
            day: "Day 1",
            morning: "Reclined Butterfly Pose",
            evening: "Slow Walking",
          },
          {
            day: "Day 2",
            morning: "Supported Child's Pose",
            evening: "Chair Yoga",
          },
          {
            day: "Day 3",
            morning: "Restorative Forward Fold",
            evening: "Pursed-Lip Breathing",
          },
          {
            day: "Day 4",
            morning: "Legs-Up-The-Wall Pose",
            evening: "Visualization Meditation",
          },
          {
            day: "Day 5",
            morning: "Corpse Pose",
            evening: "Journaling with Stretching",
          },
          {
            day: "Day 6",
            morning: "Seated Twist",
            evening: "Tai Chi Movements",
          },
          {
            day: "Day 7",
            morning: "Cat-Cow Pose",
            evening: "Hand Massage",
          },
        ],
      },
      {
        id: 3,
        name: "Average Sleep Quality + Low Stress Level",
        days: [
          {
            day: "Day 1",
            morning: "Mountain Pose",
            evening: "Low-Impact Aerobics",
          },
          {
            day: "Day 2",
            morning: "Warrior",
            evening: "Core Strength Exercises",
          },
          {
            day: "Day 3",
            morning: "Cobra Pose",
            evening: "Nature Walk",
          },
          {
            day: "Day 4",
            morning: "Tree Pose",
            evening: "Basic Pilates",
          },
          {
            day: "Day 5",
            morning: "Extended Side Angle",
            evening: "Light Resistance Training",
          },
          {
            day: "Day 6",
            morning: "Standing Forward Bend",
            evening: "Deep Breathing",
          },
          {
            day: "Day 7",
            morning: "Seated Side Stretch",
            evening: "Stretching Routine",
          },
        ],
      },
      {
        id: 4,
        name: "Average Sleep Quality + Medium Stress Level",
        days: [
          {
            day: "Day 1",
            morning: "Sun Salutation",
            evening: "Balance Exercises",
          },
          {
            day: "Day 2",
            morning: "Triangle Pose",
            evening: "Diaphragmatic Breathing",
          },
          {
            day: "Day 3",
            morning: "Cobra Pose",
            evening: "Tai Chi Movements",
          },
          {
            day: "Day 4",
            morning: "Warrior II",
            evening: "Guided Meditation",
          },
          {
            day: "Day 5",
            morning: "Seated Forward Fold",
            evening: "Strength Training",
          },
          {
            day: "Day 6",
            morning: "Legs-Up-The-Wall Pose",
            evening: "Walking Meditation",
          },
          {
            day: "Day 7",
            morning: "Cat-Cow Pose",
            evening: "Stretching for Flexibility",
          },
        ],
      },
      {
        id: 5,
        name: "Average Sleep Quality + High Stress Level",
        days: [
          {
            day: "Day 1",
            morning: "Supported Child's Pose",
            evening: "Gratitude Journaling",
          },
          {
            day: "Day 2",
            morning: "Reclined Twist",
            evening: "Breathing Exercises",
          },
          {
            day: "Day 3",
            morning: "Happy Baby Pose",
            evening: "Tai Chi Movements",
          },
          {
            day: "Day 4",
            morning: "Corpse Pose",
            evening: "Light Stretching",
          },
          {
            day: "Day 5",
            morning: "Seated Forward Fold",
            evening: "Visualization Meditation",
          },
          {
            day: "Day 6",
            morning: "Sphinx Pose",
            evening: "Chair Yoga",
          },
          {
            day: "Day 7",
            morning: "Restorative Yoga Pose",
            evening: "Walking Meditation",
          },
        ],
      },
      {
        id: 6,
        name: "Good Sleep Quality + Low Stress Level",
        days: [
          {
            day: "Day 1",
            morning: "Warrior",
            evening: "Moderate Cardio",
          },
          {
            day: "Day 2",
            morning: "Triangle Pose",
            evening: "Easy Flow Yoga",
          },
          {
            day: "Day 3",
            morning: "Standing Forward Bend",
            evening: "Group Fitness Class",
          },
          {
            day: "Day 4",
            morning: "Tree Pose",
            evening: "Swimming or Water Aerobics",
          },
          {
            day: "Day 5",
            morning: "Extended Side Angle",
            evening: "Stretching for Flexibility",
          },
          {
            day: "Day 6",
            morning: "Sun Salutation",
            evening: "Nature Walk",
          },
          {
            day: "Day 7",
            morning: "Seated Side Stretch",
            evening: "Light Strength Training",
          },
        ],
      },
      {
        id: 7,
        name: "Good Sleep Quality + Medium Stress Level",
        days: [
          {
            day: "Day 1",
            morning: "Warrior I",
            evening: "Power Yoga",
          },
          {
            day: "Day 2",
            morning: "Triangle Pose",
            evening: "Breathing Exercises",
          },
          {
            day: "Day 3",
            morning: "Mountain Pose",
            evening: "Strength Training",
          },
          {
            day: "Day 4",
            morning: "Cat-Cow Pose",
            evening: "Guided Meditation",
          },
          {
            day: "Day 5",
            morning: "Seated Forward Fold",
            evening: "Mindful Jogging",
          },
          {
            day: "Day 6",
            morning: "Cobra Pose",
            evening: "Walking Meditation",
          },
          {
            day: "Day 7",
            morning: "Downward Dog",
            evening: "Tai Chi Movements",
          },
        ],
      },
      {
        id: 8,
        name: "Good Sleep Quality + High Stress Level",
        days: [
          {
            day: "Day 1",
            morning: "Reclined Twist",
            evening: "Slow Walking",
          },
          {
            day: "Day 2",
            morning: "Happy Baby Pose",
            evening: "Breathing Exercises",
          },
          {
            day: "Day 3",
            morning: "Supported Child's Pose",
            evening: "Gratitude Journaling",
          },
          {
            day: "Day 4",
            morning: "Legs-Up-The-Wall Pose",
            evening: "Tai Chi Movements",
          },
          {
            day: "Day 5",
            morning: "Corpse Pose",
            evening: "Light Resistance Training",
          },
          {
            day: "Day 6",
            morning: "Seated Twist",
            evening: "Visualization Meditation",
          },
          {
            day: "Day 7",
            morning: "Cat-Cow Pose",
            evening: "Journaling with Stretching",
          },
        ],
      },
    ];
    

      const user = await People.findOne({"name" : req.Bearing_User.name});
      if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
      }
      const uindex = await user.SurveyResults;
      console.log(uindex)
      res.json({ msg :`displaying ${ExercisePlans[uindex].name}` ,data : ExercisePlans[uindex].days});

  }catch(error){
    res.status(500).json({msg:error.message});
  }

}

const ExerciseProgressController = async(req,res)=>{
  try{
    // req.body contains 0,1,2 for <3 , >3<7 ,7 checkboxes ticked
    const {EprogressBar}  = req.body;
    if (![0,1,2].includes(EprogressBar)) {
      return res.status(400).json({
          success: false,
          message: "Invalid progress value. Must be 0, 1, or 2"
      });
    }

    const user = await People.findOne({"name" : req.Bearing_User.name});
    if (!user) {
      return res.status(404).json({
          message: "User not found"
      });
    }
    const start_date = new Date(user.created_at);
    const today = new Date();
    const weeks_passed = Math.floor((today - start_date) / (1000 * 60 * 60 *24 * 7));
    const result = await People.updateOne(
      { name: req.Bearing_User.name },
      { $set: { [`ExerciseProgress.${weeks_passed}`]: EprogressBar } }
    )
    if (result.modifiedCount > 0) {
      res.json({msg : "updated successfully"});
    } else {
      res.json({msg : "not updated"});
    }
  }catch(err){
    res.status(500).json({message:err.message});
  }

}

module.exports = {DietDataController,DietProgressController , ExerciseDataController , ExerciseProgressController};