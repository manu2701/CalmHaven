const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    pass: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    DietProgress: {
        type: Map,
        of: Number,
        default: { 0: 0 }
    },
    SurveyResults: {
        type: Number,
        default: 0
    },
    ExerciseProgress: {
        type: Map,
        of: Number,
        default: { 0: 0 }
    },
    MeditationProgress: {
        type: Map,
        of: Number,
        default: { 0: 0 }
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
