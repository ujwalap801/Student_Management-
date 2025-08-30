const express = require("express");
const {
  addStudent,
  getAllStudents,
  searchStudents,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

const router = express.Router();


router.post("/", addStudent);          // Add student
router.get("/", getAllStudents);       // View all students
router.get("/search", searchStudents); // Search by name/rollNo
router.put("/:id", updateStudent);     // Update by ID
router.delete("/:id", deleteStudent);  // Delete by ID

module.exports = router;
