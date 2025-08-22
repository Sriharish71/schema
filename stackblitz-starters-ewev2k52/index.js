const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  durationWeeks: {
    type: Number,
    required: true,
    min: [1, "Course duration must be at least 1 week"]
  },
  instructor: {
    type: String,
    required: true,
    trim: true
  }
});

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }
  ]
});

const Course = mongoose.model("Course", courseSchema);
const Student = mongoose.model("Student", studentSchema);

module.exports = { Course, Student };
