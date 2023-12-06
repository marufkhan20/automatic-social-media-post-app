const {
  createNewGalleryController,
  getAllGalleriesController,
  uploadFileController,
} = require("../controllers/galleryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all galleries
router.get("/:type/:team/:user", authMiddleware, getAllGalleriesController);

// create new gallery
router.post("/create-gallery", authMiddleware, createNewGalleryController);

// add file in gallery
router.put("/upload-file/:id", authMiddleware, uploadFileController);

module.exports = router;
