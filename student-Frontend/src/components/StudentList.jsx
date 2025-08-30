import { useState, useEffect} from "react";
import { Modal, Button } from "react-bootstrap";

function StudentList({ students, onDelete, onEdit }) {
  const [message, setMessage] = useState(null); // { type: "success" | "error", text: string }
  const [confirmDelete, setConfirmDelete] = useState(null); // student to delete

  const handleDelete = async (id) => {
    try {
      await onDelete(id);
      setMessage({ type: "success", text: " Student deleted successfully" });
    } catch (err) {
      setMessage({ type: "danger", text: ` Failed to delete: ${err.message}` });
    } finally {
      setConfirmDelete(null);
    }
  };

  useEffect(() => {
  if (message?.type === "success") {
    const timer = setTimeout(() => setMessage(null), 3000); // 3s
    return () => clearTimeout(timer);
  }
}, [message]);


  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl fw-bold mb-3"> Student List</h2>

      {/* Feedback Message */}
      {message && (
        <div className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
          {message.text}
          <button
            type="button"
            className="btn-close"
            onClick={() => setMessage(null)}
          ></button>
        </div>
      )}

      {students.length === 0 ? (
        <div className="alert alert-info text-center">No students found </div>
      ) : (
        <table className="table table-striped table-hover shadow-sm">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Course</th>
              <th>Year</th>
              <th>Status</th>
              <th style={{ width: "150px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s._id}>
                <td>{s.name}</td>
                <td>{s.rollNumber}</td>
                <td>{s.course}</td>
                <td>{s.yearOfStudy}</td>
                <td>
                  <span
                    className={`badge ${
                      s.status === "Active" ? "bg-success" : "bg-secondary"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => onEdit(s)}
                  >
                     Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => setConfirmDelete(s)}
                  >
                     Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        show={!!confirmDelete}
        onHide={() => setConfirmDelete(null)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title> Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete{" "}
          <strong>{confirmDelete?.name}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setConfirmDelete(null)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDelete(confirmDelete._id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StudentList;
