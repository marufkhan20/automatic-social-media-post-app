const { Schema, model } = require("mongoose");

const gallerySchema = new Schema(
  {
    folderName: String,
    type: String,
    resources: [String],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  { timestamps: true }
);

const Gallery = model("Gallery", gallerySchema);

module.exports = Gallery;
