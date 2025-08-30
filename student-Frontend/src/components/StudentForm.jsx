import { useState, useEffect } from "react";

const courses = [
  "Computer Science",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Business Administration",
  "Psychology",
  "Economics",
  "Mathematics"
];

function StudentForm({ onAdd, onUpdate, editingStudent }) {
  const [form, setForm] = useState({
    name: "",
    rollNumber: "",
    course: "",
    yearOfStudy: 1,
    status: "Active",
  });

  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({}); 

  useEffect(() => {
    if (editingStudent) {
      setForm(editingStudent);
    } else {
      setForm({
        name: "",
        rollNumber: "",
        course: "",
        yearOfStudy: 1,
        status: "Active",
      });
    }
    setErrors({});
  }, [editingStudent]);

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.rollNumber) {
      newErrors.rollNumber = "Roll Number is required.";
    } else if (!/^ROLL\d+$/.test(form.rollNumber)) {
      newErrors.rollNumber = "Roll Number must start with 'ROLL' followed by numbers.";
    }
    if (!form.course) newErrors.course = "Please select a course.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

   
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage({ type: "error", text: "Please fix the errors before submitting" });
      return;
    }

    try {
      if (editingStudent) {
        await onUpdate(editingStudent._id, form);
        setMessage({ type: "success", text: "Student updated successfully " });
      } else {
        await onAdd(form);
        setMessage({ type: "success", text: "Student added successfully " });
      }

  
      setForm({
        name: "",
        rollNumber: "",
        course: "",
        yearOfStudy: 1,
        status: "Active",
      });
      setErrors({});
    } catch (err) {
      let errorText = "Something went wrong ";
      if (err.response?.data?.message) errorText = err.response.data.message;
      else if (err.message) errorText = err.message;

      setMessage({ type: "error", text: errorText });
    }

    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow-sm bg-light"
      noValidate
    >
      <h4 className="mb-3">{editingStudent ? " Edit Student" : " Add Student"}</h4>

      {message && (
        <div className={`alert alert-${message.type === "success" ? "success" : "danger"} py-2`}>
          {message.text}
        </div>
      )}

      <div className="mb-2">
        <input
          type="text"
          className={`form-control mb-2 ${errors.name ? "is-invalid" : ""}`}
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.name}</div>

        <input
          type="text"
          className={`form-control mb-2 ${errors.rollNumber ? "is-invalid" : ""}`}
          placeholder="Roll Number (e.g. ROLL1001)"
          name="rollNumber"
          value={form.rollNumber}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.rollNumber}</div>

        <select
          className={`form-select mb-2 ${errors.course ? "is-invalid" : ""}`}
          name="course"
          value={form.course}
          onChange={handleChange}
        >
          <option value="">-- Select Course --</option>
          {courses.map((course, idx) => (
            <option key={idx} value={course}>
              {course}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{errors.course}</div>

        <input
          type="number"
          className="form-control mb-2"
          placeholder="Year of Study"
          name="yearOfStudy"
          value={form.yearOfStudy}
          onChange={handleChange}
          min="1"
          max="4"
        />

        <select
          className="form-select"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Graduated">Graduated</option>
        </select>
      </div>

      <button className="btn btn-primary w-100">
        {editingStudent ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default StudentForm;
