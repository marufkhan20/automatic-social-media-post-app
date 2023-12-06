const {
  createNewTemplateFolderController,
  createNewTemplateController,
  importTemplateController,
  moveToTemplateFolderController,
  dublicateTemplateController,
  deleteTemplateController,
  getSingleTemplateController,
  getAllTemplatesController,
  getAllTemplatesFolderController,
} = require("../controllers/templateController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get single template
router.get("/single-template/:id", authMiddleware, getSingleTemplateController);

// get all templates
router.get(
  "/all-templates/:type/:team/:user",
  authMiddleware,
  getAllTemplatesController
);

// get all template folders
router.get(
  "/all-templates-folders/:type/:team/:user",
  authMiddleware,
  getAllTemplatesFolderController
);

// create new template folder
router.post(
  "/create-folder",
  authMiddleware,
  createNewTemplateFolderController
);

// create new template
router.post("/create-template", authMiddleware, createNewTemplateController);

// import template
router.post("/import-template", authMiddleware, importTemplateController);

// move to template folder
router.put(
  "/move-to-template-folder/:id/:folderId",
  authMiddleware,
  moveToTemplateFolderController
);

// dublicate template
router.post("/dublicate-template", authMiddleware, dublicateTemplateController);

// delete template
router.delete("/delete-template/:id", authMiddleware, deleteTemplateController);

module.exports = router;
