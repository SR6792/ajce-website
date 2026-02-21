const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please provide name, email, and password' });
        }

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Create user
        const user = await User.create({ name, email, password, authProvider: 'local' });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } catch (error) {
        console.error('Register error:', error.message);
        res.status(500).json({ message: error.message || 'Server error' });
    }
});

// @route   POST /api/auth/login
// @desc    Login user & return JWT
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        // Find user and include password field
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // If user signed up with Google, tell them to use Google login
        if (user.authProvider === 'google' && !user.password) {
            return res.status(400).json({ message: 'This account uses Google Sign-In. Please use "Continue with Google".' });
        }

        // Check password
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } catch (error) {
        console.error('Login error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/auth/google
// @desc    Google OAuth login/register (receives user info from frontend)
router.post('/google', async (req, res) => {
    try {
        const { email, name, googleId } = req.body;

        if (!email || !name || !googleId) {
            return res.status(400).json({ message: 'Google authentication data is required' });
        }

        // Check if user already exists
        let user = await User.findOne({ email });

        if (user) {
            // User exists — update googleId if not set
            if (!user.googleId) {
                user.googleId = googleId;
                if (user.authProvider === 'local') {
                    user.authProvider = 'google';
                }
                await user.save();
            }
        } else {
            // Create new user
            user = await User.create({
                name,
                email,
                googleId,
                authProvider: 'google',
            });
        }

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } catch (error) {
        console.error('Google auth error:', error.message);
        res.status(500).json({ message: 'Google authentication failed. Please try again.' });
    }
});

module.exports = router;
