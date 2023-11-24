const Post = require("../models/Post");
const { Template } = require("../models/Template");

// posts controller
const getPostsController = async (req, res) => {
  try {
    const { type } = req.params || {};
    const { _id } = req.user || {};

    const posts = await Post.find({ user: _id, type });
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
      attachments,
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

    const updatedPost = await Post.findOneAndUpdate(id, {
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
