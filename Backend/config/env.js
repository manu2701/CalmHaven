const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') });

module.exports = {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/calmhaven',
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    PORT: process.env.PORT || 8080
};
