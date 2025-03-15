require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Email = require("./Email"); // ✅ Importing Email.js from root

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// API Route to Handle Email Submissions
app.post("/submit", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    // Check if the email is already in the database
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.json({ alreadySubscribed: true, message: "⚠️ You are already subscribed!" });
    }

    // Save new email
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).json({ message: "✅ Email saved successfully!" });

  } catch (error) {
    res.status(500).json({ message: "❌ Server Error", error });
  }
});

// Start Server on Port 6060
const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));