const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    template: {
      type: Schema.Types.ObjectId,
      ref: "Template",
    },
    type: String,
    // platform: {
    //   type: Schema.Types.ObjectId,
    //   ref: "SocialMedia",
    // },
    date: String,
    dateFormat: String,
    startMode: String,
    time: String,
    title: String,
    description: String,
    attachmentType: String,
    attachments: {
      type: [String],
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;
