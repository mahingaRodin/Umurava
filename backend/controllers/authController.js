const User = require('../models/userModel');
const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User registration
const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword, role });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// User login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        // Generate JWT token with the correct role
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, role: user.role });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Admin registration
const registerAdmin = async (req, res) => {
    const { email, password, role = "admin" } = req.body; // Default role 'admin'

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = new Admin({ email, password: hashedPassword, role });

        await admin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Admin login
const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(404).json({ message: 'Admin not found' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        // Generate JWT token with the correct role
        const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, role: admin.role });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Protect route for admin
const protectAdmin = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;

        if (decoded.role !== "admin") {
            return res.status(403).json({ message: 'Access denied, admin only' });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = {
    registerUser,
    loginUser,
    registerAdmin,
    loginAdmin,
    protectAdmin,
};
