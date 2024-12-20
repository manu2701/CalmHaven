const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    answers: {
        q1: String,
        q2: String,
        q3: String,
        q4: String,
        q5: String
    },
    metrics: {
        stressLevel: {
            type: Number,
            min: 1,
            max: 10,
            required: true
        },
        sleepQuality: {
            type: Number,
            min: 1,
            max: 10,
            required: true
        },
        hasTriggers: {
            type: Boolean,
            required: true
        },
        needsSupport: {
            type: Boolean,
            required: true
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Survey', surveySchema);
