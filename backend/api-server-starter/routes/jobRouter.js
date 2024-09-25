const express = require("express");
const router = express.Router();

const {
  addJob,
  fetchJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobControllers");

// add route
router.post("/", addJob);

// fetch route
router.get("/", fetchJob);

// update route
router.put("/:jobId", updateJob);

// delete route
router.delete("/:jobId", deleteJob);

module.exports = router;
