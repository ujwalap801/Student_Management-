
const mongoose = require("mongoose");

const courses = [
  "Computer Science",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Business Administration",
  "Psychology",
  "Economics",
  "Mathematics"
];

const studentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"], 
    trim: true, 
    minlength: [2, "Name must be at least 2 characters"] 
  },
  rollNumber: { 
    type: String, 
    unique: true, 
    required: [true, "Roll Number is required"], 
    match: [/^ROLL\d+$/, "Roll number must start with ROLL followed by numbers"] 
  },
  course: { 
    type: String, 
    enum: { 
      values: courses, 
      message: "Course must be one of the predefined options" 
    },
    required: true 
  },
  yearOfStudy: { 
    type: Number, 
    min: [1, "Year must be at least 1"], 
    max: [4, "Year must be at most 4"], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["Active", "Graduated"], 
    required: true 
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
