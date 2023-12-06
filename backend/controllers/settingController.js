const Activity = require("../models/Activity");
const Setting = require("../models/Setting");

// get setting controller
const getSettingController = async (req, res) => {
  try {
    const { _id } = req.admin || {};
    const setting = await Setting.findOne({ admin: _id });
    res.status(200).json(setting);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// get all activities
const getAllActivitiesController = async (req, res) => {
  try {
    const activities = await Activity.find().populate("user");
    res.status(200).json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// create and update setting controller
const createAndUpdateSettingController = async (req, res) => {
  try {
    const { _id } = req.admin || {};
    const {
      timeZone,
      language,
      notifications,
      twoFactorAuth,
      passwordExpiry,
      facebookAppId,
      facebookAppSecret,
      instagramAppId,
      instagramAppSecret,
    } = req.body || {};

    const setting = await Setting.findOne({ admin: _id });

    if (setting) {
      // update setting
      setting.timeZone = timeZone;
      setting.language = language;
      setting.notifications = notifications;
      setting.twoFactorAuth = twoFactorAuth;
      setting.passwordExpiry = passwordExpiry;
      setting.facebookAppId = facebookAppId;
      setting.facebookAppSecret = facebookAppSecret;
      setting.instagramAppId = instagramAppId;
      setting.instagramAppSecret = instagramAppSecret;

      await setting.save();
      return res.status(200).json(setting);
    }

    // create new setting
    const newSetting = new Setting({
      admin: _id,
      timeZone,
      language,
      notifications,
      twoFactorAuth,
      passwordExpiry,
      facebookAppId,
      facebookAppSecret,
      instagramAppId,
      instagramAppSecret,
    });

    await newSetting.save();

    res.status(200).json(newSetting);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

module.exports = {
  getSettingController,
  getAllActivitiesController,
  createAndUpdateSettingController,
};
