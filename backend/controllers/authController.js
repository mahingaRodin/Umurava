const User = require('../models/userModel');
const Admin = require('../models/adminModel'); // Assuming there's an Admin model for admin-related operations
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User registration
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });

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

        // Generate JWT token for user with role
        const token = jwt.sign({ id: user._id, role: "user" }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send response with token and role
        res.status(200).json({ token, role: "user" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Admin registration
const registerAdmin = async (req, res) => {
    const { email, password, role } = req.body;

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

        // Generate JWT token for admin with role
        const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send response with token and role
        res.status(200).json({ token, role: admin.role });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Protect route for admin - Example middleware to check admin access
const protectAdmin = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded; // Store decoded token in req for further use
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

// Exporting the functions for use in routes
module.exports = {
    registerUser,
    loginUser,
    registerAdmin,
    loginAdmin,
    protectAdmin,
};
