const {
  registerController,
  loginController,
  resetPasswordController,
  fortgotPasswordController,
} = require("../controllers/authController");

const router = require("express").Router();

// registration route
router.post("/register", registerController);

// login route
router.post("/login", loginController);

// get user by email
router.post("/forgot-password", fortgotPasswordController);

// reset account password
router.put("/reset-password/:token", resetPasswordController);

module.exports = router;
