const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    console.log('Auth middleware called for:', req.method, req.path);
    console.log('Headers:', req.headers);
    
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Extracted token:', token ? token.substring(0, 20) + '...' : 'null');
    
    if (!token) {
      console.log('No token found in Authorization header');
      return res.status(401).json({ message: 'No authentication token, access denied' });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    console.log('Token verified successfully:', verified);
    req.user = verified;
    next();
  } catch (err) {
    console.error('Token verification failed:', err.message);
    res.status(401).json({ message: 'Token verification failed, authorization denied' });
  }
};

module.exports = auth; 