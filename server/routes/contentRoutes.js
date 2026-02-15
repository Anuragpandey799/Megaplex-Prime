const express = require("express");
const Content = require("../models/content");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// ================= GET CONTENT =================
router.get("/", async (req, res) => {
  try {
    const content = await Content.findOne();

    if (!content) {
      return res.status(404).json({ message: "No content found" });
    }

    res.json(content);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// ================= UPDATE CONTENT (Protected) =================
router.put("/", authMiddleware, async (req, res) => {
  try {
    const updated = await Content.findOneAndUpdate(
      {},              // always update the first document
      req.body,
      {
        new: true,
      }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
