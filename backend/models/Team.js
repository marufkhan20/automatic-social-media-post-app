const { Schema, model } = require("mongoose");

const teamSchema = new Schema(
  {
    name: String,
    description: String,
    code: String,
    logo: String,
    members: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        role: String,
        status: String,
      },
    ],
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    templates: {
      type: [Schema.Types.ObjectId],
      ref: "Template",
    },
    galleries: {
      type: [Schema.Types.ObjectId],
      ref: "Gallery",
    },
  },
  { timestamps: true }
);

const Team = model("Team", teamSchema);

module.exports = Team;
