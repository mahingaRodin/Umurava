const express = require('express');
const router = express.Router();
const Challenge = require('../models/challengeModel'); // Challenge model for CRUD operations


// Create a new challenge
router.post('/create', async (req, res) => {
    try {
        const challenge = new Challenge(req.body);
        await challenge.save();
        res.status(201).json(challenge);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all challenges
router.get('/get-all', async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.status(200).json(challenges);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single challenge
router.get('/get-single-challenge/:id', async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
        res.status(200).json(challenge);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a challenge
router.put('/update-challenge/:id', async (req, res) => {
    try {
        const challenge = await Challenge.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
        res.status(200).json(challenge);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a challenge
router.delete('/delete-challenge/:id', async (req, res) => {
    try {
        const challenge = await Challenge.findByIdAndDelete(req.params.id);
        if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
        res.status(200).json({ message: 'Challenge deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
