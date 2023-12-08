const {
  getAllPackagesController,
  deletePackageController,
  createNewPackageController,
  subscribePackageController,
  updateUserSubscriptionPlanController,
  getAllSubscriptionsByUserIdController,
  getAllSubscriptionsController,
} = require("../controllers/packageController");
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all packages
router.get("/", getAllPackagesController);

// get all subscriptions
router.get(
  "/all-subscriptions",
  adminAuthMiddleware,
  getAllSubscriptionsController
);

// get all subscriptions by user id
router.get(
  "/all-subscriptions-by-user",
  authMiddleware,
  getAllSubscriptionsByUserIdController
);

// create new package
router.post("/create-package", adminAuthMiddleware, createNewPackageController);

// subscribe to package
router.post("/subscribe-package", authMiddleware, subscribePackageController);

// update user subscription plan
router.post("/update-subscription-plan", updateUserSubscriptionPlanController);

// delete package
router.delete(
  "/delete-package/:id",
  adminAuthMiddleware,
  deletePackageController
);

module.exports = router;
