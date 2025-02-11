// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Path to your Swagger JSON file
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express app
const app = express();

// MongoDB URI (replace with your actual MongoDB connection string)
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/umurava'; // Example for local MongoDB. Use process.env.MONGODB_URI for environment-based connection.

// Middlewares
app.use(express.json()); // To parse incoming JSON data
app.use(cors()); // To allow cross-origin requests

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000, // Set timeout to 30 seconds
            serverSelectionTimeoutMS: 30000, // Set server selection timeout
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit the process if MongoDB connection fails
    }
};

// Connect to MongoDB
connectDB();

// Swagger UI Setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes for authentication
const authRoutes = require('./routes/authRoutes');
app.use('/api/v1/auth', authRoutes);

// Routes for admin authentication
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/v1/admin', adminRoutes);

// Routes for challenges
const challengeRoutes = require('./routes/challengeRoutes');
app.use('/api/v1/challenges', challengeRoutes);

// Basic Route to check if the server is working
app.get('/', (req, res) => {
    res.send('Umurava Challenge API is running');
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong! Please try again later.' });
});

// Set the server to listen on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
