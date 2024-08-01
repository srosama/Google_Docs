const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const {generateToken, generateRefreshToken} = require("../utils/helps.js")


const register = async (req, res) => {
    try {
        const { email, password, first_name, last_name } = req.body;

        if (!email || !password || !first_name || !last_name) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const existingUserByEmail = await User.findOne({ email });
        if (existingUserByEmail) {
            return res.status(409).json({ error: 'Email already in use' });
        }

        const user = new User({ email, password, first_name, last_name });

        await user.save();

        const token = generateToken(user);
        const refreshToken = generateRefreshToken(user);

        // Save refresh token in the database
        user.refreshToken = refreshToken;
        await user.save();

        res.cookie('token', token, { httpOnly: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true });

        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'An error occurred while registering the user.' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        // Use the matchPassword method to validate the password
        const isPasswordValid = await user.matchPassword(password);
        if (!isPasswordValid) throw new Error('Invalid credentials');

        // Generate token and refresh token (implement these functions as needed)
        const token = generateToken(user);
        const refreshToken = generateRefreshToken(user);

        // Save the refresh token to the user document
        user.refreshToken = refreshToken;
        await user.save();

        // Set cookies and respond with success
        res.cookie('token', token, { httpOnly: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true });
        res.status(200).json({ user, token });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const logout = async (req, res) => {
    try {
        const { token, refreshToken } = req.cookies;
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            await User.findByIdAndUpdate(decoded.id, { refreshToken: null });
        }

        res.clearCookie('token');
        res.clearCookie('refreshToken');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong during logout' });
    }
};

const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;
        if (!refreshToken) return res.status(403).json({ error: 'Refresh token is required' });

        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user || user.refreshToken !== refreshToken) return res.status(403).json({ error: 'Invalid refresh token' });

        const newToken = generateToken(user);
        res.cookie('token', newToken, { httpOnly: true });

        res.status(200).json({ token: newToken });
    } catch (error) {
        res.status(403).json({ error: 'Invalid refresh token' });
    }
};

module.exports = { register, login, logout, refreshToken };
