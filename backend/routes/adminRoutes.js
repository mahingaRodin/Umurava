// backend/routes/adminRoutes.js

const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin } = require("../controllers/adminController");
const protect = require("../middleware/authMiddleware");  // Import the middleware

/**
 * @swagger
 * /api/admin/register:
 *   post:
 *     summary: Register a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: ["admin", "superadmin"]
 *                 default: "admin"
 *     responses:
 *       201:
 *         description: Admin created
 */
router.post("/register", registerAdmin);

/**
 * @swagger
 * /api/admin/login:
 *   post:
 *     summary: Login an admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin logged in successfully
 */
router.post("/login", loginAdmin);

// Protect these routes with JWT middleware
router.get("/protected", protect, (req, res) => {
    res.json({ message: "This route is protected", user: req.user });
});

module.exports = router;
