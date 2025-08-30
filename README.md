#  Student Management

A full-stack MERN app to manage students with **Clerk Auth (Google Sign-In)** + **MongoDB backend**.

---

##  Setup Instructions

### 1 Clone the Repository

git clone https://github.com/your-username/Student-Management.git


cd Student_Management

###   Install frontend & backend 
# Backend
cd Backend


npm install

###  Frontend
cd ../student-Frontend


npm install

### .env setup 
  VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key

  
MONGODB_URI=your_mongo_uri
PORT=5000

### Run app
Backend


cd Backend && npm run dev

Frontend


cd student-Frontend && npm run dev



