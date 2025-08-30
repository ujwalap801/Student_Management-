const express= require('express');

const app = express();

require("dotenv").config();

let port = 8080;

const connectDB = require('./config/db');
const studentRoutes = require("./routes/studentRoutes")

app.use(express.json());
const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/students", studentRoutes);

connectDB().then(() => {
    console.log("Database connection successful");

    app.listen(port, () => {
        console.log(`Server is listening on ${port}`);
    })

}).catch(err => {
    console.error("Datasbase cannot be connected");
}
)
