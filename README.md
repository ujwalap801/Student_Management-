# 🎓 Student Management

A full-stack MERN app to manage students with **Clerk Auth (Google Sign-In)** + **MongoDB backend**.

---

## 📂 Project Structure
src/
├─ components/ → StudentForm, StudentList, SearchBar
├─ hooks/ → useStudents
├─ layouts/ → RootLayout (Navbar + Clerk)
├─ pages/ → Dashboard, Auth
└─ App.jsx → Routing


---

## ⚡ Setup

1. **Clone repo**

   git clone https://github.com/your-username/student-manager.git
   cd Student_Management

  2 **  Install frontend & backend **
  cd Backend && npm install
  cd student-Frontend && npm install

  3 ** .env setup **
  VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
MONGODB_URI=your_mongo_uri
PORT=5000

4. Run app
#Backend
cd Backend && npm run dev

#Frontend
cd student-Frontend && npm run dev



