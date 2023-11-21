const {
  apply,
  getApply,
  getAllApplicants,
  deleteApplicant,
} = require("../controllers/applyController");
const upload = require("../middlewares/applyMiddleware");

const router = require("express").Router();
const requireAuth = require("../middlewares/authMiddleware");

//Authorization Middleware
router.use(requireAuth);

router.post("/", upload.single("resume"), apply);
router.get("/:id", getApply);
router.get("/", getAllApplicants);
router.delete("/:id", deleteApplicant);

module.exports = router;
