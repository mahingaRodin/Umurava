const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
    challengeTitle: { type: String, required: true },
    deadline: { type: Date, required: true },
    duration: { type: String, required: true },
    moneyPrize: { type: Number, required: true },
    contactEmail: { type: String, required: true },
    projectDescription: { type: String, required: true },
    projectBrief: { type: String, required: true },
    projectDescriptionAndTasks: { type: String, required: true },
    status: {
        type: String,
        enum: ["ongoing", "completed", "upcoming"],
        default: "ongoing"
    },
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
