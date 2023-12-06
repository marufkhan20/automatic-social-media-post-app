const {
  getAllPackagesController,
  deletePackageController,
  createNewPackageController,
} = require("../controllers/packageController");
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware");

const router = require("express").Router();

// get all packages
router.get("/", getAllPackagesController);

// create new package
router.post("/create-package", adminAuthMiddleware, createNewPackageController);

// delete package
router.delete(
  "/delete-package/:id",
  adminAuthMiddleware,
  deletePackageController
);

module.exports = router;
