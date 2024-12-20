const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [50, 'Username cannot exceed 50 characters'],
        validate: {
            validator: function(v) {
                return v && v.length >= 3;
            },
            message: 'Username cannot be empty and must be at least 3 characters'
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: 'Please enter a valid email address'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
        validate: {
            validator: function(v) {
                return v && v.length >= 6;
            },
            message: 'Password cannot be empty and must be at least 6 characters'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Pre-save middleware to trim strings
userSchema.pre('save', function(next) {
    if (this.username) this.username = this.username.trim();
    if (this.email) this.email = this.email.trim().toLowerCase();
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
