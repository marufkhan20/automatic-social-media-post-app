const User = require("../models/User");
const Jimp = require("jimp");
const path = require("path");

// get all users and managers by admin
const getAllUsersAndManagersByAdminController = async (req, res) => {
  try {
    const { role } = req.params || {};
    const data = await User.find({ role });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// update profile controller
const updateProfileController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { firstName, lastName, profilePic, business, timeZone } =
      req.body || {};

    let imagePath;

    if (!profilePic?.includes("profile")) {
      // upload image
      const buffer = Buffer.from(
        profilePic.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
        "base64"
      );

      imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

      try {
        const jimpResp = await Jimp.read(buffer);
        jimpResp
          .resize(300, 300)
          .write(
            path.resolve(__dirname, `../public/storage/profile/${imagePath}`)
          );
      } catch (err) {
        return res.status(500).json({
          error: "Could not process the image!!",
        });
      }
    }

    const user = await User.findById(_id);
    user.firstName = firstName;
    user.lastName = lastName;
    user.profilePic = image ? `/storage/profile/${imagePath}` : user.profilePic;
    user.business = business;
    user.timeZone = timeZone;
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

module.exports = {
  getAllUsersAndManagersByAdminController,
  updateProfileController,
};
