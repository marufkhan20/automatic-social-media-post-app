const { Schema, model } = require("mongoose");

const documentationSchema = new Schema(
  {
    userGuide: String,
    administorGuide: String,
    faqs: [{}],
  },
  { timestamps: true }
);

const Documentation = model("Documentation", documentationSchema);

module.exports = Documentation;
