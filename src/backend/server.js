const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// ✅ ROUTES (MUST be before 404)
app.use("/api", require("./routes/blogRoutes"));

// ❌ 404 handler (KEEP LAST)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
