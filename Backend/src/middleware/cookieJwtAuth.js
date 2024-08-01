const jwt = require('jsonwebtoken');

const cookieJwtAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ error: 'Invalid token' });

      req.user = user; // Save user 
      next();
  });
};

module.exports = cookieJwtAuth;
