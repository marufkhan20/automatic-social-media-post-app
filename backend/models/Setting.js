const { Schema, model } = require("mongoose");

const settingSchema = new Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    timeZone: String,
    language: String,
    notifications: [
      {
        type: String,
      },
    ],
    twoFactorAuth: Boolean,
    passwordExpiry: String,
    facebookAppId: String,
    facebookAppSecret: String,
    instagramAppId: String,
    instagramAppSecret: String,
  },
  { timestamps: true }
);

const Setting = model("Setting", settingSchema);

module.exports = Setting;
