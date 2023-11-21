const mongoose = require("mongoose");

const applySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    resume: { data: Buffer, contentType: String },
    job: { type: Object, required: true },
  },
  { timestamps: true }
);

const Apply = mongoose.model("Apply", applySchema);
module.exports = Apply;
