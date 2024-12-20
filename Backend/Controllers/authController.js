const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

// Helper function to validate email format
const isValidEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
};

// Helper function to generate JWT token
const generateToken = (user) => {
    try {
        const token = jwt.sign(
            { 
                id: user._id,
                username: user.username,
                email: user.email 
            },
            process.env.JWT_SECRET_KEY || 'your-secret-key',
            { expiresIn: '24h' }
        );
        console.log('Generated token successfully');
        return token;
    } catch (error) {
        console.error('Error generating token:', error);
        throw error;
    }
};

// Helper function to format user response
const formatUserResponse = (user, token) => {
    return {
        token,
        user: {
            id: user._id,
            username: user.username,
            email: user.email
        }
    };
};

const register = async (req, res) => {
    try {
        console.log('Registration attempt:', req.body);
        const { username, email, password } = req.body;

        // Validation
        if (!username || !email || !password) {
            console.log('Missing required fields');
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (username.length < 3) {
            console.log('Username too short');
            return res.status(400).json({ error: 'Username must be at least 3 characters long' });
        }

        if (password.length < 6) {
            console.log('Password too short');
            return res.status(400).json({ error: 'Password must be at least 6 characters long' });
        }

        if (!isValidEmail(email)) {
            console.log('Invalid email format');
            return res.status(400).json({ error: 'Please provide a valid email address' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [
                { email: email.toLowerCase() },
                { username: username }
            ]
        });

        if (existingUser) {
            console.log('User already exists:', existingUser.email === email.toLowerCase() ? 'Email taken' : 'Username taken');
            return res.status(400).json({
                error: existingUser.email === email.toLowerCase() 
                    ? 'Email already registered' 
                    : 'Username already taken'
            });
        }

        // Hash password
        console.log('Hashing password...');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = new User({
            username,
            email: email.toLowerCase(),
            password: hashedPassword
        });

        console.log('Saving user to database...');
        await user.save();
        console.log('User registered successfully:', user._id);

        // Generate token and send response
        const token = generateToken(user);
        res.status(201).json(formatUserResponse(user, token));

    } catch (error) {
        console.error('Registration error:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: Object.values(error.errors).map(err => err.message).join(', ') });
        }
        res.status(500).json({ error: 'Error registering user. Please try again.' });
    }
};

const login = async (req, res) => {
    try {
        console.log('Login attempt with body:', req.body);
        const { username, password } = req.body;

        // Validation
        if (!username || !password) {
            console.log('Missing credentials');
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Find user by username or email
        const user = await User.findOne({
            $or: [
                { username: username },
                { email: username.toLowerCase() }
            ]
        });

        console.log('User found:', user ? 'Yes' : 'No');
        
        if (!user) {
            console.log('User not found for username/email:', username);
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Validate password
        console.log('Comparing passwords...');
        const validPassword = await bcrypt.compare(password, user.password);
        console.log('Password valid:', validPassword ? 'Yes' : 'No');

        if (!validPassword) {
            console.log('Invalid password for user:', username);
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        console.log('User logged in successfully:', user._id);

        // Generate token and send response
        const token = generateToken(user);
        res.json(formatUserResponse(user, token));

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Error during login. Please try again.' });
    }
};

module.exports = {
    register,
    login
};
