const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  ccode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  cname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  cdescription: {
    type: String,
    required: false,
  },
  ccredits: {
    type: Number,
    required: true,
  },
  cdept: {
    type: String,
    required: true,
  },
  crating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  ccount: {
    type: Number,
    required: true,
    default: 0,
  },
  iterations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Iteration",
    },
  ],
});

const iterationSchema = new mongoose.Schema({
  ccode: {
    type: String,
    required: true,
    trim: true,
  },
  instructorName: {
    type: String,
    required: true,
  },
  courseRating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  semesterOffered: {
    type: String,
    required: true,
  },
  ratingsCount: {
    type: Number,
    default: 0,
  },
});

const Course = mongoose.model("Course", courseSchema, "courses");
const Iteration = mongoose.model("Iteration", iterationSchema, "iterations");

module.exports = {
  Course,
  Iteration,
};
