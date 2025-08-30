const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);

  }
};

module.exports = connectDB;
