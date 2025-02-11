const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Assuming you have a user model for database interactions
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const user = new User({ username, email, password: hashedPassword });

        // Save the user to the database
        await user.save();

        // Return success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Log in a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        // Generate JWT token with user info
        const token = jwt.sign({ id: user._id, role: "user" }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return the token and role in the response
        res.status(200).json({ token, role: "user" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Log out a user (this doesn't really "log out" since JWT doesn't have a server-side state; you can just remove the token client-side)
router.post('/logout', (req, res) => {
    // Clear token on client-side (usually done in the frontend)
    res.status(200).json({ message: 'User logged out successfully' });
});

// You can add more routes for password reset, user profile, etc. here

module.exports = router;
