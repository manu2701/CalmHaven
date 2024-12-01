const db = require("../config");

const People = db.model("User" , 
    {
    name: {
        type: String,
        required: true,
        unique: true
    },
    pass : String ,
    created_at : {
        type : Date , 
        default : Date.now()
    },
    DietProgress : {
        type : Map ,  //week no
        of : Number , //0,1,2
        default : {0:0}
    } ,
    SurveyResults : {
        type : Number,
        required : true , 
        enum: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    ExerciseProgress : {
        type : Map ,
        of : Number ,
        default : {0:0}
    }
} );


module.exports = People;
