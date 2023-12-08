const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    package: {
      type: Schema.Types.ObjectId,
      ref: "Package",
    },
    price: Number,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);

const Subscription = model("Subscription", subscriptionSchema);

module.exports = Subscription;
