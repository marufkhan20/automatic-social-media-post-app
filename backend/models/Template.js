const { Schema, model } = require("mongoose");

const templateSchema = new Schema(
  {
    title: String,
    description: String,
    code: String,
    folder: {
      type: Schema.Types.ObjectId,
      ref: "TemplateFolder",
    },
    type: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    posts: {
      type: [Schema.Types.ObjectId],
      ref: "Post",
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  { timestamps: true }
);

const templateFolderSchema = new Schema(
  {
    title: String,
    templates: {
      type: [Schema.Types.ObjectId],
      ref: "Template",
    },
    type: String,
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

const Template = model("Template", templateSchema);
const TemplateFolder = model("TemplateFolder", templateFolderSchema);

module.exports = {
  Template,
  TemplateFolder,
};
