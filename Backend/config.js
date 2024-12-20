const mongoose = require('mongoose');

// MongoDB Configuration
const MONGODB_URL = 'mongodb://localhost:27017/calmhaven';
const PORT = 8080;

// JWT Configuration
const JWT_SECRET_KEY = 'your-secret-key-123';

// Gemini API Configuration - Use environment variable
const GEMINI_API_KEY = 'AIzaSyAfJNEv2bB5r0cKbnION3nPlqu65ka_pWA';

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Export configuration
module.exports = {
    MONGODB_URL,
    PORT,
    GEMINI_API_KEY,
    JWT_SECRET_KEY,
    connectDB
};
