const mongoose = require("mongoose");

const InformSchema = new mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inform", InformSchema);
