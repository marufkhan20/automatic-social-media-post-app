const {
  createAndUpdateSettingController,
  getSettingController,
  getAllActivitiesController,
} = require("../controllers/settingController");
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware");

const router = require("express").Router();

// get setting
router.get("/", adminAuthMiddleware, getSettingController);

// get all activities
router.get("/activities", adminAuthMiddleware, getAllActivitiesController);

// create and update setting
router.post(
  "/create-and-update",
  adminAuthMiddleware,
  createAndUpdateSettingController
);

module.exports = router;
