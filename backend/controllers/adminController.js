const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");

//register admin
exports.registerAdmin = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const newAdmin = new Admin({ email, password, role });
        await newAdmin.save();

        const token = jwt.sign(
            { id: newAdmin._id, role: newAdmin.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(201).json({ message: "Admin created successfully", token });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Login admin
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({ message: "Admin not found" });
        }

        const isMatch = await admin.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: admin._id, role: admin.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
