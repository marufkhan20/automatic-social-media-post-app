const {
  getAllUsersAndManagersByAdminController,
  updateProfileController,
} = require("../controllers/userController");
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all users and managers by admin
router.get(
  "/get-users-managers/:role",
  adminAuthMiddleware,
  getAllUsersAndManagersByAdminController
);

// update profile information
router.put("/update-profile", authMiddleware, updateProfileController);

module.exports = router;
