const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    time: Date,
    activity: String,
  },
  { timestamps: true }
);

const Activity = model("Activity", activitySchema);

module.exports = Activity;
