const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    hero: { type: Object, default: {} },
    aboutProject: { type: Object, default: {} },
    amenities: { type: Object, default: {} },
    township: { type: Object, default: {} },
    floorPlans: { type: Object, default: {} },
    videoSection: { type: Object, default: {} },
    developer: { type: Object, default: {} },
    construction: { type: Object, default: {} },
    faq: { type: Object, default: {} }
  },
  { timestamps: true }
);

module.exports = mongoose.model("content", contentSchema);
