const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB_URI = process.env.MONGODB_URI || "";

async function connectDB() {
  try {
    if (!DB_URI) {
      throw new Error("MONGODB_URI is not defined in the environment");
    }

    await mongoose.connect(DB_URI);

    // await mongoose.connection.dropDatabase();
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

module.exports = { connectDB };
