const Apply = require("../models/applyModel");
const validator = require("validator");
const mongoose = require("mongoose");

const apply = async (req, res) => {
  const { name, email, phone, job } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "Resume file is required!" });
  }

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid!" });
  }

  // if (req.file.mimetype !== "application/pdf") {
  //   return res
  //     .status(400)
  //     .json({ error: "Resume file should be only in PDF format!" });
  // }
  try {
    const createApply = await Apply.create({
      name,
      email,
      phone,
      resume: {
        name: req.file.name,
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      job,
    });
    if (!createApply) {
      return res.status(400).json({ error: "Try To Apply Again!", error });
    }
    res.status(201).json({ message: "You Applied Successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getApply = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "wrong id" });
  }
  try {
    const application = await Apply.findById(id);
    if (!application) {
      return res.status(404).json({ error: "Applicant not found" });
    }
    if (
      !application.resume ||
      !application.resume.data ||
      !application.resume.contentType
    ) {
      return res.status(404).json({ error: "Resume file not found!" });
    }
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllApplicants = async (req, res) => {
  try {
    const applicants = await Apply.find({});
    if (!applicants) {
      return res.status(400).json({ error: "there are not applicants yet!" });
    }
    res.status(200).json(applicants);
  } catch (error) {}
};

const deleteApplicant = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "wrong id" });
  }
  const applicant = await Apply.findOneAndDelete({ _id: id });
  if (!applicant) {
    return res.status(400).json({ error: "delete unsuccessful!" });
  }
  res.status(200).json({ message: "applicant deleted successfully!" });
};

module.exports = { apply, getApply, getAllApplicants, deleteApplicant };
