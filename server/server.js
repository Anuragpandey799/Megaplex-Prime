require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const adminRoutes = require("./routes/authRoutes");
const contentRoutes = require("./routes/contentRoutes");

const app = express();

app.use(
  cors({
    origin: "https://megaplex-anurag.vercel.app",
    credentials: true,
  }),
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ROUTES
app.use("/api/admin", adminRoutes);
app.use("/api/content", contentRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});
