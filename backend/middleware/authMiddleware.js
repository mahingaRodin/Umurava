const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');

const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get the admin from the token
            const admin = await Admin.findById(decoded.id);

            if (!admin) {
                return res.status(401).json({ message: 'Admin not found' });
            }

            req.user = admin;
            next();
        } catch (err) {
            console.error(err);
            res.status(401).json({ message: 'Not authorized' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'No token, authorization denied' });
    }
};

module.exports = protect;
