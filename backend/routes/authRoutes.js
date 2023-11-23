const {
  registerController,
  loginController,
  resetPasswordController,
  fortgotPasswordController,
  changePasswordController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// registration route
router.post("/register", registerController);

// login route
router.post("/login", loginController);

// get user by email
router.post("/forgot-password", fortgotPasswordController);

// reset account password
router.put("/reset-password/:token", resetPasswordController);

// update password
router.put("/update-password", authMiddleware, changePasswordController);

module.exports = router;
