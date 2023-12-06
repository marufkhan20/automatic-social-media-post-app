const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    profilePic: String,
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
    },
    business: String,
    timeZone: String,
    galleries: {
      type: [Schema.Types.ObjectId],
      ref: "Gallery",
    },
    templates: {
      type: [Schema.Types.ObjectId],
      ref: "Template",
    },
    teams: {
      type: [Schema.Types.ObjectId],
      ref: "Team",
    },
    managers: [
      {
        manager: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        status: String,
      },
    ],
    users: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        status: String,
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
