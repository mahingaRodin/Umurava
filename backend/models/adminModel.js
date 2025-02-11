const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "is invalid"]
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters"]
    },
    role: {
        type: String,
        enum: ["admin", "superadmin"],
        default: "admin"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

//hash the password before saving it 
AdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//compare passwords
AdminSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model("Admin", AdminSchema);
