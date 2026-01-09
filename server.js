// const express = require("express");
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());


// const translateRoutes = require("./routes/translateRoute.js");

// // const errorRules = [
// //   {
// //     keyword: "403",
// //     meaning: "You are not allowed to access this resource.",
// //     causes: [
// //       "You are not authenticated",
// //       "Missing permissions",
// //       "Wrong GitHub account or token"
// //     ],
// //     solution: "Check login, permissions, or access rights."
// //   },
// //   {
// //     keyword: "map",
// //     meaning: "You are trying to use .map() on something that is not an array.",
// //     causes: [
// //       "Data is undefined",
// //       "API response not loaded yet"
// //     ],
// //     solution: "Check if data exists before using map()."
// //   },
// //   {
// //     keyword: "SQL",
// //     meaning: "There is an issue with your SQL query or database constraint.",
// //     causes: [
// //       "Primary key violation",
// //       "Foreign key constraint failed"
// //     ],
// //     solution: "Check table constraints and input values."
// //   }
// // ];

// app.use("/translate", translateRoutes);

// // API
// // app.post("/translate", (req, res) => {
// //   const { errorMessage } = req.body;

// //   if (!errorMessage) {
// //     return res.status(400).json({ message: "No error message provided" });
// //   }

// //   const found = errorRules.find(rule =>
// //     errorMessage.toLowerCase().includes(rule.keyword.toLowerCase())
// //   );

// //   if (!found) {
// //     return res.json({
// //       meaning: "Unknown error",
// //       causes: ["No matching rule found"],
// //       solution: "Try searching the full error message online."
// //     });
// //   }

// //   res.json(found);
// // });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require("express");
const cors = require("cors");

const translateRoutes = require("./routes/translateRoutes");

const app = express();
const PORT = 5000;

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
