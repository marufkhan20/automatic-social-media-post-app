const {
  getAllDashboardInformationController,
  generateReportController,
  writeDocumentationController,
  getDocumentationController,
} = require("../controllers/dashboardController");
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware");

const router = require("express").Router();

router.get("/", adminAuthMiddleware, getAllDashboardInformationController);

// get documentation
router.get("/get-documentation", getDocumentationController);

// generate report
router.get("/generate-report/:startdate/:enddate", generateReportController);

// documentation
router.post(
  "/write-documentation",
  adminAuthMiddleware,
  writeDocumentationController
);

module.exports = router;
