

const express = require("express");
const cors = require("cors");

const translateRoutes = require("./routes/translateRoute.js");
const app = express();
const PORT = 5000;
const connectDB = require("./config/DBconnection.js");



connectDB();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/translate", translateRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Error Message Translator Backend is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
