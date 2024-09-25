const Job = require("../models/jobModel");

const addJob = async (req, res) => {
  const { title, type, location, description, salary, company } = req.body;

  try {
    if (!title || !type || !location || !description || !salary || !company) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    const job = await Job.create({
      title,
      type,
      location,
      description,
      salary,
      company,
    });
    if (job) {
      res.status(201).json({ message: "Created succeed." });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const fetchJob = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve jobs", error });
  }
};

const updateJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const updatedJob = await Job.findByIdAndUpdate(
      { _id: jobId },
      { ...req.body },
      { new: true }
    );
    if (updatedJob) {
      res.status(200).json({ message: "Updated succeed." });
    } else {
      res.status(404).json({ message: "Job not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update job." });
  }
};

const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const deletedJob = await Job.findByIdAndDelete({ _id: jobId });
    if (deletedJob) {
      res.status(200).json({ message: "Deleted succeed." });
    } else {
      res.status(404).json({ message: "Job not found." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete job." });
  }
};

module.exports = {
  addJob,
  fetchJob,
  updateJob,
  deleteJob,
};
