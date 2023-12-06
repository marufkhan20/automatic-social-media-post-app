const {
  getAllUsersAndManagersByAdminController,
  updateProfileController,
  getAllManagersAndManageUsersController,
  addManageUserController,
  acceptOrRejectManagerController,
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

// get all manage users and managers
router.get(
  "/get-manage-users-managers/:status",
  authMiddleware,
  getAllManagersAndManageUsersController
);

// update profile information
router.put("/update-profile", authMiddleware, updateProfileController);

// add manage user
router.post("/add-manage-user", authMiddleware, addManageUserController);

// accept reject manage user
router.put(
  "/accept-reject-manage-user",
  authMiddleware,
  acceptOrRejectManagerController
);

module.exports = router;
