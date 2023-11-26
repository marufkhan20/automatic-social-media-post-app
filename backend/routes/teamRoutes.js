const router = require("express").Router();

const {
  getJoinedTeamsController,
  getSingleTeamController,
  getTeamTemplatesController,
  getTeamGalleriesController,
  getTeamPendingMembersController,
  joinTeamController,
  approveTeamMemberController,
  createNewTeamController,
  leaveTeamController,
  updateTeamController,
  deleteTeamController,
} = require("../controllers/teamController");
const authMiddleware = require("../middlewares/authMiddleware");

// get joined teams
router.get("/joined-teams", authMiddleware, getJoinedTeamsController);

// get single team
router.get("/single-team/:id", authMiddleware, getSingleTeamController);

// get team templates
router.get(
  "/team-templates/:id/:type",
  authMiddleware,
  getTeamTemplatesController
);

// get team galleries
router.get(
  "/team-galleries/:id/:type",
  authMiddleware,
  getTeamGalleriesController
);

// get team pending members
router.get(
  "/team-pending-members/:id",
  authMiddleware,
  getTeamPendingMembersController
);

// join team
router.put("/join-team/:code", authMiddleware, joinTeamController);

// approve team member
router.put(
  "/approve-team-member/:id",
  authMiddleware,
  approveTeamMemberController
);

// create new team
router.post("/create-team", authMiddleware, createNewTeamController);

// leave team controller
router.put("/leave-team/:id", authMiddleware, leaveTeamController);

// update team
router.put("/update-team/:id", authMiddleware, updateTeamController);

// delete team
router.delete("/delete-team/:id", authMiddleware, deleteTeamController);

module.exports = router;
