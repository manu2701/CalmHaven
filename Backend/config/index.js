require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8080,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/calmhaven',
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'your-secret-key',
    GEMINI_API_KEY: process.env.GEMINI_API_KEY ,
    // Rate limiting
    RATE_LIMIT_WINDOW: 60 * 60 * 1000, // 1 hour in milliseconds
    RATE_LIMIT_MAX_REQUESTS: 100, // Maximum requests per window
};
