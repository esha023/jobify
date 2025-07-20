import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";
import { validateJobInput, validateJobId } from "../middleware/ValidationMiddleware.js";

router.route("/stats").get(showStats);
router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router.route("/:id").get(validateJobId, getJob).patch(validateJobInput, updateJob).delete(validateJobId, deleteJob);

export default router;