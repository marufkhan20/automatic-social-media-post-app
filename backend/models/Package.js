const { model, Schema } = require("mongoose");

const packageSchema = new Schema(
  {
    name: String,
    price: String,
    productId: String,
    offers: [
      {
        type: Object,
      },
    ],
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Package = model("Package", packageSchema);

module.exports = Package;
