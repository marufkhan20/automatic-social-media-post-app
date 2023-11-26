const Post = require("../models/Post");
const { Template } = require("../models/Template");
const Jimp = require("jimp");
const path = require("path");

// posts controller
const getPostsController = async (req, res) => {
  try {
    const { type } = req.params || {};
    const { _id } = req.user || {};

    const posts = await Post.find({ user: _id, type, published: false });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// get single post controller
const getSinglePostController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// create new post controller
const createNewPostController = async (req, res) => {
  try {
    const {
      templateId,
      date,
      dateFormat,
      time,
      title,
      description,
      type,
      attachmentType,
      attachments,
    } = req.body || {};
    const { _id } = req.user || {};

    const attachmentsImages = [];

    // upload images
    if (attachmentType === "image") {
      attachments?.forEach(async (image) => {
        if (image?.includes("/storage")) {
          attachmentsImages.push(image);
        } else {
          let filePath;

          console.log("file upload", image);

          // upload image
          const buffer = Buffer.from(
            image.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
            "base64"
          );

          filePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

          try {
            const jimpResp = await Jimp.read(buffer);
            jimpResp.write(
              path.resolve(
                __dirname,
                `../public/storage/gallery/images/${filePath}`
              )
            );

            attachmentsImages.push(`/storage/gallery/images/${filePath}`);
          } catch (err) {
            console.log(err);
          }
        }
      });
    }

    // create new post
    const newPost = new Post({
      user: _id,
      date,
      dateFormat,
      time,
      title,
      description,
      type,
      attachmentType,
      attachments: attachmentType === "image" ? attachmentsImages : attachments,
      template: templateId,
    });

    await newPost.save();

    // update template model
    const template = await Template.findById(templateId);
    template.posts = [...template?.posts, newPost?._id];
    await template.save();

    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// dublicate post controller
const dublicatePostController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const { title, description } = req.body || {};

    const post = await Post.findById(id);

    // dublicate post from this post
    const dublicatePost = new Post({
      title,
      description,
      ...post,
    });

    await dublicatePost.save();

    res.status(200).json(dublicatePost);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// reschedule post controller
const reschedulePostController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const { time, date } = req.body || {};

    const updatedPost = await Post.findByIdAndUpdate(id, {
      $set: { time, date },
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// update post controller
const updatePostController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const updatedPost = await Post.findOneAndUpdate(id, { $set: req.body });
    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// delete post controller
const deletePostController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const deletedPost = await Post.findByIdAndDelete(id);

    // delete from post template
    if (deletedPost?._id) {
      await Template.updateOne(
        { _id: deletedPost?.template },
        { $pull: { posts: deletedPost?._id } }
      );
    }

    res.status(200).json(deletedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

module.exports = {
  getPostsController,
  getSinglePostController,
  createNewPostController,
  dublicatePostController,
  deletePostController,
  reschedulePostController,
  updatePostController,
};
