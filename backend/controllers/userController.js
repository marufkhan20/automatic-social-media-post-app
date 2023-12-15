const User = require("../models/User");
const Jimp = require("jimp");
const path = require("path");
const Activity = require("../models/Activity");

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

// get all managers and manage users controller
const getAllManagersAndManageUsersController = async (req, res) => {
  try {
    const { _id, role } = req.user || {};

    const { status } = req.params || {};

    if (role === "manager") {
      let user = await User.findById(_id).populate("users.user");
      const users = [];

      for (const singleUser of user?.users) {
        if (status === "active") {
          if (singleUser?.status === "active") {
            users.push(singleUser);
          }
        } else {
          if (singleUser?.status !== "active") {
            users.push(singleUser);
          }
        }
      }

      res.status(200).json(users);
    }

    if (role === "user") {
      let manager = await User.findById(_id).populate("managers.manager");
      const managers = [];

      for (const singleManager of manager?.managers) {
        if (status === "active") {
          if (singleManager?.status === "active") {
            managers.push(singleManager);
          }
        } else {
          if (singleManager?.status !== "active") {
            managers.push(singleManager);
          }
        }
      }
      res.status(200).json(managers);
    }
  } catch (err) {
    console.error(err);
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

    if (profilePic) {
      // upload image
      const buffer = Buffer.from(
        profilePic?.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
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
    user.profilePic = imagePath
      ? `/storage/profile/${imagePath}`
      : user.profilePic;
    user.business = business;
    user.timeZone = timeZone;
    await user.save();

    // create new activity
    const newActivity = new Activity({
      time: new Date(),
      user: user?._id,
      activity: "Update Profile",
    });

    await newActivity.save();

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// add manage user controller
const addManageUserController = async (req, res) => {
  try {
    const { email } = req.body || {};
    const { _id } = req.user || {};

    const user = await User.findOne({ email });
    const manager = await User.findById(_id);

    if (!user) {
      return res.status(400).json({
        error: {
          email: "User not found!!",
        },
      });
    }

    user.managers =
      user?.managers?.length > 0
        ? [
            ...user?.managers,
            {
              manager: _id,
              status: "pending",
            },
          ]
        : [
            {
              manager: _id,
              status: "pending",
            },
          ];

    await user.save();

    manager.users =
      manager?.users?.length > 0
        ? [
            ...manager?.users,
            {
              user: user?._id,
              status: "pending",
            },
          ]
        : [
            {
              user: user?._id,
              status: "pending",
            },
          ];

    await manager.save();

    res.status(200).json(manager);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// accept or reject manager controller
const acceptOrRejectManagerController = async (req, res) => {
  try {
    const { _id, role } = req.user || {};
    const { id, status } = req.body || {};

    let user;

    if (role === "user") {
      user = await User.findOneAndUpdate(
        {
          _id,
          "managers.manager": id,
        },
        {
          $set: {
            "managers.$.status": status,
          },
        },
        { new: true }
      );

      await User.findOneAndUpdate(
        {
          _id: id,
          "users.user": _id,
        },
        {
          $set: {
            "users.$.status": status,
          },
        },
        { new: true }
      );
    }

    if (role === "manager") {
      user = await User.findOneAndUpdate(
        {
          _id: id,
          "managers.manager": _id,
        },
        {
          $set: {
            "managers.$.status": status,
          },
        },
        { new: true }
      );

      await User.findOneAndUpdate(
        {
          _id,
          "users.user": id,
        },
        {
          $set: {
            "users.$.status": status,
          },
        },
        { new: true }
      );
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

module.exports = {
  getAllUsersAndManagersByAdminController,
  getAllManagersAndManageUsersController,
  updateProfileController,
  addManageUserController,
  acceptOrRejectManagerController,
};
