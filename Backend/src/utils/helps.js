const jwt = require('jsonwebtoken');


const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' }); // Refresh token valid for 7 days
};

module.exports = { generateRefreshToken, generateToken };
