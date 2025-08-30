import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import { useStudents } from "../hooks/useStudents";

function Dashboard() {
  const {
    students,
    search,
    setSearch,
    handleSearch,
    addStudent,
    updateStudent,
    deleteStudent,
    editingStudent,
    setEditingStudent,
        handleReset, 
    

  } = useStudents();

  return (
    <div className="row g-0">
    
      <div className="col-lg-3 col-md-4 mb-4">
        <StudentForm
          onAdd={addStudent}
          onUpdate={updateStudent}
          editingStudent={editingStudent}
        />
      </div>

    
      <div className="col-lg-9 col-md-8">
        <div className="mb-3">
          <SearchBar
            search={search}
            setSearch={setSearch}
            onSearch={handleSearch}
             handleReset={handleReset}
          />
        </div>
        <StudentList
          students={students}
          onDelete={deleteStudent}
          onEdit={setEditingStudent}
        />
      </div>
    </div>
  );
}

export default Dashboard;
