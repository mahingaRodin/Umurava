const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    challenges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Challenge" }],
});

module.exports = mongoose.model("User", UserSchema);
