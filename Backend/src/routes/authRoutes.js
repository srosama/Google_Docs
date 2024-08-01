const express = require('express');
const router = express.Router();
const { register, login, logout, refreshToken } = require('../controllers/authController');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


router.post('/register', register);
router.post('/login', login)
router.post('/logout', logout);
router.post('/refresh-token', refreshToken);
router.get('/user', (req, res) => {
    const token = req.cookies.token;
    console.log(token);
    if (!token) return res.status(401).json({ error: 'Not authenticated' });
  
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Not authenticated' });
      
      const user = await User.findById(decoded.id);
      res.json(user);
    });
  });


// router.post('/forget-paassword', refreshToken);

module.exports = router;


