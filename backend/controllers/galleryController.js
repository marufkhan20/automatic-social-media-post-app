const Gallery = require("../models/Gallery");
const User = require("../models/User");
const Jimp = require("jimp");
const path = require("path");
const fs = require("fs");

// get all galleries controller
const getAllGalleriesController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { type, team, user } = req.params || {};

    let galleries;

    if (team !== "not-found") {
      galleries = await Gallery.find({ type, team });
    } else {
      galleries = await Gallery.find({
        user: user !== "not-found" ? user : _id,
        type,
      });
    }

    res.status(200).json(galleries);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred",
    });
  }
};

// create new Gallery controller
const createNewGalleryController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { folderName, type, team, user: userId } = req.body || {};

    let data;

    if (team) {
      data = {
        folderName,
        type,
        team,
        resources: [],
      };
    } else {
      data = {
        folderName,
        user: userId || _id,
        type,
        resources: [],
      };
    }

    const newGallery = new Gallery(data);

    await newGallery.save();

    // update user model
    const user = await User.findById(_id);
    user.galleries = [...user?.galleries, newGallery?._id];
    await user.save();

    res.status(201).json(newGallery);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// upload file controller
const uploadFileController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const { file, type } = req.body || {};

    let filePath;

    // upload image
    if (file && type === "image") {
      // upload image
      const buffer = Buffer.from(
        file.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
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
      } catch (err) {
        return res.status(500).json({
          error: "Could not process the image!!",
        });
      }
    }

    if (file && type === "video") {
      const videoData = file.split(";base64,").pop();
      const videoBuffer = Buffer.from(videoData, "base64");
      filePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.mp4`;
      const videoPath = path.resolve(
        __dirname,
        `../public/storage/gallery/videos/${filePath}`
      );

      fs.writeFile(videoPath, videoBuffer, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error uploading video");
        }
      });
    }

    // get gallery and update
    const gallery = await Gallery.findById(id);
    gallery.resources = [
      ...gallery.resources,
      type === "image"
        ? `/storage/gallery/images/${filePath}`
        : `/storage/gallery/videos/${filePath}`,
    ];
    await gallery.save();

    res.status(200).json(gallery);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

module.exports = {
  getAllGalleriesController,
  createNewGalleryController,
  uploadFileController,
};
