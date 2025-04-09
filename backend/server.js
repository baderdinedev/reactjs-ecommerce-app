// server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // Import the connectDB function
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON data
app.use(cors()); // Allow cross-origin requests

// Connect to MongoDB
connectDB(); // Call the function to connect to MongoDB

// Routes
app.use("/api/auth", authRoutes);

// Protected Route (example)
app.get("/api/protected", (req, res) => {
  res.json({ message: "This is a protected route" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
