const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
const User = require('../models/userModel'); // Include User model if you're also handling users

const protect = async (req, res, next) => {
    let token;

    // Check if there's an authorization header
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get the token from the header
            token = req.headers.authorization.split(' ')[1];

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Check for admin or user based on role
            let user;
            if (decoded.role === 'admin') {
                // If role is admin, find admin
                user = await Admin.findById(decoded.id);
                if (!user) {
                    return res.status(401).json({ message: 'Admin not found' });
                }
            } else {
                // If role is user, find user (you may want to adjust based on your model)
                user = await User.findById(decoded.id);
                if (!user) {
                    return res.status(401).json({ message: 'User not found' });
                }
            }

            // Attach user to the request
            req.user = user;
            next();
        } catch (err) {
            console.error(err);
            res.status(401).json({ message: 'Not authorized, token is invalid' });
        }
    }

    // If no token is provided
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
};

module.exports = protect;
