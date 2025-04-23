import mongoose from "mongoose";
export async function connectDB(uri) {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    // Optionally, handle reconnection logic here
  }
}
