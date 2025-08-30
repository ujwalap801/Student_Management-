import {useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/students";

import { StudentContext } from "./StudentContext";

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [search, setSearch] = useState("");

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${API_URL}/`);
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching students:", err.message);
    }
  };




const handleSearch = async () => {
  if (!search.trim()) {
    return fetchStudents(); 
  }

  try {
    let queryParam = "";

    if (/^ROLL\d+$/i.test(search.trim())) {
      queryParam = `rollNumber=${search.trim().toUpperCase()}`;
    } else {
      queryParam = `name=${search.trim()}`;
    }

    const res = await axios.get(`${API_URL}/search?${queryParam}`);
    setStudents(res.data);
  } catch (err) {
    console.error("Error searching:", err.message);
  }
};


const handleReset = () => {
  setSearch("");     
  fetchStudents();   
};


  const addStudent = async (student) => {
  try {
    console.log("Sending new student:", student);
    const res = await axios.post(API_URL, student, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Response:", res.data);

    fetchStudents();
  } catch (err) {
    console.error("Error adding student:", err.response?.data || err.message);
  }
};

  const updateStudent = async (id, updatedData) => {
    try {
      await axios.put(`${API_URL}/${id}`, updatedData);
      setEditingStudent(null);
      fetchStudents();
    } catch (err) {
      console.error("Error updating student:", err.message);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchStudents();
    } catch (err) {
      console.error("Error deleting student:", err.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        students,
        search,
        setSearch,
        handleSearch,
        addStudent,
        updateStudent,
        deleteStudent,
        editingStudent,
        setEditingStudent,
        handleReset 
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};


