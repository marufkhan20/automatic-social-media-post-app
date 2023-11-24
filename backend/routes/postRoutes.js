const {
  getPostsController,
  getSinglePostController,
  createNewPostController,
  dublicatePostController,
  updatePostController,
  reschedulePostController,
  deletePostController,
} = require("../controllers/postController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all posts
router.get("/all-posts/:type", authMiddleware, getPostsController);

// get single post
router.get("/single-post/:id", authMiddleware, getSinglePostController);

// create new post
router.post("/create-post", authMiddleware, createNewPostController);

// dublicate post
router.post("/dublicate-post/:id", authMiddleware, dublicatePostController);

// update post
router.put("/update-post/:id", authMiddleware, updatePostController);

// reschedule post
router.put("/reschedule-post/:id", authMiddleware, reschedulePostController);

// delete post
router.delete("/delete-post/:id", authMiddleware, deletePostController);

module.exports = router;
